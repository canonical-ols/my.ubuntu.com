BIN = ./node_modules/.bin
DIST = ./dist
DATA_DIR=data

# FIXME sstewart 2016/09/07 use shrinkwrap
install: package.json
	npm i

build: install
	./scripts/build.sh

start-db: ARGS=--dbpath $(DATA_DIR)
start-db: mk_data_dir
	mongod $(ARGS)

mk_data_dir:
	mkdir -p ./data

# make start-dev -j2
start-dev: start_dev_webpack start_dev_server

start_dev_webpack:
	node webpack/webpack-dev-server.js

start_dev_server:
	node server/

start_production: $(DIST)
	NODE_ENV=production node dist/server/

test:
	BABEL_DISABLE_CACHE=1 NODE_ENV=TEST \
	$(BIN)/nyc --require babel-core/register \
	$(BIN)/mocha --compilers js:babel-register --recursive ${ARGS}

lint:
	$(BIN)/eslint -c ./.eslintrc.js '**/*.js'

coverage:
	$(BIN)/nyc report --reporter=text-lcov | $(BIN)/coveralls

clean:
	rm -rf ./node_modules
	rm -rf ./dist
	rm -rf ./data

.PHONY: test build clean lint install
