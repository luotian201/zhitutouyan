# 快速开始指南

## 本地预览

如果您想在本地查看网站效果：

```bash
# 进入项目目录
cd C:\Users\tnk2tnk\Desktop\zhitutouyan\zhitu-invest

# 启动开发服务器
npm run dev
```

然后在浏览器中访问：http://localhost:3000

## 部署到 GitHub 和 Vercel

### 第一步：准备 GitHub 仓库

1. 访问 https://github.com 并登录
2. 点击右上角的 "+" → "New repository"
3. 填写仓库名称（建议：`zhitu-invest-website`）
4. 选择 Public
5. 点击 "Create repository"
6. **记下仓库地址**，例如：`https://github.com/你的用户名/zhitu-invest-website.git`

### 第二步：上传代码

在项目目录打开命令行，执行：

```bash
# 1. 确保在正确的目录
cd C:\Users\tnk2tnk\Desktop\zhitutouyan\zhitu-invest

# 2. 添加所有文件
git add .

# 3. 创建提交
git commit -m "智图投研官网首次发布"

# 4. 连接到 GitHub（替换成您的仓库地址）
git remote add origin https://github.com/你的用户名/zhitu-invest-website.git

# 5. 推送代码
git branch -M main
git push -u origin main
```

如果遇到身份验证问题，GitHub 现在需要使用 Personal Access Token：
1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 生成新的 token（选择 repo 权限）
3. 使用 token 作为密码

### 第三步：部署到 Vercel（3分钟完成）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 点击 "Sign Up" 或 "Log In"
   - 选择 "Continue with GitHub"

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 在列表中找到 `zhitu-invest-website`
   - 点击 "Import"

3. **部署设置**
   - Vercel 会自动识别 Next.js 项目
   - 保持所有默认设置
   - 直接点击 "Deploy"

4. **等待部署**
   - 大约 1-2 分钟后部署完成
   - 您会看到庆祝动画和网站地址

5. **访问网站**
   - 点击提供的链接访问您的网站
   - 地址类似：`https://zhitu-invest-website.vercel.app`

### 恭喜！网站已上线 🎉

## 日常更新流程

当您需要更新网站内容时：

```bash
# 1. 修改代码后保存

# 2. 提交更改
git add .
git commit -m "更新描述"

# 3. 推送到 GitHub
git push origin main
```

Vercel 会自动检测到更新并重新部署（约1-2分钟）。

## 网站地址管理

您的网站会有以下地址：

1. **Vercel 默认域名**（自动分配）
   - 例如：`zhitu-invest-website.vercel.app`
   - 免费使用，永久有效

2. **自定义域名**（可选）
   - 如果您有域名（如 `www.zhitutouyan.com`）
   - 在 Vercel 项目设置 → Domains 中添加
   - 按提示配置 DNS 即可

## 常见问题

**Q: 推送到 GitHub 失败？**
A: 确保您有仓库的写入权限，或使用 Personal Access Token

**Q: Vercel 构建失败？**
A: 检查 GitHub 上的代码是否完整，查看 Vercel 的构建日志

**Q: 网站无法访问？**
A: 清除浏览器缓存，或尝试使用无痕模式访问

**Q: 如何查看部署状态？**
A: 登录 Vercel 控制台，在项目页面查看部署历史

## 技术支持

- 项目位置：`C:\Users\tnk2tnk\Desktop\zhitutouyan\zhitu-invest`
- 联系人：王谦
- 电话：15121095409

## 重要提醒

✅ **定期备份代码**：GitHub 已经是一个备份，但建议也在本地保留副本

✅ **测试后再推送**：在本地用 `npm run dev` 测试无误后再推送到 GitHub

✅ **查看部署状态**：每次推送后，登录 Vercel 确认部署成功

---

如需详细部署说明，请查看 `DEPLOYMENT.md` 文件。
