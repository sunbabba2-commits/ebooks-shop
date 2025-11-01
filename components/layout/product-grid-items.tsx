import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            href={`/product/${product.handle}`}
            prefetch={true}
            className="sport-card group relative block h-full overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-lg hover:border-orange-500 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-orange-400"
          >
            {/* 图片容器 */}
            <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              
              {/* 悬停时的渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Hot Badge */}
              <div className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                🔥 Hot
              </div>
            </div>

            {/* 产品信息 */}
            <div className="p-4">
              <h3 className="mb-2 line-clamp-2 text-base font-bold text-neutral-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                {product.title}
              </h3>
              
              {/* 价格和行动按钮 */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">From</span>
                  <span className="text-xl font-black text-orange-600 dark:text-orange-400">
                    ¥{product.priceRange.maxVariantPrice.amount}
                  </span>
                </div>
                
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:shadow-lg">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 底部装饰条 */}
            <div className="h-1 w-0 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
