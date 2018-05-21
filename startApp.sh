cd ./trelloboardapi
docker-compose up -d 
npm install
node ./server.js
cd ../trelloboardui
npm install
npm start