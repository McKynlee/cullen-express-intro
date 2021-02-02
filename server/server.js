let express = require('express');
// console.log('express =', express);

// Create our app
const app = express();

// INCANTATION:
// Share any files inside the "public" folder
app.use(express.static('server/public'));

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
//   //When the server is ready, call this function
//   console.log('Im listening', port);
// });
