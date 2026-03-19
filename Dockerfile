FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm init -y  # Creates package.json
EXPOSE 3000
CMD ["node", "app2.js"]

