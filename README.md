# 智图投研 - 官方网站

基于AI图形识别的下一代智能投研决策平台

## 项目简介

智图投研是一款颠覆性的金融科技产品。用户只需自由截取任意一段股票/期货行情走势图，我们的核心AI引擎即可在秒级内从海量历史数据中，精准匹配出最相似的K线形态序列，并以清晰的概率形式展示后续走势的统计规律，为投资决策提供强大的数据参考。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 部署到 Vercel

### 方法一：通过 GitHub 自动部署

1. 将代码推送到 GitHub 仓库
2. 访问 [Vercel](https://vercel.com)
3. 导入您的 GitHub 仓库
4. Vercel 会自动检测 Next.js 项目并进行配置
5. 点击 "Deploy" 开始部署

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 项目结构

```
zhitu-invest/
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx            # 根布局
│   └── page.tsx              # 主页
├── components/
│   ├── Hero.tsx              # 首屏组件
│   ├── ProblemSolution.tsx   # 痛点与解决方案
│   ├── Features.tsx          # 产品功能
│   ├── Advantages.tsx        # 核心优势
│   ├── Market.tsx            # 市场潜力
│   ├── WhyChooseUs.tsx       # 为什么选择我们
│   ├── Contact.tsx           # 联系方式
│   └── Footer.tsx            # 页脚
├── public/                   # 静态资源
├── next.config.js            # Next.js 配置
├── tailwind.config.ts        # Tailwind CSS 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 项目依赖

```

## 功能特点

- ✅ 响应式设计，完美支持移动端和桌面端
- ✅ 现代化 UI 设计，使用渐变色和动画效果
- ✅ SEO 优化，包含完整的元数据
- ✅ 高性能，使用 Next.js 15 App Router
- ✅ 类型安全，完整的 TypeScript 支持
- ✅ 易于部署，支持 Vercel 一键部署

## 联系方式

- **公司**: 智图投研
- **联系人**: 王谦
- **电话**: 15121095409

## License

© 2025 智图投研. All rights reserved.
