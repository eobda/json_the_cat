const { fetchBreedDescription } = require('./breedFetcher');

// Allow the user to specify breed name using command line
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});