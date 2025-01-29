# 使用 node:20-alpine 作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 并安装依赖
COPY package*.json ./
RUN npm install --omit=dev && npm install -g typescript \
    && npm i --save-dev @types/react @types/react-dom

# 复制所有文件
COPY . .

# 运行 TypeScript 编译和 Vite 构建
RUN tsc -b && vite build

CMD ["npm", "run", "preview"]
