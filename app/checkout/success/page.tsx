import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Payment Successful',
  description: 'Your payment has been successfully completed',
};

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const transactionId = searchParams.transaction_id as string | undefined;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Payment Successful!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Thank you for your purchase. Your order has been successfully processed.
        </p>

        {transactionId && (
          <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transaction ID: <span className="font-mono font-semibold">{transactionId}</span>
            </p>
          </div>
        )}

        <div className="mt-10 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A confirmation email has been sent to your inbox.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Return to Home
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            What happens next?
          </h2>
          <ul className="mt-4 space-y-3 text-left text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>You will receive a confirmation email with your order details</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Digital products will be available immediately - check your email</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>If you have any questions, please contact our support team</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
