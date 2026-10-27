#!/usr/bin/env bash
# ==============================================================================
# 苏州微众科技有限公司 (SZMICROZONE) 旗舰官网一键部署脚本
# 支持模式:
#   1) ./deploy.sh local    -> 启动本地预览服务 (默认端口 8080)
#   2) ./deploy.sh docker   -> 使用 Docker Compose 容器化构建并后台守护运行
#   3) ./deploy.sh nginx    -> 部署至本机 Nginx 标准站点目录 (/var/www/szmicrozone)
# ==============================================================================

set -e

MODE="${1:-local}"
PORT="${2:-8080}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "========================================================"
echo "  SZMICROZONE 苏州微众科技 · 12页旗舰官网自动部署工具"
echo "========================================================"

case "$MODE" in
  local)
    echo "[*] 正在启动本地高速预览服务器 (端口: ${PORT})..."
    if command -v python3 >/dev/null 2>&1; then
      echo "[+] 访问地址: http://localhost:${PORT}/index.html"
      cd "$PROJECT_DIR" && python3 -m http.server "$PORT"
    elif command -v npx >/dev/null 2>&1; then
      npx serve "$PROJECT_DIR" -l "$PORT"
    else
      echo "[!] 未检测到 python3 或 npx，请直接双击打开 index.html 或使用 docker 模式。"
      exit 1
    fi
    ;;

  docker)
    echo "[*] 正在通过 Docker Compose 构建并启动生产级容器..."
    cd "$PROJECT_DIR"
    docker compose up -d --build
    echo "[+] 部署成功！访问地址: http://localhost:8080"
    ;;

  nginx)
    TARGET_DIR="/var/www/szmicrozone"
    echo "[*] 正在同步站点资产至系统 Nginx 目录: ${TARGET_DIR} ..."
    sudo mkdir -p "$TARGET_DIR"
    sudo cp -r "$PROJECT_DIR"/*.html "$PROJECT_DIR"/assets "$TARGET_DIR"/
    sudo cp "$PROJECT_DIR"/nginx.conf /etc/nginx/conf.d/szmicrozone.conf
    sudo nginx -t && sudo systemctl reload nginx
    echo "[+] Nginx 生产环境部署完成！"
    ;;

  *)
    echo "用法: ./deploy.sh [local|docker|nginx] [端口号]"
    exit 1
    ;;
esac
