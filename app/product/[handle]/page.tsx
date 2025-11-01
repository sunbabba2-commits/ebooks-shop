import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      
      {/* 面包屑导航 */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/search" className="hover:text-orange-600 dark:hover:text-orange-400">
            All Ebooks
          </Link>
          <span>/</span>
          <span className="text-neutral-900 dark:text-white">{product.title}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12">
        {/* 主要产品信息区域 */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row">
          {/* 左侧：图片画廊 */}
          <div className="w-full lg:w-3/5">
            <div className="sticky top-4">
              <Suspense
                fallback={
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800" />
                }
              >
                <Gallery
                  images={product.images.slice(0, 5).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText
                  }))}
                />
              </Suspense>
            </div>
          </div>

          {/* 右侧：产品详情 */}
          <div className="w-full lg:w-2/5">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>

        {/* 电子书特色功能区 */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 dark:border-orange-900/30 dark:from-orange-950/20 dark:to-neutral-900">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl">
              📱
            </div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
              Multi-Device Sync
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Seamless reading across phone, tablet, and computer with auto-sync
            </p>
          </div>

          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 dark:border-blue-900/30 dark:from-blue-950/20 dark:to-neutral-900">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-2xl">
              ⚡
            </div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
              Instant Download
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Get instant access after purchase, supports offline reading
            </p>
          </div>

          <div className="rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-6 dark:border-green-900/30 dark:from-green-950/20 dark:to-neutral-900">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl">
              🔄
            </div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
              Lifetime Updates
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Free content updates, continuous learning and growth
            </p>
          </div>
        </div>

        {/* 信任徽章 */}
        <div className="mb-12 rounded-2xl bg-neutral-100 p-8 dark:bg-neutral-900">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-black text-orange-600 dark:text-orange-400">
                📚
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                Instant Access
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Download immediately
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-black text-orange-600 dark:text-orange-400">
                24/7
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                Customer Support
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Always here to help
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-black text-orange-600 dark:text-orange-400">
                🔄
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                Free Updates
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Lifetime content updates
              </div>
            </div>
          </div>
        </div>

        {/* 相关推荐 */}
        <RelatedProducts id={product.id} />
      </div>
      
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="rounded-2xl bg-neutral-50 p-8 dark:bg-neutral-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
            🎯 Related Recommendations
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Other readers are also viewing these ebooks
          </p>
        </div>
      </div>
      
      <div className="relative">
        <ul className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {relatedProducts.map((product) => (
            <li
              key={product.handle}
              className="w-64 flex-none"
            >
              <Link
                className="group block overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-orange-400"
                href={`/product/${product.handle}`}
                prefetch={true}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode: product.priceRange.maxVariantPrice.currencyCode
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="256px"
                  />
                  
                  {/* 悬停遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  {/* 快速查看按钮 */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-neutral-900 shadow-lg">
                      Quick View
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 text-sm font-bold text-neutral-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-orange-600 dark:text-orange-400">
                      ¥{product.priceRange.maxVariantPrice.amount}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>
                </div>
                
                {/* 底部装饰条 */}
                <div className="h-1 w-0 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </li>
          ))}
        </ul>
        
        {/* 滚动提示 */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-900"></div>
      </div>
    </div>
  );
}
