#!/usr/bin/env bash
# ==============================================================================
# 苏州微众科技有限公司 (SZMICROZONE) · GitHub / Gitee 一键初始化与推送脚本
# 用法:
#   bash push-git.sh <您的GitHub或Gitee仓库地址> [分支名, 默认main]
# 示例:
#   bash push-git.sh https://github.com/your-org/szmicrozone-website.git
#   bash push-git.sh https://gitee.com/your-org/szmicrozone-website.git
# ==============================================================================

set -e

REPO_URL="${1:-}"
BRANCH="${2:-main}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$PROJECT_DIR"

echo "========================================================"
echo "  SZMICROZONE 苏州微众科技 · Git 仓库打包与远程推送工具"
echo "========================================================"

if [ ! -d ".git" ]; then
  echo "[1/4] 正在初始化本地 Git 仓库..."
  git init
else
  echo "[1/4] 检测到已有本地 Git 仓库。"
fi

git branch -M "$BRANCH"

echo "[2/4] 正在暂存全站 12 个页面、静态资源与自动化部署配置..."
git add .

if git diff --cached --quiet; then
  echo "[3/4] 当前无新增文件变更，保持最新提交。"
else
  echo "[3/4] 正在创建版本提交..."
  git commit -m "feat: 苏州微众科技(SZMICROZONE) 12页深空智算旗舰官网与自动化部署工程"
fi

if [ -z "$REPO_URL" ]; then
  echo ""
  echo "[!] 本地 Git 仓库已完成打包提交，但您尚未传入远程 GitHub/Gitee 仓库地址。"
  echo "    请直接执行以下命令完成推送："
  echo ""
  echo "    bash push-git.sh https://github.com/您的账号/您的仓库名.git"
  echo "    或"
  echo "    bash push-git.sh https://gitee.com/您的账号/您的仓库名.git"
  exit 0
fi

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "[4/4] 正在推送到远程仓库: ${REPO_URL} (分支: ${BRANCH})..."
git push -u origin "$BRANCH" --force

echo ""
echo "[+] 推送成功！"
echo "    - 若为 GitHub 仓库：仓库已内置 .github/workflows/deploy-pages.yml，在 Settings -> Pages 中将 Source 设为 GitHub Actions 即可自动上线。"
echo "    - 若为 Gitee 仓库：进入仓库「服务 -> Gitee Pages」点击启动即可在线访问。"
