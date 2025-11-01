import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Coach AKen Digital Publications'
};

export default function TermsOfServicePage() {
  return (
    <>
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
      <div className="prose prose-sm sm:prose-base max-w-none text-black dark:text-white">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Effective Date: January 1, 2025
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Brand Owner: Coach AKen Digital Publications
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing, purchasing, or using any products, memberships, or materials from Coach AKen Digital Publications ("we," "us," or "our"), you ("you," "user," or "customer") agree to be bound by these Terms of Service, our Privacy Policy, and Refund Policy.
        </p>
        <p>
          If you do not agree with any portion of these terms, please discontinue use of our website and digital services immediately.
        </p>

        <h2>2. Nature of Service</h2>
        <p>
          Coach AKen Digital Publications provides digital educational fitness content, including downloadable PDF eBooks, guides, and structured access to the Coach AKen Digital Membership Library.
        </p>
        <p>
          All materials are provided digitally; no physical products are shipped. Your level of access is determined by the purchased plan (for example, a 1‑Month membership provides 30 days of digital library access).
        </p>
        <p>
          Our content is designed for educational purposes and should not replace medical or health consultation. Users should train responsibly and within their physical capabilities.
        </p>

        <h2>3. Payments and Billing</h2>
        <p>
          All payments are securely processed by Paddle Ltd, acting as the Merchant of Record (MOR) for Coach AKen Digital Publications. Paddle manages all invoicing, tax collection (VAT/GST), and refund disbursement on our behalf.
        </p>
        <p>
          You may see "PADDLE.NET* COACHAKEN" or a similar descriptor on your billing statement.
        </p>
        <p>
          Coach AKen does not collect or store credit card details. Please refer to our Privacy Policy for information on data handling and third‑party payment processors.
        </p>

        <h2>4. Digital Content Access</h2>
        <p>
          Upon successful purchase confirmation from Paddle, you will receive instant digital access through direct download links or authenticated online reading portals.
        </p>
        <p>
          Access is licensed for personal educational use only, and you agree not to reproduce, share, resell, or redistribute our materials in any manner.
        </p>
        <p>
          Unauthorized use or distribution of our content may result in revoked access and/or legal action.
        </p>

        <h2>5. Refund Policy</h2>
        <p>
          All products offered by Coach AKen Digital Publications are classified as non‑tangible digital goods. Once access is granted or a download has been initiated, the transaction is considered final and non‑refundable.
        </p>
        <p>
          Refunds may only be requested within 14 days of purchase to address duplicate charges or verifiable technical issues preventing access.
        </p>
        <p>
          All approved refunds will be processed by Paddle Ltd via the original payment method. See our full Refund Policy for details.
        </p>

        <h2>6. License and Copyright</h2>
        <p>
          All digital materials, including text, graphics, data, and training content, are protected by copyright and belong exclusively to Coach AKen Digital Publications.
        </p>
        <p>
          Purchasing or subscribing grants you a non‑exclusive, non‑transferable, revocable license to view and download materials for personal use only.
        </p>
        <p>
          Modification, reproduction, resale, or redistribution of any content without written permission is strictly prohibited.
        </p>

        <h2>7. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate billing and contact information during checkout.</li>
          <li>Use digital materials solely for personal, educational, non‑commercial purposes.</li>
          <li>Not share your login or downloaded files with others.</li>
          <li>Comply with all applicable copyright and digital content laws.</li>
        </ul>
        <p>
          Violation of these Terms may result in temporary or permanent termination of access.
        </p>

        <h2>8. Account and Access Security</h2>
        <p>
          If your digital membership requires an account login, you are responsible for maintaining the confidentiality of your credentials and for all activities under your account.
        </p>
        <p>
          You agree to notify Coach AKen Digital Publications immediately of any unauthorized use or security breach.
        </p>
        <p>
          Coach AKen Digital Publications shall not be liable for any loss arising from your failure to protect login information.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          Coach AKen Digital Publications is a fitness education provider and does not offer medical or therapeutic services.
        </p>
        <p>
          All information and training guidelines are intended for educational purposes only. We cannot guarantee specific fitness outcomes or results.
        </p>
        <p>
          You acknowledge that any application of the information from our materials is at your sole discretion and risk. In no event shall Coach AKen be liable for any direct or indirect damage, injury, or loss arising from the use of our digital products.
        </p>

        <h2>10. Intellectual Property Claims and Fair Use</h2>
        <p>
          Coach AKen Digital Publications respects intellectual property rights and expects users to do the same.
        </p>
        <p>
          If you believe that any content on our platform infringes your rights, please email support@coachaken.com with sufficient details of your claim.
        </p>
        <p>
          We reserve the right to remove allegedly infringing materials and cooperate with rights owners when necessary.
        </p>

        <h2>11. Modifications to Service and Terms</h2>
        <p>
          We may update our digital content, features, or these Terms at any time without prior notice. The latest revision date will always appear at the top of this page.
        </p>
        <p>
          Continued use of our services after updates constitutes your acceptance of the new Terms. We encourage you to review this page periodically.
        </p>

        <h2>12. Compliance with Applicable Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the United Kingdom, where Paddle Ltd is registered, together with any relevant international e‑commerce regulations for digital goods.
        </p>
        <p>
          Any dispute shall first be addressed through Paddle's merchant resolution system before seeking formal legal recourse.
        </p>

        <h2>13. Severability and Entire Agreement</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid under applicable law, the remaining provisions shall remain in full effect.
        </p>
        <p>
          These Terms constitute the entire agreement between you and Coach AKen Digital Publications regarding the use of our website and digital products, superseding any prior agreements or communications.
        </p>

        <h2>14. Contact Information</h2>
        <p>For questions, support, or policy inquiries, please contact:</p>
        <p>
          <strong>Coach AKen Digital Publications</strong><br />
          📧 support@coachaken.com<br />
          🌐 <a href="https://coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://coachaken.com</a>
        </p>
        <p>All billing and refund issues are processed through our payment partner:</p>
        <p>
          <strong>Paddle Ltd</strong><br />
          Judges House<br />
          St George's Road, Wimbledon<br />
          London SW19 4DR, United Kingdom
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
