import { XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Payment Cancelled',
  description: 'Your payment has been cancelled',
};

export default function CheckoutCanceledPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <XCircleIcon className="mx-auto h-16 w-16 text-gray-400" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Payment Cancelled
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          You have cancelled the payment process. Your cart items are still saved.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
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

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            If you encountered any issues during the payment process, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
