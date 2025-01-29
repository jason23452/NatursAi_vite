# ----------- Stage 1: Build -----------
    FROM node:16-alpine AS build

    # 設置工作目錄
    WORKDIR /app
    
    # 將 package*.json 複製到容器內
    COPY package*.json ./
    
    # 安裝依賴
    RUN npm install
    
    # 將專案其餘檔案複製到容器
    COPY . .
    
    # 執行 Vite 打包
    RUN npm run build
    
    # ----------- Stage 2: Production -----------
    FROM nginx:stable-alpine
    
    # 將建置後的檔案從第一階段複製到 Nginx 預設靜態檔案目錄
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # 對外開放埠 80
    EXPOSE 80
    
    # 啟動 Nginx
    CMD ["nginx", "-g", "daemon off;"]
    