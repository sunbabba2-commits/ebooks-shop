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
        <p>
          Thank you for shopping with Coach AKen Digital Publications.
          We want every customer to be fully satisfied with their purchase.
        </p>

        <p>
          If for any reason you're not satisfied with a digital product or membership purchased through our website, you can request a refund within 14 days of the original purchase date.
        </p>

        <p>
          All refund requests are handled by Paddle Ltd, our authorized payment provider and Merchant of Record. Paddle manages payment processing, billing, and customer support for all transactions made on <a href="https://coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://coachaken.com</a>.
        </p>

        <h2>How to Request a Refund</h2>
        <p>
          To request a refund, please contact us at <a href="mailto:support@coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@coachaken.com</a> and include:
        </p>
        <ul>
          <li>Your Paddle order ID (found on your purchase receipt)</li>
          <li>The email address used for your order</li>
          <li>A brief note describing your refund request</li>
        </ul>

        <p>
          Our support team will review your request and work with Paddle to process it in accordance with Paddle's Buyer Protection Policy.
          Approved refunds will be returned to your original payment method.
          The time for funds to appear back in your account may vary depending on your bank or card provider.
        </p>

        <p>
          If you experience any issues or need further assistance, please contact <a href="mailto:support@coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@coachaken.com</a>.
        </p>

        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p>
            <strong>Coach AKen Digital Publications</strong><br />
            Website: <a href="https://coachaken.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://coachaken.com</a>
          </p>
          <p>
            <strong>Payment Provider:</strong> Paddle Ltd, Judges House, St George's Road, Wimbledon, London SW19 4DR, United Kingdom<br />
            <a href="https://paddle.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://paddle.com</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
