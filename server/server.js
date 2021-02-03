let express = require('express');
// console.log('express =', express);

// Create our app
const app = express();

//Import quotes module:
const quotes = require('./modules/quotes');

// INCANTATION:
// Share any files inside the "public" folder
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/quotes', function (req, res) {
  //logic for getting API request goes in here
  console.log('GET request for quotes');
  //when writing API we MUST end API functions with either 'send' or 'end', otherwise runs up our bill on cloud
  res.send(quotes.getNextQuote());
});

app.post('/quotes', (req, res) => {
  let quote = req.body.quote_to_add;
  console.log(quote.author);
  console.log(quote.quote);

  //TODO: add to quotesData.  Pass in body from req
  quotes.addQuote(quote);

  // TODO: REspond with something!  Industry standard is to
  //respond with status and nothing else
  //200 = 'ok'
  // 201 =
  //403 = forbidden
  //404 = not found
  //418 = "I'm a teapot" (April fool's joke by some dev)

  // This will make Postman return "ok" after successfully posting
  res.sendStatus(200);
});
