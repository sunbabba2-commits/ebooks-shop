/**
 * Shopify产品ID到Paddle Price ID的映射
 * 
 * 使用说明:
 * 1. 在Paddle后台创建产品和价格
 * 2. 获取每个产品的Price ID
 * 3. 将Shopify产品ID映射到对应的Paddle Price ID
 * 
 * 示例:
 * 'gid://shopify/Product/123456': 'pri_01h1vjes1y163xfj1rh1tkfb65'
 */

export const PRODUCT_PRICE_MAPPING: Record<string, string> = {
  // 在这里添加你的产品映射
  // Shopify产品ID: Paddle Price ID
  
  // 示例映射 (请替换为实际的ID)
  // 'gid://shopify/Product/123456': 'pri_01h1vjes1y163xfj1rh1tkfb65',
  // 'gid://shopify/Product/789012': 'pri_01h1vjf2k3m4n5p6q7r8s9t0u1',
};

/**
 * 获取Paddle Price ID
 * @param shopifyProductId Shopify产品ID
 * @returns Paddle Price ID
 * @throws 如果找不到映射则抛出错误
 */
export function getPaddlePriceId(shopifyProductId: string): string {
  const priceId = PRODUCT_PRICE_MAPPING[shopifyProductId];
  
  if (!priceId) {
    console.error(`No Paddle price mapping found for product: ${shopifyProductId}`);
    console.error('Available mappings:', Object.keys(PRODUCT_PRICE_MAPPING));
    throw new Error(
      `No Paddle price mapping found for product: ${shopifyProductId}. ` +
      `Please add this product to PRODUCT_PRICE_MAPPING in lib/paddle/product-mapping.ts`
    );
  }
  
  return priceId;
}

/**
 * 批量获取Paddle Price IDs
 * @param shopifyProductIds Shopify产品ID数组
 * @returns Paddle Price ID数组
 */
export function getBatchPaddlePriceIds(shopifyProductIds: string[]): string[] {
  return shopifyProductIds.map(id => getPaddlePriceId(id));
}

/**
 * 检查产品是否已映射
 * @param shopifyProductId Shopify产品ID
 * @returns 是否已映射
 */
export function hasMapping(shopifyProductId: string): boolean {
  return shopifyProductId in PRODUCT_PRICE_MAPPING;
}

/**
 * 获取所有已映射的产品ID
 * @returns Shopify产品ID数组
 */
export function getMappedProductIds(): string[] {
  return Object.keys(PRODUCT_PRICE_MAPPING);
}

/**
 * 添加或更新映射
 * @param shopifyProductId Shopify产品ID
 * @param paddlePriceId Paddle Price ID
 */
export function addMapping(shopifyProductId: string, paddlePriceId: string): void {
  PRODUCT_PRICE_MAPPING[shopifyProductId] = paddlePriceId;
  console.log(`Added mapping: ${shopifyProductId} -> ${paddlePriceId}`);
}
