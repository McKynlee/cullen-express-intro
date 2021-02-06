# Setting up Node/Express/AJAX

1. Create files and source client.js into html
1. Download package.json --> npm init (in terminal)
1. Download dependencies: npm install express (in terminal)
1. Create repository at route of project
   a. create .gitignore file and write node_modules at top of it
   b. git init (in terminal) then git add . and git commit -m
1. In server.js: //bullets a and b below are dependencies
   a. const express = require('express');
   b. const bodyParser = require ('body-parser');
   c. const app = express(); //this starts app
1. Configure app in server.js:
   a. app.use(express.json()); //Same as doing bodyParser.json()
   b. app.use(express.urlencoded({ extended: true}));
1. Turn app on: app.listen(port, function());
1. To see in browser (still in server.js): app.use(express.static('server/public'));
1. Create modules folder with .js file inside that will hold our data (array, etc.).
   a. build out two functions in .js file with data:
   b. function to return all data
   c. function to add data
1. create shortcut to start server with npm start:
   a. in package.json under "scripts": "start": "node ./server/server.js"
1. Import data from .js file into server.js:
   a. const randoData = require('./modules/randoData'); at top of server module
1. Tell server what to send when api/dataYouMade is requested, and what it should respond:
   app.get('api/dataYouMade', (req, res) =>{
   res.send('randoData')
   })

1. in randoData.js module, under data, add: module.exports{
   getAllPokemon: getAllPokemonFunction,
   savePokemon: savePokemonFunction,
   }

1. For AJAX, we need to import jquery. AJAX is right off of jQuery, which is why we call it $.ajax
   a. always need: $.ajax({}).then(function(response) {}).catch(function(error) {});
   b. .then is success state, .catch is error state.
  c. in $(document).ready(function() {
$.ajax({
   method: 'GET', //this is same as type: 'GET',
   url: 'api/pokemon',
   })
   }); //This asks our server.js if it holds something called api/pokemon and server will deliver the info linked with that.
