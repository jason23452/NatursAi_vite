# 使用 Node.js 官方 LTS 版本作為基礎鏡像
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 進入容器
COPY package*.json ./

# 安裝依賴，確保 TypeScript 和 Vite 插件可用
RUN npm install --omit=dev && npm install -g typescript

# 複製專案的所有文件到容器內
COPY . .

# 生成靜態檔案（如果你的 Vite 是用來做前端，請執行 build）
RUN npm run build

# 設定容器啟動時執行的命令
CMD ["npm", "run", "preview"]

# 設定預設的埠號（根據 Vite 預設 5173，可改成你使用的埠號）
EXPOSE 5173
