import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductCard from 'components/product/ProductCard';
import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const collection = await getCollection(params.collection);

  return (
    <section className="w-full">
      {collection && (
        <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">
              {collection.title}
            </h1>
            {collection.description && (
              <p className="max-w-2xl text-base leading-relaxed text-orange-50">
                {collection.description}
              </p>
            )}
          </div>
          
          {/* Stats section */}
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
      
      {products.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <span className="text-4xl">📖</span>
            </div>
            <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              No Ebooks Available
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              No ebooks in this category yet, stay tuned
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
