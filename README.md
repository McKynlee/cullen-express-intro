# Cullen Express Intro (McK Notes)

Make sure to have NO uppercase letters in file names. Some of our tools will NOT like that.

1. Initialize as node project: use terminal command. npm init
   a. terminal will ask you a bunch of questions, ending in 'Is this ok?'
   b. ENTER ENTER ENTER, then you will have a {} package.json file added to repo

1. New library to use: Express. (like we did with jQuery on client-side, but this is server-side). npm = node package manager = js libraries. So in terminal: npm install express
   a. This adds "dependencies" field in JSON file.
   b. Adds node_modules folder to repo: filed with tons of dependencies of Express.
   c. Adds package-lock.json = makes sure if anyone grabs your code it's the same version, etc. (shouldn't need to mess with.)

   1. if anyone pulls your code from github, they can recreate your project by downloading the dependencies listed in the json files. All the other person has to do when they open your project is run npm install in terminal inside VS and npm will kindly install everything you need.

   1. THIS IS HUGE! We do NOT want to push this back and forth between repo. So: Create new file .gitignore and node_modules or node_modules/

1. npm install body-parser
   This is middleware to handle json (allows you to take raw json material and put it into usable format). This actually is part of express right now, otherwise we would have to:
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

1. Create new server folder.
   a. link to express: let express = require('express');
   Do NOT require('./express) because this will link to specific express folder, but we want the general concept from node_modules. Express is a function.

1. Set up the version of "onReady" for express
   //Listen for network requests
   // the first parameter represents a port, can be any number over 3000.
   // Convention uses either 3000 or 5000 for port number.
   // The second parameter is a function
   app.listen(3000, function () {
   //When the server is ready, call this function
   console.log('Im listening', 3000);
   });

//OR:
// let port = 5000;
// app.listen(port, function () {
// //When the server is ready, call this function
// console.log('Im listening', port);
// });

1.  Open your point number in browser
    localhost:3000
    ------at this point, will see Cannot GET / in browser
    ------ / is shorthand for index.html
    ------ We need to create this file as part of server code (see below)
    a. CTRL C means 'STOP this program', must use each time your server gets stuck (when you don't have your usual terminal prompt).
    b. common error: EADDRINUSE (E-address in use, meaning the port is busy)

    1. killall -9 node command to kill any other running node ports

1.  Create files in server folder
    a. create public folder inside server folder
    b. create index.html file inside public folder
    c. Let people access public folder, open server.js and add
    app.use(express.static('server/public'));

// view image in browser: http://localhost:3000/images/HulkHands.jpeg

With Chad: 2. in server.js add setup incantations (could also use body-parser instead)
app.use(express.json()); and  
app.use(express.urlencoded({extended: true}));

2. Use modules to keep things nice and separated. Create modules folder and add file quotes.js NOT in public so just our server has access to it.

3. Set up new server route (NOT public) in server.js
   use up and down arrows after typing app.get to find:

   app.get('/quotes', function(req, res) {
   //logic for getting API request goes in here
   console.log('GET request for quotes');
   //when writing API we MUST end API functions with either 'send' or 'end', otherwise runs up our bill on cloud
   res.send(quotes());
   });
   /quotes is our request to the server to find that URL (just like /index.html). Kinda lik "If /quotes are requesting, then server's response will be to send the /quotes back.
   res stands for response

4. Import quotes module to server.js
   const quotes = require('./modules/quotes');

5. Add new quote via server.js:
   FYI (req, res) => is same as function(req, res)

app.post('/quotes', (req, res) =>) {
//body is standard part of request. req.body is a gift from body-parser --> if we get an error it may be because we haven't installed body-parser
//quote_to_add is an object
let quote = req.body.quote_to_add;
console.log(quote.author);
console.log(quote.quote);
};
