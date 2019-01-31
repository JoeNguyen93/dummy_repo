const { getRandomColor } = require('./color-utils');
const axios = require('axios')

console.log(`Here is hex value of a random color: ${getRandomColor()}`);

console.log('KEC')

axios.get('https://www.google.com');
