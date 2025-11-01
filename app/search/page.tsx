import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <section className="w-full">
      {searchValue ? (
        <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">
              🔍 Search Results
            </h1>
            <p className="text-base text-orange-50">
              {products.length === 0 ? 'No results for ' : `Found ${products.length} ebooks for: `}
              <span className="font-bold text-white">
                &quot;{searchValue}&quot;
              </span>
            </p>
          </div>
          {products.length > 0 && (
            <div className="bg-neutral-50 p-6 dark:bg-neutral-950">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-2xl shadow-lg">
                  🔍
                </div>
                <div>
                  <p className="text-3xl font-black text-orange-600 dark:text-orange-400">
                    {products.length}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    ebooks
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">
              📚 All Ebooks
            </h1>
            <p className="text-base text-orange-50">
              Explore our carefully curated digital library
            </p>
          </div>
          <div className="bg-neutral-50 p-6 dark:bg-neutral-950">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-2xl shadow-lg">
                📚
              </div>
              <div>
                <p className="text-3xl font-black text-orange-600 dark:text-orange-400">
                  {products.length}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  ebooks
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {products.length > 0 ? (
        <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : searchValue ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <span className="text-4xl">🔍</span>
            </div>
            <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              No Ebooks Found
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Try different keywords or browse categories
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
