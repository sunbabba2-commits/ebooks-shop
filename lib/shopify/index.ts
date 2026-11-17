import rawCatalog from 'lib/shopify-static-products.json';
import { NextRequest, NextResponse } from 'next/server';
import { Cart, Collection, Menu, Page, Product } from './types';

/**
 * [2026-11-18 去 Shopify 化] 本文件原为 Storefront API 实时数据层,现改为静态 JSON 数据源。
 * 原因:①老店(ytauiz 前的 eeri0w-q6)被封,其 storefront token 已死;②Shopify 2026 新模型下
 * 自定义应用无法签发 public storefront token(storefrontAccessTokenCreate 仅限销售渠道类应用),
 * 而 Admin token 带写权限绝不能放进公开前端。门面站的定位是"障眼法展示 + 支付跳板",
 * 不需要实时商品——静态化后零密钥、零 API 依赖、零泄漏面,购物车结账按钮自然失效
 * (假 Cart 无 checkoutUrl),顺带消除"门面站购物车直通 Shopify 收银台"的暴露路径。
 *
 * 商品变更流程:Shopify 后台改完 → 源站/本地跑
 *   curl -H "X-Shopify-Access-Token: $SHOPIFY_ADMIN_TOKEN" \
 *     "https://<shop>/admin/api/2025-01/products.json?limit=100" > lib/shopify-static-products.json
 * → 重新部署。支付链路不受影响(下单走主站后端直调新店)。
 */

const CURRENCY = 'EUR';

type RawVariant = { id: number; title: string | null; price: string };
type RawImage = { src: string; alt: string | null; width: number | null; height: number | null };
type RawProduct = {
  id: number;
  title: string;
  handle: string;
  body_html: string | null;
  tags: string;
  status: string;
  vendor: string | null;
  variants: RawVariant[];
  images: RawImage[];
};

const PLACEHOLDER_IMAGE = '/c1.jpg';

function reshapeStatic(p: RawProduct): Product {
  const price = p.variants?.[0]?.price ?? '0.00';
  const raw = p.images?.[0];
  const url = raw?.src || PLACEHOLDER_IMAGE;
  const image = {
    url,
    altText: raw?.alt || p.title,
    width: raw?.width || 800,
    height: raw?.height || 600
  };
  const plainDescription = (p.body_html || p.title).replace(/<[^>]+>/g, ' ').trim().slice(0, 240);

  return {
    id: String(p.id),
    handle: p.handle,
    availableForSale: p.status === 'active',
    title: p.title,
    description: plainDescription,
    descriptionHtml: p.body_html || `<p>${p.title}</p>`,
    options: [{ id: `option-${p.id}`, name: 'Title', values: ['Default Title'] }],
    priceRange: {
      minVariantPrice: { amount: price, currencyCode: CURRENCY },
      maxVariantPrice: { amount: price, currencyCode: CURRENCY }
    },
    variants: (p.variants || []).map((v) => ({
      id: String(v.id),
      title: v.title || 'Default Title',
      availableForSale: true,
      selectedOptions: [{ name: 'Title', value: v.title || 'Default Title' }],
      price: { amount: v.price, currencyCode: CURRENCY }
    })),
    featuredImage: image,
    images: (p.images?.length ? p.images : [{ src: PLACEHOLDER_IMAGE, alt: null, width: 800, height: 600 }]).map(
      (img) => ({
        url: img.src,
        altText: img.alt || p.title,
        width: img.width || 800,
        height: img.height || 600
      })
    ),
    seo: { title: p.title, description: plainDescription },
    tags: (p.tags || '').split(',').map((t) => t.trim()).filter(Boolean),
    updatedAt: '2026-11-18T00:00:00Z'
  } as Product;
}

const ALL_PRODUCTS: Product[] = (rawCatalog as { products: RawProduct[] }).products
  .filter((p) => p.status === 'active')
  .map(reshapeStatic);

const ALL_COLLECTION: Collection = {
  handle: 'all',
  title: 'All Courses & Ebooks',
  description: 'Science-based fitness and yoga programs by Coach Eddie',
  seo: { title: 'All Courses', description: 'All Courses' },
  updatedAt: '2026-11-18T00:00:00Z',
  path: '/search/all'
} as Collection;

// 静态导航:与 app/ 实际本地路由一一对应(不再依赖 Shopify Navigation API)
const MAIN_MENU: Menu[] = [
  { title: 'Home', path: '/' },
  { title: 'Courses', path: '/search' },
  { title: 'Membership', path: '/membership' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' }
];

const FOOTER_MENU: Menu[] = [
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Membership', path: '/membership' },
  { title: 'Privacy Policy', path: '/privacy-policy' },
  { title: 'Terms of Service', path: '/terms-of-service' },
  { title: 'Refund Policy', path: '/refund-policy' }
];

// 假购物车:永远空、无 checkoutUrl → 结账按钮自然点不动(门面站不提供真实购买,
// 真实支付只在主站 antsports 流程内发生)
const EMPTY_CART: Cart = {
  id: undefined,
  checkoutUrl: undefined,
  totalQuantity: 0,
  cost: {
    totalAmount: { amount: '0', currencyCode: CURRENCY },
    subtotalAmount: { amount: '0', currencyCode: CURRENCY },
    totalTaxAmount: { amount: '0', currencyCode: CURRENCY }
  },
  lines: [],
  attributes: [],
  updatedAt: '2026-11-18T00:00:00Z'
} as unknown as Cart;

export async function createCart(): Promise<Cart> {
  return EMPTY_CART;
}

export async function addToCart(_lines?: unknown): Promise<Cart> {
  void _lines;
  return EMPTY_CART;
}

export async function removeFromCart(_lineIds?: unknown): Promise<Cart> {
  void _lineIds;
  return EMPTY_CART;
}

export async function updateCart(_lines?: unknown): Promise<Cart> {
  void _lines;
  return EMPTY_CART;
}

export async function getCart(): Promise<Cart | undefined> {
  return EMPTY_CART;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  return handle === ALL_COLLECTION.handle ? ALL_COLLECTION : undefined;
}

export async function getCollectionProducts({
  collection
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  // 单一集合:无论请求哪个 handle 都回全量(门面站只有一屏商品墙)
  void collection;
  return ALL_PRODUCTS;
}

export async function getCollections(): Promise<Collection[]> {
  return [ALL_COLLECTION];
}

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === 'main-menu') return MAIN_MENU;
  if (handle === 'next-js-frontend-footer-menu') return FOOTER_MENU;
  return MAIN_MENU;
}

export async function getPage(_handle?: string): Promise<Page | undefined> {
  // 动态 Pages 已废:法务/关于页均为本地文件路由,任何 handle 一律 notFound
  void _handle;
  return undefined;
}

export async function getPages(): Promise<Page[]> {
  return [];
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return ALL_PRODUCTS.find((p) => p.handle === handle);
}

export async function getProductRecommendations(_productId?: string): Promise<Product[]> {
  void _productId;
  return ALL_PRODUCTS.slice(0, 8);
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  void sortKey;
  let products = ALL_PRODUCTS;
  if (query) {
    const q = query.toLowerCase();
    products = products.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }
  if (reverse) products = [...products].reverse();
  return products;
}

export async function revalidate(_req?: NextRequest): Promise<NextResponse> {
  // 静态数据无需 revalidate(Shopify webhook 触发的缓存刷新随去 API 化一并作废);保留签名兼容旧路由
  void _req;
  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

// 兼容旧 import:极少数组件可能直接引 shopifyFetch,统一替换为抛错占位
export async function shopifyFetch(): Promise<never> {
  throw new Error('shopifyFetch removed: catalog is static since 2026-11-18');
}
