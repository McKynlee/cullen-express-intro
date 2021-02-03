let index = 0;

const quotesData = [
  {
    quote:
      "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
    author: 'Emma Watson',
  },
  {
    quote:
      "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: 'Scott Adams',
  },
  {
    quote: 'Intelligence plus character-that is the goal of true education.',
    author: 'Martin Luther King, Jr.',
  },
];

function getNextQuote() {
  //could also extract out this variable
  //move let index=0 to top so we don't reset at 0 every time

  const result = quotesData[index];

  index += 1;
  //Ensures the API always returns a value and stays within quotesData
  index = index % quotesData.length;

  //test:
  console.log(result);
  return result;
}

//function to capture new quote when we send that to the server
function addQuote(quoteData) {
  quotesData.push(quoteData);

  //Way to test if we have added a quote
  console.log('Starting number of quotes', quotesData.length);
  return true;
}

module.exports = { getNextQuote, addQuote };
//Don't send out list because, security, just related functions
//same as:
//module.exports = { getNextQuote: getNextQuote, addQuote: addQuote };
//but can shorthand because the keys and properties have the same name
