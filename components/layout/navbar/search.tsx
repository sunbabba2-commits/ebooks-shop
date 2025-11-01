'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="relative w-full">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
        </div>
        <input
          key={searchParams?.get('q')}
          type="text"
          name="q"
          placeholder="Search for ebooks..."
          autoComplete="off"
          defaultValue={searchParams?.get('q') || ''}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-500 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:bg-neutral-800"
        />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="relative w-full">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
        </div>
        <input
          placeholder="Search for ebooks..."
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-400"
          disabled
        />
      </div>
    </form>
  );
}
