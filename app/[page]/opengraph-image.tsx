import OpengraphImage from 'components/opengraph-image';
import { getPage } from 'lib/shopify';

// [去Shopify化] 动态 Pages 已废(getPage 恒 undefined,主路由 notFound()):
// 此处仅存占位实现防构建报错,SEO 图随 404 一起不再产出
export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page?.seo?.title || page?.title || 'Coach Eddie';

  return await OpengraphImage({ title });
}
