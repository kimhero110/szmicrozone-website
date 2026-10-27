FROM nginx:1.27-alpine

LABEL maintainer="SZMICROZONE Tech <ops@szmicrozone.com>"
LABEL description="苏州微众科技有限公司 (SZMICROZONE) 12页面旗舰级官网容器镜像"

# 拷贝自定义政企安全加固 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝全部静态站点文件与交互引擎资源
COPY *.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
