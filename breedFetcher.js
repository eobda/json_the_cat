const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  console.log('typeof data:', typeof data);

  console.log(data[0]);
});