const querystring = require('querystring');

const data = () => {
  const result = querystring.stringify({
    magic: 'DEFAULT',
  })

  return result;
}

module.exports = data;