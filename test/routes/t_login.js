// load server/server.js via proxyquire to stub webpack-assets.json
import proxyquire from 'proxyquire';

// stubbing webpack-assets.json imported by handlers/universal
const webpackAssetsStub = {
  main: { js: {}, css: {} },
  // tell proxyquire not to try to load stubbed file
  '@noCallThru': true,
  // tell proxyquire this dependency can be loaded by nested modules
  // WARNING: this disables require cache, which may cause side effects
  // see: https://github.com/thlorenz/proxyquire#caveat
  '@global': true
};
const stubDependencies = {
  '../../../webpack-assets.json': webpackAssetsStub
};

const app = proxyquire(
  '../../src/server/server.js',
  stubDependencies
).default;

import conf from '../../src/server/configure.js';
import nock from 'nock';
import supertest from 'supertest';

const SSO_HOST = conf.get('SERVER:UBUNTU_SSO_HOST');
const UBUNTU_SCA_URL = conf.get('SERVER:UBUNTU_SCA_URL');
const VERIFY_URL = conf.get('SERVER:OPENID:VERIFY_URL');

describe('login routes', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  describe('authenticate', () => {
    it('should redirect from /login/authenticate to SSO', (done) => {
      supertest(app)
        .get('/login/authenticate')
        .expect('location', new RegExp(SSO_HOST))
        .expect(302, done);
    });

    it('should include verify url in redirect header', (done) => {
      supertest(app)
        .get('/login/authenticate')
        .expect('location',
          new RegExp(encodeURIComponent(VERIFY_URL)),
          done
        );
    });

    context('when macaroon service responds with error', () => {

      it('should redirect home on error', (done) => {
        const sca = nock(UBUNTU_SCA_URL)
          .post('/dev/api/acl/', {
            'permissions': ['package_access', 'package_purchase']
          })
          .reply(503, '<html>ERROR</html>');

        supertest(app)
          .get('/login/authenticate')
          .expect('location', '/')
          .expect(302, (err) => {
            sca.done();
            done(err);
          });
      });
    });
  });
});
