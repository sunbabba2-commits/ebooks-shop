import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2 text-black dark:text-white" href="/">
            <LogoSquare size="sm" />
            <span className="text-lg font-semibold uppercase tracking-tight">{SITE_NAME}</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
           Your trusted source for science-based fitness education. Learn, train, and grow with Coach AKen.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-black dark:text-white">Contact Us</h3>
            <div className="flex flex-col gap-1.5">
              <a 
                href="mailto:support@coachaken.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@coachaken.com</span>
              </a>
              <a 
                href="mailto:connect@coachaken.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>connect@coachaken.com</span>
              </a>
            </div>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-neutral-200 bg-white py-6 dark:border-neutral-800 dark:bg-black">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-6 text-xs md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p className="text-neutral-600 dark:text-neutral-400">
            &copy; {copyrightDate} coachaken, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:ml-auto">
            <Link
              href="/terms-of-service"
              className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Terms of Service
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <Link
              href="/privacy-policy"
              className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <Link
              href="/refund-policy"
              className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
