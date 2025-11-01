import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar - Collections */}
          <aside className="w-full lg:w-72 lg:flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Categories Card */}
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-white">
                    <span>📚</span>
                    <span>Ebook Categories</span>
                  </h2>
                </div>
                <div className="p-4">
                  <Collections />
                </div>
              </div>
              
              {/* Sort Filter */}
              <div className="hidden overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg lg:block dark:border-neutral-800 dark:bg-neutral-900">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-white">
                    <span>🔄</span>
                    <span>Sort By</span>
                  </h2>
                </div>
                <div className="p-4">
                  <FilterList list={sorting} />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-h-screen flex-1">
            <Suspense fallback={null}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </main>

          {/* Mobile Sort - Shown at top on mobile */}
          <div className="order-first lg:hidden">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <FilterList list={sorting} title="Sort By" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
