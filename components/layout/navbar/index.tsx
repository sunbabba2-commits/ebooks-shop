import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

function NavMenuItem({ item }: { item: Menu }) {
  const hasSubmenu = item.items && item.items.length > 0;

  if (!hasSubmenu) {
    return (
      <Link
        href={item.path}
        prefetch={true}
        className="group relative px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
      >
        {item.title}
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-3/4 dark:bg-blue-400" />
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.path}
        prefetch={true}
        className="relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
      >
        {item.title}
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-3/4 dark:bg-blue-400" />
      </Link>

      {/* Dropdown Menu */}
      <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="min-w-[220px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-2 dark:from-blue-950 dark:to-indigo-950">
            <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              {item.title}
            </p>
          </div>
          <div className="py-2">
            {item.items?.map((subItem, index) => (
              <Link
                key={subItem.title}
                href={subItem.path}
                prefetch={true}
                className="group/item flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 dark:text-neutral-300 dark:hover:from-blue-950 dark:hover:to-indigo-950 dark:hover:text-blue-400"
              >
                <span className="text-blue-600 opacity-0 transition-opacity group-hover/item:opacity-100 dark:text-blue-400">
                  →
                </span>
                {subItem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function Navbar() {
  const menu = await getMenu('main-menu');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-neutral-900">
      {/* Top Bar */}
      <div className="border-b border-neutral-100 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 dark:border-neutral-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs">
          <p className="text-white/90">
            Welcome to the Coach AKen Digital Library — Your source for science-based fitness knowledge and professional eBooks.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className="text-white/90 transition-colors hover:text-white"
            >
              
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain sm:h-14" />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                {SITE_NAME}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <nav className="flex items-center gap-1">
              {menu.length ? (
                <>
                  {menu.map((item: Menu) => (
                    <NavMenuItem key={item.title} item={item} />
                  ))}
                </>
              ) : null}
              <Link
                href="/about"
                prefetch={true}
                className="group relative px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
              >
                About CoachAKen
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-3/4 dark:bg-blue-400" />
              </Link>
              <Link
                href="/membership"
                prefetch={true}
                className="group relative px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
              >
                Membership
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-3/4 dark:bg-blue-400" />
              </Link>
              <Link
                href="/contact"
                prefetch={true}
                className="group relative px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-3/4 dark:bg-blue-400" />
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <Link
              href="/search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Suspense fallback={null}>
                <MobileMenu menu={menu} />
              </Suspense>
            </div>

            {/* Cart */}
            <CartModal />
          </div>
        </div>
      </nav>
    </header>
  );
}
