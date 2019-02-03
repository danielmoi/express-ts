const querystring = require('querystring');

const data = () => {
  const result = querystring.stringify({
    magic: 'ABRA',
  })

  return result;
}

module.exports = data;