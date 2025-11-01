'use client';

import clsx from 'clsx';
import type { SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;

  newParams.delete('q');

  return (
    <li className="group" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx(
          'block rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
          {
            'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md': active,
            'text-neutral-700 hover:bg-orange-50 hover:text-orange-600 dark:text-neutral-300 dark:hover:bg-orange-950 dark:hover:text-orange-400':
              !active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="group" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx(
          'block rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
          {
            'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md': active,
            'text-neutral-700 hover:bg-orange-50 hover:text-orange-600 dark:text-neutral-300 dark:hover:bg-orange-950 dark:hover:text-orange-400':
              !active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
