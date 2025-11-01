import { getCollectionProducts, getCollections } from 'lib/shopify';
import Link from 'next/link';

// Default configuration - used when Shopify collections don't have metafields configured
const defaultCategoryConfig: Record<string, {
  icon: string;
  color: string;
  description: string;
}> = {
  'Fiction': {
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
    description: 'Bestselling novels and literary fiction'
  },
  'Non-Fiction': {
    icon: '📖',
    color: 'from-blue-500 to-cyan-500',
    description: 'Biographies, history, and true stories'
  },
  'Business': {
    icon: '💼',
    color: 'from-orange-500 to-red-500',
    description: 'Leadership, entrepreneurship, and strategy'
  },
  'Self-Help': {
    icon: '🌟',
    color: 'from-yellow-500 to-orange-500',
    description: 'Personal development and motivation'
  },
  'Science': {
    icon: '🔬',
    color: 'from-teal-500 to-blue-500',
    description: 'Scientific discoveries and innovations'
  },
  'Technology': {
    icon: '💻',
    color: 'from-indigo-500 to-purple-500',
    description: 'Programming, AI, and digital trends'
  }
};

// Default color list - for new categories
const defaultColors = [
  'from-orange-500 to-red-500',
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
  'from-teal-500 to-blue-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-purple-500'
];

export async function CategoriesSection() {
  // Get all collections from Shopify
  const allCollections = await getCollections();
  
  // Filter out "All" and collections starting with "hidden-"
  const visibleCollections = allCollections.filter(
    (collection) => collection.handle !== '' && !collection.handle.startsWith('hidden')
  );

  // Get product count for each category and build category data
  const categoriesWithCount = await Promise.all(
    visibleCollections.map(async (collection, index) => {
      const products = await getCollectionProducts({ collection: collection.handle });
      const productCount = products.length;
      
      // Get configuration (prefer Shopify metafields, otherwise use default config)
      const defaultConfig = defaultCategoryConfig[collection.title];
      const icon = collection.icon?.value || defaultConfig?.icon || '📚';
      const color = collection.color?.value || defaultConfig?.color || defaultColors[index % defaultColors.length];
      const description = collection.shortDescription?.value || defaultConfig?.description || collection.description || 'Explore more great reads';

      return {
        name: collection.title,
        handle: collection.handle,
        icon,
        description,
        color,
        count: `${productCount}+ Ebooks`
      };
    })
  );

  // If no categories, return null
  if (categoriesWithCount.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            📖 Popular Categories
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Discover ebooks across all your favorite genres
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesWithCount.map((category, index) => (
            <Link
              key={category.handle}
              href={`/search/${category.handle}`}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-neutral-900"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 渐变背景 */}
              <div className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${category.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}></div>
              
              <div className="relative">
                {/* 图标 */}
                <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-3xl shadow-lg`}>
                  {category.icon}
                </div>

                {/* 标题 */}
                <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
                  {category.name}
                </h3>

                {/* 描述 */}
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  {category.description}
                </p>

                {/* 数量 */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-500">
                    {category.count}
                  </span>
                  
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-all group-hover:bg-purple-500 dark:bg-neutral-800 dark:group-hover:bg-purple-500">
                    <svg className="h-4 w-4 text-neutral-600 transition-all group-hover:translate-x-0.5 group-hover:text-white dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 底部装饰条 */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.color} transition-all duration-300 group-hover:w-full`}></div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-full border-2 border-purple-500 bg-transparent px-8 py-3 font-bold text-purple-600 transition-all hover:bg-purple-500 hover:text-white dark:text-purple-400 dark:hover:text-white"
          >
            <span>View All Categories</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
