import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col">
      {/* 产品标题和评分 */}
      <div className="mb-6">
        {/* 库存状态标签 */}
        <div className="mb-3 flex items-center gap-2">
          {product.availableForSale ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 dark:bg-red-900/30 dark:text-red-400">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Out of Stock
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
            ⚡ Instant Delivery
          </span>
        </div>

        <h1 className="mb-3 text-3xl font-black leading-tight text-neutral-900 dark:text-white lg:text-4xl">
          {product.title}
        </h1>

        {/* 评分和评论 */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-5 w-5 fill-current text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-neutral-900 dark:text-white">
            4.8
          </span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            (328 reviews)
          </span>
        </div>
      </div>

      {/* 价格区域 */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 p-6 dark:from-orange-950/20 dark:to-yellow-950/20">
        <div className="mb-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Limited Time Offer
        </div>
        <div className="mb-3 flex items-baseline gap-3">
          <div className="text-4xl font-black text-orange-600 dark:text-orange-400">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
          <div className="text-lg text-neutral-400 line-through dark:text-neutral-600">
            ¥{(parseFloat(product.priceRange.maxVariantPrice.amount) * 1.5).toFixed(2)}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
            Save ¥{(parseFloat(product.priceRange.maxVariantPrice.amount) * 0.5).toFixed(2)}
          </span>
          <span className="text-neutral-600 dark:text-neutral-400">
            Limited offer, only <span className="font-bold text-orange-600 dark:text-orange-400">23 hours</span> left
          </span>
        </div>
      </div>

      {/* 电子书特色亮点 */}
      <div className="mb-6 space-y-3 rounded-2xl border-2 border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="mb-3 text-sm font-bold text-neutral-900 dark:text-white">
          📖 Ebook Features
        </h3>
        <div className="flex items-start gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
              PDF + EPUB Dual Format
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Compatible with all reading devices
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
              High-Quality Illustrations
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Professional diagrams and demonstrations
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
              Included Training Plan
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              12-week systematic training program
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
              Video Tutorial Links
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Scan to watch action demonstrations
            </div>
          </div>
        </div>
      </div>

      {/* 版本选择 */}
      <div className="mb-6">
        <VariantSelector options={product.options} variants={product.variants} />
      </div>

      {/* 产品描述 */}
      {product.descriptionHtml ? (
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-bold text-neutral-900 dark:text-white">
            📝 Content Overview
          </h3>
          <Prose
            className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}

      {/* 购买按钮 */}
      <div className="mt-auto">
        <AddToCart product={product} />
        
        {/* 安全保障 */}
        <div className="mt-4 flex flex-col items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure Checkout via Paddle Ltd (Merchant of Record)
          </div>
          <div className="text-center">
            All digital sales are final once access has begun. See{' '}
            <a href="/refund-policy" className="text-blue-600 hover:underline dark:text-blue-400">
              Refund Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
