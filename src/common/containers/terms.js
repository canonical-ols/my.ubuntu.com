import React, { Component } from 'react';

import styles from './terms.css';

export default class Terms extends Component {

  render() {
    const SNAPCRAFT_URL = 'https://snapcraft.io/';
    const SSO_URL = 'https://login.ubuntu.com/';
    const PRIVACY_POLICY_URL = 'https://www.ubuntu.com/legal/terms-and-policies/privacy-policy';

    return (
      <div className={ styles.terms }>
        <h2>Terms of Service</h2>

        <h3>1. Introduction</h3>

        <p>
          <strong>These Terms of Service cover the provision of Snappy
            Ubuntu Apps by Canonical Group Limited ("Canonical", "us", "our"
            or "we") to you ("you" or "your") subject to and in accordance
            with these Terms of Service (the “Services”).</strong>
        </p>

        <p>
          Please read these Terms of Service carefully before you use
          the Services. By using Services, you agree to become bound
          by these Terms of Service. You may not use the Service for
          illegal or unauthorised purposes or otherwise in accordance
          with this Terms of Service.
        </p>

        <p>
          If you are entering into these Terms of Service on behalf of a
          company or legal entity, you represent that you have authority
          to bind such company or legal entity, its officers, employees
          and agents and all users who access the Service through the
          account, to these Terms of Service. “you” and “your”
          shall refer to the company or legal entity and such users. If
          you do not have such authority do not accept these Terms
          of Service.
        </p>

        <p>
          You must be at least 13 years old to use the Service. If you
          are between age 13 and 18, you confirm that you have your
          parent's or legal guardian's consent to use the Services and
          that they have read and agreed to these Terms of Service.
        </p>


        <p>Any change or update to the Services or Terms of Service will
          be made in accordance with section 6 below.</p>

        <h3>2. Services and Software</h3>

        <p>
          <strong>The Service enables you to download and install snaps
            and software (“Software”) on Snappy Ubuntu Core and any
            compatible supported systems.</strong>
        </p>

        <p>
          Details of the Services can be found here: <a href={ SNAPCRAFT_URL }>http://snapcraft.io/</a>
        </p>

        <p>
          Software will be available from the third party provider of the
          Software or from Canonical directly. If Software is provided
          by a third party then the third party’s end user licence
          agreement will apply (“<strong>Software Terms</strong>”). We
          take no responsibility for such Software. You are responsible
          for compliance with such Software Terms.
        </p>


        <p>You will be presented with the Software Terms prior to you
        being able to use the Software. If you do not agree to any
        Software Terms you must not use or deploy the Software.</p>

        <h3>3. Account</h3>

        <p>
          <strong>You will need an account to access and use the
          Service. We reserve the right to reject your request for an
          account or to immediately cancel or suspend your account and
          your use of the Services at any time if you do not comply with
          the following requirements. You must not attempt to create
          an account or use the Service if doing so would violate these
          Terms of Service. You must:</strong>
        </p>

        <ul>
          <li>
            have a Service account
          </li>
          <li>
            not use the Service for illegal or unauthorised purposes (or
            which encourage or permit illegal or authorised purposes),
            in infringement of a third party's’ rights or otherwise
            in accordance with these Terms of Service
          </li>
          <li>
            not take any action or use the Service in any way that
            might bring Canonical into disrepute or affect the ability
            of Canonical to provide the Service
          </li>
          <li>
            not use the Service in any manner that might be libellous or
            defamatory, that contains threats or incites violence towards
            individuals or entities, or that violates the privacy rights
            of any third party
          </li>
          <li>
            not be located in or use the Services in an OFAC/EAR
            embargoed or sanctioned country or be on the U.S. Commerce
            Department’s Denied Persons List, Entity List, or
            Unverified List
          </li>
        </ul>

        <p>
          If you do not have an account you will need to create one. You
          are responsible for choosing an appropriate password for your
          accounts and for keeping such password secure. Canonical will
          not ask you for your password and you should not reveal it to
          anyone. You are responsible for keeping your account details
          up to date.
        </p>

        <p>
          You will be provided with an <a href={ SSO_URL }>account page</a>.
          The account page will require you to have a Single Sign On
          account with Canonical. You may cancel your account at any
          time through your account page.
        </p>

        <h3>4. End of Service</h3>

        <p>
          <strong>We look forward to providing you with the Service
          for so long as you wish to receive it. However, there are
          some circumstances under which the Service may be suspended
          or terminated:</strong>
        </p>

        <ul>
          <li>
            We cease to make the Service (or any part thereof) available
          </li>
          <li>
            By us at any time as described in Section 3 above
          </li>
          <li>
            You do not pay the Fees
          </li>
        </ul>

        <p>
          We may also cease to offer the services for any other reason, in
          which case we will provide you with notice on your account page.
        </p>

        <p>
          You may cancel your use of the Services by cancelling your
          account in accordance with section 3. Cancellation of your
          account will have the effect of cancelling your subscription
          to the Software.
        </p>

        <h3>5. Fees</h3>

        <p>
          You will be asked to enter your credit card details and to
          confirm your acceptance of these Terms of Service on creation
          of your account. We will only charge your credit card at the
          time of the use of the Service. The Fees will be displayed on
          your account page, including payment details.
        </p>


        <p>
          Payment is handled by a third party and your credit card
          statement may identify payments as made to “Canonical”,
          “Paypal” or “Stripe”. You are responsible for any
          foreign transaction fees incurred by your bank. You must abide
          by any relevant terms and conditions or other legal agreement,
          whether with us or a third party, that governs your use of a
          given payment processing method. We may add or remove payment
          processing methods at our sole discretion and without notice
          to you.  Once your purchase is complete, we or our payment
          processor may charge your credit card or other form of payment,
          along with any additional applicable amounts (including any
          taxes). You are solely responsible for all amounts payable
          associated with purchases you make in accordance with these
          Terms of Service.
        </p>

        <p>
          You are responsible for any Taxes (as defined below), and
          must pay for the Service without any reduction for Taxes. If
          Canonical is obliged to collect or pay Taxes, the Taxes will
          be charged to you. If you have a VAT ID please provide this
          with your credit card details when requested. "Taxes" means
          any duties, customs fees, or taxes (other than income tax)
          associated with the use of the Service or licensing of Software,
          including any related penalties or interest. You must comply
          with all applicable tax laws, including the reporting and
          payment of any taxes arising in connection with your use of
          the Services. The reporting and payment of any such applicable
          taxes are your responsibility.
        </p>

        <h3>6. Changes</h3>

        <p>
          <strong>We aim to continually improve the delivery and content
            of the Service and accordingly may make changes to the Service
            from time to time.</strong>
        </p>

        <p>
          New features may be added, but we may also modify or discontinue
          (temporarily or permanently) part of the Service, in part or in
          whole. We may also offer Service on a trial/beta basis, in which
          case your use of those Service will be limited to the period
          of your trial/beta and subject to the terms of the trial/beta.
        </p>

        <p>
          In the event of a material change to the Service, we will
          notify you on your account page. What constitutes a material
          change in this circumstance will be determined by Canonical,
          in good faith and using common sense and reasonable judgment.
        </p>

        <p>
          Similarly, we may occasionally make changes to these Terms
          of Service and will notify you of material changes either by
          email or on your account page. If Canonical does make changes
          to these Terms of Service, all changes will go into effect at
          the time we post the updated Terms of Service on your account
          page or as otherwise notified at that time.
        </p>

        <p>
          Software Terms may be updated from time to time. It is your
          obligation to check the relevant Software Terms you have agreed
          from time to time. You are responsible for compliance with such
          Software Terms and we take no responsibility for such Software,
          services or charges.
        </p>

        <h3>7. Intellectual property and content</h3>

        <h4>Intellectual property</h4>

        <p>
          You have a non-exclusive, non-transferable (to the extent
          permitted by law) right to view, access and use the Services for
          such time as it is made available by us strictly in accordance
          with these Terms of Service.
        </p>

        <p>
          You will not acquire any rights to the Service (or the
          intellectual property rights contained therein) from your
          use of the Service, other than as set out in these Terms of
          Service or the Software Terms.
        </p>

        <h4>Content</h4>

        <p>
          You are responsible for all Software, content and applications
          that you create or use through your account. All Software,
          content and applications provided by you or a third party are
          accessed at your sole discretion and risk.
        </p>

        <h4>Third party content</h4>

        <p>
          You may use and access Software, content and applications
          provided by third parties (including without limitation third
          party Software providers and their licensors) in your use of
          the Service. You will not remove any third party's copyright
          notices or other identifiers (except in the case of third
          party Software, as allowed by the relevant Software Terms).
        </p>

        <p>
          Canonical is not responsible for any content or applications
          (including without limitation Software) provided by any third
          party. Should you reasonably believe that any third party
          content you access through the Services is in breach of any
          law, regulation or third party's rights, you should notify
          Canonical in writing at the address below. In doing so, please:
          (a) identify the material which you believe to be infringing;
          (b) identify what you believe this material infringes and why;
          (c) Provide your name, email address, address and telephone
          number; (d) confirm that you believe in good faith that this
          material is infringing a law or third party's rights and that,
          to the best of your knowledge, the information you are providing
          is correct; (e) identify if you are acting on behalf of the
          third party whose rights may have been infringed; and (f)
          provide your physical or electronic signature.
        </p>


        <h3>8. Personal data</h3>

        <p>
          In order to provide the Service to you, you will be required
          to provide information about yourself such as your name,
          address, and billing details. Any such information you provide
          to Canonical must always be accurate, correct and up to date.
        </p>

        <p>
          Our <a href={ PRIVACY_POLICY_URL }>Privacy Policy</a> explain
          how we treat your personal data and protect your privacy when
          using our services. Canonical may need to provide limited
          personal data, such as your name and email address, to third
          party Software providers for the purposes of providing you
          with the Software and associated services (if any). By
          installing Software you are agreeing to the use of your
          personal data in this way.  We may also collect certain
          non-personally-identifiable information, which is located on
          your computer. The information collected may include statistics
          relating to how often data is transferred, and performance
          metrics in relation to software and configuration. You agree
          this information may be retained and used by Canonical.
        </p>

        <p>
          Canonical may disclose any or all personal data and contents
          you have sent, posted or published if required to comply
          with applicable law or the order or requirement of a court,
          administrative agency or other governmental body. All other
          use of your personal data is subject to the Privacy Policy.
        </p>

        <h3>9. Liability</h3>

        <p>
          <strong>Your use of the Service is at your sole risk. The
          Service is provided on an “as is” and “as available”
          basis without warranty of any kind.</strong>
        </p>

        <p>
          In the case of the Service provided by Canonical, the Service
          is provided “as is” and, other than as expressly set out
          in these Terms of Service, all warranties (whether express,
          implied, statutory or otherwise) in respect of the Services
          are expressly excluded to the maximum extent permitted by law.
        </p>

        <p>
          Canonical will provide the Services with reasonable care and
          skill, and Canonical will use reasonable efforts to ensure
          the availability of the Services, but makes no guarantee that
          the Services will be available without interruption or will
          be error-free.
        </p>

        <p>
          In the case of third party Software, you acknowledge that
          such Software is provided to you by the relevant third party
          pursuant to the relevant Software Terms and Canonical will
          have no liability whatsoever in contract, tort or otherwise
          to you in respect of such Software.
        </p>

        <p>
          Canonical will not be liable in contract, tort or otherwise
          for any: indirect or consequential loss; loss of profits; loss
          of revenue; loss of anticipated savings; loss of business or
          business opportunity; loss of goodwill; or loss of or corruption
          to data. Otherwise, Canonical’s total liability in contract,
          tort or otherwise for any claims is limited to £10.
        </p>

        <p>
          Nothing in these Terms of Service will exclude or limit
          Canonical’s liability for: death or personal injury
          caused by the negligence of Canonical; fraud or fraudulent
          misrepresentation; or any other liability that cannot be
          excluded or limited by law.
        </p>

        <h3>9. General</h3>

        <p>
          <strong>These Terms of Service are governed by the laws
          of England and any dispute will be heard by the courts in
          England.</strong>
        </p>

        <p>
          Failure by Canonical to enforce any right or provision of
          these Terms of Service shall not constitute a waiver of such
          right or provision. If any part of these Terms of Service is
          held invalid or unenforceable, that part will be construed
          to reflect the parties original intent, and the remaining
          portions will remain in full force and effect. The terms of
          these Terms of Service do not affect your statutory rights.
        </p>

        <p>
          Any notices should be sent by registered post to:
        </p>

        <p>
          <strong>Canonical Group Limited,<br/>
            5th Floor, Blue Fin Building,<br/>
            110 Southwark Street,<br/>
            London, SE1 0SU.<br/>
          </strong>
        </p>

        <p>
          <strong>Version: 6th February 2017</strong>
        </p>
      </div>
    );
  }
}
