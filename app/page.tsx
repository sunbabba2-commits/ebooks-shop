// app/page.tsx

import { HeroBanner } from 'components/home/hero-banner';
import Footer from 'components/layout/footer';
import ProductCard from 'components/product/ProductCard';
import { getProducts } from 'lib/shopify';

// Page metadata (SEO / Open Graph)
export const metadata = {
  title: 'Digital Bookstore | Discover Your Next Great Read - Premium Ebooks',
  description:
    'Your premier destination for digital books. Explore thousands of ebooks across all genres including fiction, non-fiction, business, self-help, and more. Instant access, affordable prices, and unlimited reading pleasure.',
  openGraph: {
    type: 'website',
    title: 'Digital Bookstore | Discover Your Next Great Read',
    description: 'Explore thousands of premium ebooks across all genres. Instant access, affordable prices, unlimited reading.',
  }
}

// Async server component: Fetch product data from Shopify at build or request time
export default async function HomePage() {
  // 📦 Call Storefront API to get products
  const products = await getProducts({})

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />

      {/* All Products Section */}
      <main className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              📚 Browse All Ebooks
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Explore our carefully curated digital library
            </p>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-12 text-center dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
                No Ebooks Available
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Please add products in your Shopify admin and publish them to the Online Store
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
