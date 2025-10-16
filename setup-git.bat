@echo off
echo ========================================
echo 智图投研官网 - Git 配置脚本
echo ========================================
echo.

REM 配置 Git 用户信息（您可以修改为自己的信息）
git config user.name "Wang Qian"
git config user.email "wangqian@zhitutouyan.com"

echo Git 用户配置完成！
echo 用户名: Wang Qian
echo 邮箱: wangqian@zhitutouyan.com
echo.

REM 创建初始提交
echo 正在创建初始提交...
git add .
git commit -m "Initial commit: 智图投研官网完整项目"

echo.
echo ========================================
echo Git 配置和初始提交完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 在 GitHub 上创建新仓库
echo 2. 执行以下命令（替换成您的仓库地址）：
echo.
echo    git remote add origin https://github.com/您的用户名/仓库名.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 详细说明请查看 QUICK_START.md 文件
echo ========================================
pause
