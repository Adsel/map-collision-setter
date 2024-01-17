FROM node:16.15

WORKDIR /app

COPY . ./

RUN ls -la
RUN echo "Building server"

RUN npm install

EXPOSE 8080 80

CMD npm run serve
