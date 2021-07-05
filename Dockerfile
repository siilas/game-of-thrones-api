FROM node:14

WORKDIR /.

RUN npm install

COPY / .

EXPOSE 8080

CMD ["npm", "start"]