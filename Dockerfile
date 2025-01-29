# 使用官方 Node.js 來建置 Vite
FROM node:18-alpine AS build

# 設定工作目錄
WORKDIR /app

# 複製 package.json 並安裝依賴
COPY package.json package-lock.json ./
RUN npm install

# 複製專案檔案
COPY . .

# 建立 Vite 應用程式
RUN npm run build

# 使用 Nginx 作為前端伺服器
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# 複製我們的 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 3000 端口
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
