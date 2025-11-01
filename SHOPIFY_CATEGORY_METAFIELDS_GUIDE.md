# Shopify 分类元数据配置指南

本指南说明如何在 Shopify 后台为分类（Collections）配置图标、颜色和简短描述，使首页的"热门分类"部分能够动态显示这些信息。

## 📋 概述

系统现在支持从 Shopify 动态获取分类信息，包括：
- 🎨 **图标** (Emoji 或文本)
- 🌈 **渐变颜色** (Tailwind CSS 类)
- 📝 **简短描述** (一句话介绍)
- 📊 **产品数量** (自动计算)

## 🔧 配置步骤

### 第一步：修改分类 Handle（重要！）

在配置元数据之前，请先确保您的分类 handle 使用英文：

1. 登录 Shopify Admin
2. 进入 **Products** → **Collections**
3. 点击要修改的分类（如"有氧运动"）
4. 在 **Search engine listing** 部分，点击 **Edit website SEO**
5. 修改 **URL handle** 为英文：
   - `有氧运动` → `cardio` 或 `aerobic-exercise`
   - `力量训练` → `strength-training`
6. 保存更改

**推荐的 Handle 命名：**
```
力量训练 → strength-training
有氧运动 → cardio
瑜伽冥想 → yoga
球类运动 → ball-sports
营养饮食 → nutrition
康复理疗 → rehabilitation
```

### 第二步：创建 Metafield 定义

1. 在 Shopify Admin，进入 **Settings** → **Custom data**
2. 点击 **Collections**
3. 点击 **Add definition** 按钮

#### 创建图标字段

- **Name**: `图标` 或 `Icon`
- **Namespace and key**: `custom.icon`
- **Type**: `Single line text`
- **Description**: `分类图标（使用 Emoji，如 💪 🏃 🧘）`
- 点击 **Save**

#### 创建颜色字段

- **Name**: `颜色` 或 `Color`
- **Namespace and key**: `custom.color`
- **Type**: `Single line text`
- **Description**: `Tailwind 渐变色类名（如 from-orange-500 to-red-500）`
- 点击 **Save**

#### 创建简短描述字段

- **Name**: `简短描述` 或 `Short Description`
- **Namespace and key**: `custom.short_description`
- **Type**: `Single line text`
- **Description**: `分类的一句话介绍`
- 点击 **Save**

### 第三步：为每个分类配置元数据

1. 进入 **Products** → **Collections**
2. 点击要配置的分类
3. 向下滚动到 **Metafields** 部分
4. 填写以下字段：

#### 示例配置

**力量训练 (strength-training)**
- **图标**: `💪`
- **颜色**: `from-orange-500 to-red-500`
- **简短描述**: `增肌塑形，科学力量训练指南`

**有氧运动 (cardio)**
- **图标**: `🏃`
- **颜色**: `from-blue-500 to-cyan-500`
- **简短描述**: `跑步、游泳、骑行全攻略`

**瑜伽冥想 (yoga)**
- **图标**: `🧘`
- **颜色**: `from-purple-500 to-pink-500`
- **简短描述**: `身心平衡，柔韧性提升`

**球类运动 (ball-sports)**
- **图标**: `⚽`
- **颜色**: `from-green-500 to-emerald-500`
- **简短描述**: `篮球、足球、网球技巧`

**营养饮食 (nutrition)**
- **图标**: `🥗`
- **颜色**: `from-yellow-500 to-orange-500`
- **简短描述**: `运动营养，健康饮食方案`

**康复理疗 (rehabilitation)**
- **图标**: `🩺`
- **颜色**: `from-teal-500 to-blue-500`
- **简短描述**: `运动损伤预防与康复`

5. 点击 **Save** 保存

## 🎨 可用的图标 Emoji

您可以使用任何 Emoji 作为图标，以下是一些推荐：

### 运动类
- 💪 力量训练
- 🏃 跑步/有氧
- 🧘 瑜伽
- ⚽ 球类运动
- 🏋️ 举重
- 🚴 骑行
- 🏊 游泳
- 🤸 体操
- 🥊 拳击
- 🏀 篮球
- 🎾 网球
- ⛷️ 滑雪

### 健康类
- 🥗 营养饮食
- 🩺 康复理疗
- 💊 补剂
- 🧠 心理健康
- 😴 睡眠恢复
- 🫀 心血管

### 其他
- 📚 知识学习
- 🎯 目标设定
- 📊 数据分析
- 🏆 竞技比赛

## 🌈 可用的渐变颜色

使用 Tailwind CSS 的渐变色类名：

### 暖色系
```
from-orange-500 to-red-500      # 橙红渐变
from-red-500 to-pink-500        # 红粉渐变
from-yellow-500 to-orange-500   # 黄橙渐变
from-pink-500 to-rose-500       # 粉玫渐变
```

### 冷色系
```
from-blue-500 to-cyan-500       # 蓝青渐变
from-teal-500 to-blue-500       # 青蓝渐变
from-cyan-500 to-blue-500       # 青蓝渐变
from-indigo-500 to-blue-500     # 靛蓝渐变
```

### 紫色系
```
from-purple-500 to-pink-500     # 紫粉渐变
from-indigo-500 to-purple-500   # 靛紫渐变
from-violet-500 to-purple-500   # 紫罗兰渐变
```

### 绿色系
```
from-green-500 to-emerald-500   # 绿翠渐变
from-emerald-500 to-teal-500    # 翠青渐变
from-lime-500 to-green-500      # 青绿渐变
```

## 🔄 自动回退机制

如果您没有为某个分类配置 metafields，系统会自动使用默认值：

1. **图标**: 如果分类标题在默认配置中存在，使用默认图标；否则使用 📚
2. **颜色**: 如果分类标题在默认配置中存在，使用默认颜色；否则从颜色列表中循环选择
3. **描述**: 优先使用 metafield，其次使用默认配置，最后使用分类的完整描述

**默认配置的分类：**
- 力量训练
- 有氧运动
- 瑜伽冥想
- 球类运动
- 营养饮食
- 康复理疗

## 📝 添加新分类

当您在 Shopify 添加新分类时：

1. **创建分类**
   - 进入 **Products** → **Collections** → **Create collection**
   - 填写标题（中文）
   - 设置 Handle（英文，如 `swimming`）
   - 添加描述
   - 添加产品

2. **配置元数据**（可选）
   - 图标: 选择合适的 Emoji（如 🏊）
   - 颜色: 选择渐变色（如 `from-cyan-500 to-blue-500`）
   - 简短描述: 一句话介绍（如 `自由泳、蛙泳技巧提升`）

3. **发布分类**
   - 确保分类已发布到 **Online Store** 销售渠道
   - 确保分类中有产品

4. **验证显示**
   - 清除缓存: `Remove-Item -Recurse -Force .next`
   - 重启服务器: `npm run dev`
   - 访问首页查看新分类

## ⚠️ 注意事项

1. **Handle 必须使用英文**
   - 中文 handle 会导致 URL 编码问题
   - 使用小写字母和连字符

2. **Metafields 是可选的**
   - 不配置也能正常显示
   - 系统会使用默认值

3. **图标建议**
   - 使用单个 Emoji
   - 避免使用复杂的组合 Emoji
   - 确保在不同设备上显示正常

4. **颜色格式**
   - 必须使用 Tailwind CSS 类名
   - 格式: `from-{color}-{shade} to-{color}-{shade}`
   - 不要使用自定义颜色值

5. **描述长度**
   - 建议 10-20 个字
   - 简洁明了，突出特点

## 🧪 测试验证

配置完成后，按以下步骤验证：

1. **清除缓存**
   ```bash
   Remove-Item -Recurse -Force .next
   ```

2. **重启开发服务器**
   ```bash
   npm run dev
   ```

3. **访问首页**
   - 打开 http://localhost:3002
   - 查看"热门分类"部分
   - 确认图标、颜色、描述正确显示

4. **检查产品数量**
   - 确认每个分类显示的产品数量正确
   - 点击分类卡片，验证跳转到正确的分类页面

## 🎯 最佳实践

1. **统一风格**
   - 所有分类使用相似风格的 Emoji
   - 颜色搭配协调
   - 描述长度一致

2. **语义化 Handle**
   - 使用有意义的英文单词
   - 避免使用数字或随机字符
   - 保持简短易记

3. **定期更新**
   - 根据产品数量调整分类
   - 更新过时的描述
   - 优化图标和颜色

4. **SEO 优化**
   - 在分类的完整描述中包含关键词
   - 使用有意义的 Handle
   - 填写 SEO 标题和描述

## 📞 故障排除

### 问题：分类不显示

**检查：**
- 分类是否已发布到 Online Store
- 分类中是否有产品
- Handle 是否以 `hidden-` 开头（会被隐藏）

### 问题：图标不显示

**检查：**
- Metafield 的 namespace 和 key 是否正确（`custom.icon`）
- 是否使用了有效的 Emoji
- 浏览器是否支持该 Emoji

### 问题：颜色不生效

**检查：**
- 颜色类名格式是否正确
- 是否使用了 Tailwind 支持的颜色
- 是否包含 `from-` 和 `to-` 前缀

### 问题：产品数量不准确

**解决：**
- 清除 Next.js 缓存
- 确保产品已发布到分类
- 检查产品是否已发布到 Online Store

## 🔗 相关文档

- [Shopify Metafields 文档](https://shopify.dev/docs/apps/custom-data/metafields)
- [Tailwind CSS 颜色](https://tailwindcss.com/docs/customizing-colors)
- [Emoji 列表](https://emojipedia.org/)
- [COLLECTION_SYNC_ISSUE_SOLUTION.md](./COLLECTION_SYNC_ISSUE_SOLUTION.md)
