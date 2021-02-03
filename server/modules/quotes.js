function getNextQuote() {
  //could also extract out this variable
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
  let index = 0;

  const result = quotesData[index];

  index += 1;
  //Ensures the API always returns a value and stays within quotesData
  index = index % quotesData.length;

  //test:
  console.log(result);
  return result;
}

module.exports = getNextQuote;
