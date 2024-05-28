FROM node:13.12.0-alpine
WORKDIR /c/VueReact/egovframe-template-simple-react-4.2.x
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 3000