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
