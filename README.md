# SmashCensus

requirements for setup:
nodejs
npm
mongodb

build instructions:

start db:
mongod --dbpath *path to db* (use an empty directory on first setup)

smash-census-server:
1. npm install
2. npm start

smash-census-client:
1. npm install
2. npm start

optional, run 'ruby localtunnel.rb' to publicly share the webservice to http://smashcensus.localtunnel.me.