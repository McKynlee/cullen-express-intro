# Cullen Express Intro (McK Notes)

Make sure to have NO uppercase letters in file names. Some of our tools will NOT like that.

1. Initialize as node project: use terminal command. npm init
   a. terminal will ask you a bunch of questions, ending in 'Is this ok?'
   b. ENTER ENTER ENTER, then you will have a {} package.json file added to repo

1. New library to use: Express. (like we did with jQuery on client-side, but this is server-side). npm = node package manager = js libraries. So in terminal: npm install express
   a. This adds "dependencies" field in JSON file.
   b. Adds node_modules folder to repo: filed with tons of dependencies of Express.

   1. THIS IS HUGE! We do NOT want to push this back and forth between repo.
      c. Adds package-lock.json = makes sure if anyone grabs your code it's the same version, etc. (shouldn't need to mess with.)

1. Create new file .gitignore and node_modules or node_modules/
   a. if anyone pulls your code from github, they can recreate your project by downloading the dependencies listed in the json files.

1. npm install body-parser

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
    a. CTRL C means 'STOP this program', must use each time your server gets stuck (when you don't have your usual terminal prompt).
    b. common error: EADDRINUSE (E-address in use, meaning the port is busy)
    1. killall -9 node command to kill any other running node ports
