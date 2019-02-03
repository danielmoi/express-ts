const querystring = require('querystring');

const namedExport = () => {
  const result = querystring.stringify({
    magic: 'NAMED',
  })

  return result;
}

module.exports = { namedExport };