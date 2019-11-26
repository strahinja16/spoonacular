import fetch from 'node-fetch';

export default (route, query) => {
  return fetch(`https://${process.env.SPOONACULAR_URL}${route}${query}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": process.env.SPOONACULAR_URL,
      "x-rapidapi-key": process.env.SPOONACULAR_API_KEY
    },
  });
}