# 部署指南

本文档将指导您如何将智图投研网站部署到 Vercel。

## 前提条件

1. GitHub 账号
2. Vercel 账号（可以使用 GitHub 账号登录）

## 步骤一：上传到 GitHub

### 1. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 输入仓库名称，例如：`zhitu-invest-website`
4. 选择 Public 或 Private（推荐 Public 以便使用 Vercel 免费计划）
5. 不要勾选 "Initialize this repository with a README"（因为我们已经有代码）
6. 点击 "Create repository"

### 2. 推送代码到 GitHub

在项目目录下执行以下命令：

```bash
cd C:\Users\tnk2tnk\Desktop\zhitutouyan\zhitu-invest

# 添加所有文件到暂存区
git add .

# 创建第一个提交
git commit -m "Initial commit: 智图投研官网"

# 添加远程仓库（替换为您的 GitHub 用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/zhitu-invest-website.git

# 设置默认分支为 main
git branch -M main

# 推送代码到 GitHub
git push -u origin main
```

注意：将 `YOUR_USERNAME` 替换为您的 GitHub 用户名。

## 步骤二：部署到 Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. **访问 Vercel**
   - 打开 [https://vercel.com](https://vercel.com)
   - 使用您的 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." 按钮
   - 选择 "Project"
   - 点击 "Import Git Repository"
   - 选择您刚创建的 GitHub 仓库 `zhitu-invest-website`

3. **配置项目**
   - Vercel 会自动检测到这是一个 Next.js 项目
   - 保持默认配置即可：
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - 点击 "Deploy"

4. **等待部署完成**
   - 部署通常需要 1-3 分钟
   - 完成后，您会看到部署成功的页面
   - Vercel 会自动分配一个域名，例如：`zhitu-invest-website.vercel.app`

5. **访问网站**
   - 点击提供的链接即可访问您的网站
   - 您也可以在 Vercel 控制台中自定义域名

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
cd C:\Users\tnk2tnk\Desktop\zhitutouyan\zhitu-invest
vercel

# 按照提示操作：
# - Set up and deploy? Yes
# - Which scope? 选择您的账号
# - Link to existing project? No
# - What's your project's name? zhitu-invest
# - In which directory is your code located? ./
# - Want to override the settings? No

# 部署到生产环境
vercel --prod
```

## 步骤三：自动部署设置

Vercel 会自动监听您的 GitHub 仓库：

- **自动部署**：每次您向 `main` 分支推送代码，Vercel 都会自动重新部署
- **预览部署**：如果您创建 Pull Request，Vercel 会创建预览部署

## 自定义域名（可选）

如果您有自己的域名：

1. 在 Vercel 项目设置中，进入 "Domains"
2. 点击 "Add Domain"
3. 输入您的域名，例如：`www.zhitutouyan.com`
4. 按照 Vercel 的指引，在您的域名提供商处添加 DNS 记录

## 环境变量（如需要）

如果您的项目需要环境变量：

1. 在 Vercel 项目设置中，进入 "Environment Variables"
2. 添加需要的环境变量
3. 重新部署项目

## 更新网站

当您需要更新网站内容时：

```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push origin main
```

推送后，Vercel 会自动重新部署您的网站。

## 性能优化建议

1. **图片优化**：使用 Next.js 的 Image 组件优化图片
2. **代码分割**：Next.js 会自动进行代码分割
3. **CDN 加速**：Vercel 自动使用全球 CDN
4. **缓存策略**：Next.js 自动处理静态资源缓存

## 监控和分析

Vercel 提供了以下功能：

- **Analytics**：网站访问分析
- **Speed Insights**：性能监控
- **Logs**：部署和运行日志

在 Vercel 控制台的项目页面可以查看这些信息。

## 故障排查

### 构建失败

1. 检查 GitHub 仓库中的代码是否完整
2. 查看 Vercel 部署日志中的错误信息
3. 确保 `package.json` 中的依赖正确

### 页面显示异常

1. 检查浏览器控制台的错误信息
2. 确保所有静态资源路径正确
3. 清除浏览器缓存后重试

### 联系支持

如果遇到问题，可以：
- 查看 [Vercel 文档](https://vercel.com/docs)
- 访问 [Vercel 支持页面](https://vercel.com/support)
- 联系智图投研技术支持：15121095409

## 成本说明

- **Hobby 计划**：免费，适合个人和小型项目
  - 无限部署
  - 100GB 带宽/月
  - 自动 HTTPS
  - 全球 CDN

- **Pro 计划**：$20/月，适合专业用途
  - 1TB 带宽/月
  - 团队协作功能
  - 高级分析
  - 优先支持

对于智图投研官网，免费的 Hobby 计划已经足够使用。

## 安全建议

1. 不要在代码中硬编码敏感信息
2. 使用 Vercel 的环境变量管理敏感数据
3. 定期更新依赖包
4. 启用 Vercel 的安全功能

## 备份

建议定期：
- 备份 GitHub 仓库
- 导出 Vercel 项目配置
- 保存重要的环境变量

---

部署完成后，您的智图投研官网将可以通过 Vercel 提供的域名访问！
