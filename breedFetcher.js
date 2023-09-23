const request = require('request');

// Allow the user to specify breed name using command line
const breed = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        console.log('Breed not found!');
      } else {
        callback(data[0].description);
      }
    }
  });
};