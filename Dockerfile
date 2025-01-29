# 選擇 Node.js 基礎鏡像
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安裝依賴
RUN npm install

# 複製專案文件
COPY . .

# 進行 TypeScript 編譯 & Vite 打包
RUN npm run build

# 設定預設指令
CMD ["npm", "run", "preview", "dev", "--", "--host", "0.0.0.0"]
