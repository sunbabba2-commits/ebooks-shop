import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Coach AKen Digital Publications'
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <div className="prose prose-sm sm:prose-base max-w-none text-black dark:text-white">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Effective Date: January 1, 2025
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Brand Owner: Coach AKen Digital Publications
        </p>

        <h2>1. Purpose of This Policy</h2>
        <p>
          This Privacy Policy explains how Coach AKen Digital Publications ("we," "us," or "our") collects, uses, stores, and protects personal information from visitors and customers ("you") who use our website, digital library, and training materials.
        </p>
        <p>
          We value your privacy and operate in full compliance with the EU General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and other applicable laws.
        </p>
        <p>
          By using our site and purchasing our digital products, you consent to this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect only the minimum data necessary to deliver our digital products and support services.
        </p>
        
        <h3>a. Information you provide directly to us:</h3>
        <ul>
          <li>Full name and email address (for order confirmation and support)</li>
          <li>Account login information (if you create a membership profile)</li>
          <li>Messages you send via our contact form or email support</li>
        </ul>

        <h3>b. Information processed through Paddle Ltd (our payment partner):</h3>
        <ul>
          <li>Payment details such as credit / debit card data, billing address, and VAT information</li>
          <li>Device and transaction metadata (IP, region, currency for fraud prevention)</li>
        </ul>
        <p className="font-semibold">
          ⚠️ We do not collect or store any credit card information. All such data is securely processed by Paddle Ltd, our authorized payment provider and Merchant of Record.
        </p>

        <h3>c. Automatically collected technical data:</h3>
        <ul>
          <li>Cookies and analytics data (e.g., page views, referring URLs, and time spent on site)</li>
          <li>Browser type and device information</li>
        </ul>
        <p>
          Cookies are used for basic site functionality and non‑identifiable traffic analytics.
        </p>

        <h2>3. Use of Information</h2>
        <p>We use personal data for the following legitimate purposes:</p>
        <ol>
          <li>To process orders and deliver digital products purchased on our site</li>
          <li>To provide technical and customer support</li>
          <li>To send transactional emails (order confirmations, receipt links, renewal notices)</li>
          <li>To improve our educational content and user experience</li>
          <li>To detect and prevent fraud or unauthorized access</li>
          <li>To comply with legal obligations required by tax and commerce regulations</li>
        </ol>
        <p>
          We do not sell or lease your personal data to third parties.
        </p>

        <h2>4. Our Payment Partner: Paddle Ltd</h2>
        <p>All financial transactions for Coach AKen Digital Publications are managed by:</p>
        <p>
          <strong>Paddle Ltd</strong><br />
          Judges House, St George's Road, Wimbledon, London SW19 4DR, United Kingdom<br />
          Company No. 08172165 · VAT GB 175 908 293<br />
          <a href="https://paddle.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://paddle.com</a>
        </p>
        <p>
          Paddle acts as our Merchant of Record (MOR). This means Paddle handles payment processing, billing, tax collection, and refund issuance on our behalf.
        </p>
        <p>
          Paddle is a GDPR‑compliant entity and may collect personal and payment data necessary to process your order securely. For details about Paddle's data‑handling practices, see their own Privacy Policy at <a href="https://paddle.com/privacy/" className="text-blue-600 dark:text-blue-400 hover:underline">https://paddle.com/privacy/</a>.
        </p>

        <h2>5. Cookies and Tracking Technology</h2>
        <p>
          Our website uses necessary cookies to ensure secure checkout and basic site functionality. We may also use optional cookies or analytics tools (e.g., Google Analytics) to understand visitor interactions with our pages.
        </p>
        <p>
          You can disable non‑essential cookies in your browser settings at any time. We do not perform cross‑site advertising or behavioral tracking.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Policy:
        </p>
        <ul>
          <li>Order records and tax data — 7 years (minimum legal retention period)</li>
          <li>Customer support emails — up to 24 months after resolution</li>
          <li>Marketing consent emails — until you unsubscribe</li>
        </ul>
        <p>
          After these periods, data is securely deleted or anonymized.
        </p>

        <h2>7. Your Rights</h2>
        <p>Under GDPR and other privacy laws, you have the following rights:</p>
        <ul>
          <li><strong>Right to access</strong> — You may request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> — You may request corrections to inaccurate or incomplete data.</li>
          <li><strong>Right to erasure</strong> — You may request deletion of your data where legally permitted.</li>
          <li><strong>Right to data portability</strong> — You may ask for a copy of your data in a readable format.</li>
          <li><strong>Right to object</strong> — You may opt out of analytics or marketing emails at any time.</li>
        </ul>
        <p>
          To exercise these rights, contact us at 📧 support@coachaken.com, and we will respond within 30 days.
        </p>

        <h2>8. Data Sharing and Third Parties</h2>
        <p>
          We share data only when necessary to operate our services and comply with law.
        </p>
        <p>Third parties with limited access to your data include:</p>
        <ul>
          <li>Paddle Ltd (for payments and billing compliance)</li>
          <li>Email service providers (for order receipts and support messaging)</li>
          <li>Analytics tools (for aggregated, anonymized traffic metrics)</li>
        </ul>
        <p>
          All partners are bound by confidentiality and data‑processing agreements consistent with GDPR standards.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          Since we serve customers worldwide, your data may be processed in jurisdictions outside your own. When data leaves the European Economic Area, it is transferred using Standard Contractual Clauses (SCCs) or similar approved mechanisms to ensure adequate protection.
        </p>

        <h2>10. Data Security Measures</h2>
        <p>
          We maintain strict administrative, technical, and physical safeguards to protect personal data from unauthorized access, loss, or misuse.
        </p>
        <p>
          These measures include HTTPS encryption, secure firewalls, multi‑factor authentication for administrator access, and limited data retention.
        </p>
        <p>
          However, while we strive to protect personal information, no online system can guarantee absolute security.
        </p>

        <h2>11. Children's Privacy</h2>
        <p>
          Coach AKen Digital Publications does not knowingly collect any personal information from individuals under the age of 18. If you believe we have inadvertently received data from a minor, please contact us immediately at support@coachaken.com and we will delete it.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect legal, technical, or business changes. The latest version will always be available on this page with a revised "Effective Date."
        </p>
        <p>
          Continued use of our services after changes constitutes acceptance of the updated Policy.
        </p>

        <h2>13. Contact Information</h2>
        <p>For privacy inquiries, data access requests, or complaints, contact us at:</p>
        <p>
          <strong>Coach AKen Digital Publications</strong><br />
          📧 support@coachaken.com<br />
          🌐 <a href="https://coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://coachaken.com</a>
        </p>
        <p>For payment and data handling inquiries related to transactions:</p>
        <p>
          <strong>Paddle Ltd (Merchant of Record)</strong><br />
          Judges House, St George's Road, Wimbledon, London SW19 4DR, United Kingdom<br />
          privacy@paddle.com<br />
          <a href="https://paddle.com/privacy/" className="text-blue-600 dark:text-blue-400 hover:underline">https://paddle.com/privacy/</a>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
