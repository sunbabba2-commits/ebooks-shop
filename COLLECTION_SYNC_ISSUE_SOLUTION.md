# Shopify 分类同步问题解决方案

## 🔍 问题诊断

通过测试发现，您的 Shopify 商店有 **2 个分类**：

1. **力量训练** 
   - Handle: `frontpage`
   - 状态: ✅ 正常工作

2. **有氧运动**
   - Handle: `有氧运动` (中文字符)
   - 状态: ❌ **无法正常工作**

## ⚠️ 根本原因

**问题：** 第二个分类使用了中文字符作为 handle (`有氧运动`)

当这个 handle 在 URL 中使用时，会被编码为：`%E6%9C%89%E6%B0%A7%E8%BF%90%E5%8A%A8`

Shopify Storefront API 无法正确匹配 URL 编码的 handle，导致返回：
```
No collection found for `%E6%9C%89%E6%B0%A7%E8%BF%90%E5%8A%A8`
```

## ✅ 解决方案

### 方案 1：修改 Shopify 分类 Handle（推荐）

在 Shopify 后台修改分类的 handle 为英文或拼音：

1. 登录 Shopify Admin
2. 进入 **Products** → **Collections**
3. 点击 **有氧运动** 分类
4. 在 **Search engine listing** 部分，点击 **Edit website SEO**
5. 修改 **URL handle** 为以下之一：
   - `aerobic-exercise` (英文)
   - `youyang-yundong` (拼音)
   - `cardio` (简短英文)

6. 保存更改

**修改后的分类列表应该是：**
- 力量训练 (handle: `frontpage` 或改为 `strength-training`)
- 有氧运动 (handle: `aerobic-exercise` 或 `cardio`)

### 方案 2：创建额外的分类（如果需要）

如果您还需要其他分类，建议创建：

1. **瑜伽冥想** → handle: `yoga-meditation`
2. **球类运动** → handle: `ball-sports`
3. **营养饮食** → handle: `nutrition`
4. **康复理疗** → handle: `rehabilitation`

### 方案 3：创建轮播图专用分类

系统还在寻找一个名为 `hidden-homepage-carousel` 的分类用于首页轮播图。

**创建步骤：**
1. 在 Shopify Admin 创建新分类
2. 标题：`首页轮播` (或任意名称)
3. Handle: `hidden-homepage-carousel`
4. 添加您想在首页轮播展示的产品
5. 保存

**注意：** 以 `hidden-` 开头的分类不会显示在搜索页面的筛选列表中。

## 🔧 Handle 命名最佳实践

### ✅ 推荐的 Handle 格式

- 使用小写英文字母
- 使用连字符 `-` 分隔单词
- 避免使用特殊字符
- 保持简短且有意义

**示例：**
```
力量训练 → strength-training
有氧运动 → cardio 或 aerobic
瑜伽冥想 → yoga
球类运动 → ball-sports
营养饮食 → nutrition
康复理疗 → rehab
```

### ❌ 避免的 Handle 格式

- ❌ 中文字符：`有氧运动`
- ❌ 空格：`strength training`
- ❌ 特殊符号：`strength&training`
- ❌ 大写字母：`StrengthTraining`

## 📋 验证步骤

修改完成后，按以下步骤验证：

1. **清除缓存**
   ```bash
   Remove-Item -Recurse -Force .next
   ```

2. **重启开发服务器**
   ```bash
   npm run dev
   ```

3. **访问网站**
   - 打开 http://localhost:3002
   - 检查分类筛选是否正常显示
   - 点击分类链接测试是否能正确加载产品

4. **检查终端输出**
   - 不应再看到 `No collection found` 错误
   - 所有分类应该能正常加载

## 🎯 预期结果

修改后，您应该能看到：

1. ✅ 所有分类在侧边栏正常显示
2. ✅ 点击分类能正确筛选产品
3. ✅ URL 中的分类 handle 是可读的英文
4. ✅ 没有 `No collection found` 错误

## 📞 需要帮助？

如果修改后仍有问题，请检查：

1. Shopify 后台分类是否已发布到 **Online Store** 销售渠道
2. 分类中是否有产品
3. 产品是否已发布到 **Online Store**
4. `.env.local` 中的 Shopify 凭证是否正确

## 🔗 相关文档

- [Shopify Collections 文档](https://help.shopify.com/en/manual/products/collections)
- [URL Handle 最佳实践](https://help.shopify.com/en/manual/online-store/seo/url-handles)
