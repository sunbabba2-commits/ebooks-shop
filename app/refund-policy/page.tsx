import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Coach AKen Digital Publications'
};

export default function RefundPolicyPage() {
  return (
    <>
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Refund Policy</h1>
      <div className="prose prose-sm sm:prose-base max-w-none text-black dark:text-white">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Effective Date: January 1, 2025
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Brand Owner: Coach AKen Digital Publications
        </p>

        <h2>1. Purpose of This Policy</h2>
        <p>
          This Refund Policy describes the refund terms and conditions for purchases made through Coach AKen Digital Publications ("we," "us," or "our"), including digital eBooks and membership plans sold via Paddle Ltd, our authorized payment provider and Merchant of Record.
        </p>
        <p>
          By completing a purchase on our website, you agree to this policy and to our Terms of Service.
        </p>

        <h2>2. Classification of Products</h2>
        <p>
          All items offered by Coach AKen Digital Publications are classified as non‑tangible digital goods or digital educational content, including:
        </p>
        <ul>
          <li>Downloadable PDF eBooks and digital reading materials</li>
          <li>Temporary digital library access (e.g., 1‑Month membership plans)</li>
          <li>Other online educational resources distributed electronically</li>
        </ul>
        <p>
          No physical products are shipped or delivered.
        </p>

        <h2>3. Non‑Refundable Nature of Digital Goods</h2>
        <p>
          In accordance with the EU Consumer Rights Directive (2011/83/EU) and other applicable digital commerce laws, digital content that has been accessed, downloaded, or viewed cannot be refunded once delivery has begun.
        </p>
        <p>
          By purchasing and accessing our digital materials, you expressly acknowledge and consent that your right to withdraw from the transaction is waived after digital delivery starts.
        </p>
        <p>
          This policy is necessary to protect our intellectual property and to prevent unauthorized distribution of digital files.
        </p>

        <h2>4. Exceptions and Eligible Refund Circumstances</h2>
        <p>
          While we do not generally offer refunds for digital content once accessed, we consider refund requests under the following limited conditions:
        </p>
        <ol>
          <li>Accidental duplicate purchases of the same product within the same account.</li>
          <li>Technical issues that prevent you from accessing the digital content and cannot be resolved by our support team within a reasonable period.</li>
          <li>Unauthorized payment transactions reported within a verified time window.</li>
        </ol>
        <p>
          All eligible refunds must be requested within 14 days of the original purchase date and will be reviewed individually.
        </p>

        <h2>5. How to Request a Refund</h2>
        <p>
          If you believe you qualify for a refund, please follow these steps:
        </p>
        <ol>
          <li>
            Email our support team at 📧 support@coachaken.com with the following details:
            <ul>
              <li>Order ID or transaction number (from your Paddle receipt)</li>
              <li>Date of purchase</li>
              <li>Description of the issue or reason for request</li>
            </ul>
          </li>
          <li>Our team will review your request within 2–3 business days.</li>
          <li>If approved, the refund will be processed securely by Paddle Ltd through the original payment method.</li>
        </ol>
        <p>
          Refund decisions are final and not subject to appeal except where required by law.
        </p>

        <h2>6. Processing Time</h2>
        <p>
          Once a refund is approved by Paddle, funds are typically returned within 5–10 business days, depending on your bank or card issuer.
        </p>
        <p>
          Delays beyond this period should be addressed directly to Paddle Support at <a href="https://paddle.net/" className="text-blue-600 dark:text-blue-400 hover:underline">https://paddle.net/</a>.
        </p>

        <h2>7. Contact for Refund Assistance</h2>
        <p>
          <strong>Coach AKen Digital Publications</strong><br />
          📧 support@coachaken.com<br />
          🌐 <a href="https://coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://coachaken.com</a>
        </p>
        <p>
          <strong>Paddle Ltd (Merchant of Record)</strong><br />
          Judges House, St George's Road, Wimbledon, London SW19 4DR, United Kingdom<br />
          <a href="https://paddle.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://paddle.com</a>
        </p>

        <h2>8. Policy Integration</h2>
        <p>
          This Refund Policy is an integral part of the Terms of Service and should be read together with our Privacy Policy. By purchasing our digital content, you acknowledge that you have read and agree to all related policies.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
