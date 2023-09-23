const request = require('request');

// Allow the user to specify breed name using command line
const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found!');
  } else {
    console.log(data[0].description);
  }
});