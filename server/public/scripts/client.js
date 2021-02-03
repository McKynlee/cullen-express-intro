console.log('in client.js');

$(document).ready(onReady);

function onReady() {
  console.log('so ready');

  fetchQuotes();
  //Grab that data from the server
  // GET /allTheQuotes
  // Use AJAX!  tool for making HTTP requests
  // from client-side JS code
  // (it's a function we are going to call, and
  // it needs to know URL, what method to use -->
  // we put these things in an object:)
  // **This object is not taco, must look certain way
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  //Pass that object to ajax function
  // This is called a promise
  $.ajax(ajaxOptions)
    .then(function (quoteList) {
      console.log('got a response', quoteList);

      //--> this gives us same info as app.get('/allTheQuotes etc)
      // in server.js module  **must have app.get first for ajax to work

      // Must write things you want to happen with ajax
      // inside of ajax cuz it lags in returning info
      console.log('This prob logs first cuz AJAX takes time');

      // Take array of quotes, loop through,
      // and append to DOM
      for (let quote of quoteList) {
        $('.listOfQuotes').append(`
      <li>
        <blockquote>
      "${quote.quote}" --${quote.author}
        </blockquote>
      </li>`);
      }
    })
    // If the .then doesn't return something then .catch runs
    .catch(function () {
      $('.listOfQuotes').text('ruh roh...get help!');
      alert('ruh roh...get help!');
    });
}

function fetchQuotes() {
  $(document).on('submit', '#newQuoteForm', onSubmit);

  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  $.ajax(ajaxOptions)
    .then(function (quoteList) {
      console.log('got a response', quoteList);

      //--> this gives us same info as app.get('/allTheQuotes etc)
      // in server.js module  **must have app.get first for ajax to work

      // Must write things you want to happen with ajax
      // inside of ajax cuz it lags in returning info
      console.log('This prob logs first cuz AJAX takes time');

      // Take array of quotes, loop through,
      // and append to DOM
      for (let quote of quoteList) {
        $('.listOfQuotes').append(`
      <li>
        <blockquote>
      "${quote.quote}" --${quote.author}
        </blockquote>
      </li>`);
      }
    })
    // If the .then doesn't return something then .catch runs
    .catch(function () {
      $('.listOfQuotes').text('ruh roh...get help!');
      alert('ruh roh...get help!');
    });
}

function onSubmit(evt) {
  evt.preventDefault();

  console.log('onSubmit');
  // Grab data from form inputs
  let newQuote = {
    quote: $('#quoteInput').val(),
    author: $('#authorInput').val(),
    method: 'POST',
  };

  console.log('newQuote', newQuote);

  //POST quote data to server
  $.ajax({
    url: '/quotes',
    method: 'POST',
    // this becomes req.body
    data: {
      quote_to_add: newQuote,
    },
  })
    .then(function (response) {
      console.log('Huzzah!');
    })
    .catch(function (error) {
      console.log('Wah wah wah');
    });
}
