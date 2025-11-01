# Shopify Storefront API 集成指南

本文档说明如何将 Shopify 产品评价和其他数据集成到运动电子书商城。

## 📋 当前集成状态

### ✅ 已集成的功能

1. **产品数据**
   - 产品列表 (`getProducts`)
   - 产品详情 (`getProduct`)
   - 产品推荐 (`getProductRecommendations`)
   - 产品图片、价格、变体等基础信息

2. **购物车功能**
   - 创建购物车
   - 添加商品到购物车
   - 更新购物车
   - 删除购物车商品

3. **集合/分类**
   - 获取产品集合
   - 按集合筛选产品

## 🔧 需要集成的评价功能

### Shopify 产品评价集成方案

Shopify Storefront API 本身**不直接提供产品评价功能**。需要通过以下方式之一集成：

### 方案 1: 使用 Shopify 产品 Metafields（推荐）

在 Shopify 后台为每个产品添加自定义字段（Metafields）来存储评价数据：

```typescript
// lib/shopify/fragments/product.ts
// 在产品查询中添加 metafields

const productFragment = `
  fragment product on Product {
    id
    handle
    title
    description
    # ... 其他字段
    
    # 添加评价相关的 metafields
    reviewRating: metafield(namespace: "reviews", key: "rating") {
      value
    }
    reviewCount: metafield(namespace: "reviews", key: "count") {
      value
    }
  }
`;
```

**在 Shopify 后台设置步骤：**

1. 进入 Shopify Admin → Settings → Custom data → Products
2. 添加 Metafield definitions:
   - `reviews.rating` (类型: Decimal)
   - `reviews.count` (类型: Integer)
3. 为每个产品手动设置或通过 Admin API 批量导入

### 方案 2: 使用第三方评价应用

安装 Shopify 应用商店的评价应用：

**推荐应用：**
- **Judge.me** - 免费，功能强大
- **Loox** - 图片评价
- **Yotpo** - 企业级解决方案
- **Stamped.io** - 全功能评价系统

这些应用通常提供：
- 评价收集和展示
- 评分统计
- API 接口集成
- 自动邮件请求评价

### 方案 3: 自建评价系统

创建独立的评价数据库和 API：

```typescript
// lib/reviews/index.ts
export async function getProductReviews(productId: string) {
  // 从你的数据库获取评价
  const response = await fetch(`/api/reviews/${productId}`);
  return response.json();
}

export async function getProductRating(productId: string) {
  const reviews = await getProductReviews(productId);
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    average: avgRating,
    count: reviews.length
  };
}
```

## 📝 实现示例

### 更新产品类型定义

```typescript
// lib/shopify/types.ts
export type Product = {
  // ... 现有字段
  
  // 添加评价字段
  reviews?: {
    rating: number;      // 平均评分 (1-5)
    count: number;       // 评价数量
    distribution?: {     // 评分分布
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  };
};
```

### 更新产品卡片组件

```typescript
// components/product/ProductCard.tsx
export default function ProductCard({ product }: { product: Product }) {
  const rating = product.reviews?.rating || 4.8;
  const reviewCount = product.reviews?.count || 328;
  
  return (
    <Link href={`/product/${product.handle}`}>
      {/* ... 其他内容 */}
      
      {/* 显示真实评分 */}
      <div className="flex items-center gap-1">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`h-4 w-4 ${
                star <= Math.round(rating)
                  ? 'fill-yellow-400'
                  : 'fill-neutral-300'
              }`}
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-xs">({reviewCount})</span>
      </div>
    </Link>
  );
}
```

### 更新产品详情页

```typescript
// components/product/product-description.tsx
export function ProductDescription({ product }: { product: Product }) {
  const rating = product.reviews?.rating || 4.8;
  const reviewCount = product.reviews?.count || 328;
  
  return (
    <div>
      {/* 评分显示 */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="h-5 w-5 fill-current text-yellow-400">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
        <span className="text-sm text-neutral-500">
          ({reviewCount} 评价)
        </span>
      </div>
      
      {/* ... 其他内容 */}
    </div>
  );
}
```

## 🎯 推荐实施步骤

### 短期方案（1-2天）
1. 使用 Metafields 为现有产品添加评分数据
2. 更新产品查询以包含 metafields
3. 更新 UI 组件显示真实评分

### 中期方案（1-2周）
1. 安装 Judge.me 或类似评价应用
2. 集成应用的 API
3. 实现评价展示和收集功能

### 长期方案（1个月+）
1. 构建自定义评价系统
2. 实现评价审核流程
3. 添加图片评价、视频评价等高级功能

## 📊 数据示例

### Metafield 数据结构

```json
{
  "product": {
    "id": "gid://shopify/Product/123456",
    "title": "力量训练完全指南",
    "reviewRating": {
      "value": "4.8"
    },
    "reviewCount": {
      "value": "328"
    }
  }
}
```

## 🔗 相关资源

- [Shopify Metafields 文档](https://shopify.dev/docs/api/admin-rest/2024-01/resources/metafield)
- [Judge.me 集成文档](https://judge.me/reviews/shopify)
- [Shopify App Store - Reviews](https://apps.shopify.com/browse/store-management-reviews)

## ⚠️ 注意事项

1. **Storefront API 限制**：评价功能不是 Storefront API 的原生功能
2. **性能考虑**：大量评价数据应该缓存
3. **SEO 优化**：使用 Schema.org 标记评价数据
4. **合规性**：确保评价收集符合当地法律法规

## 💡 当前实现说明

目前网站中显示的评分（4.8★, 328评价等）是**静态示例数据**，用于展示 UI 设计。

要使用真实数据，请按照上述方案之一进行集成。
