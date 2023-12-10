const metadata = require('../src/metadata.json');

exports.handler = async (event, context) => {
  if (event.httpMethod == "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({ data: { version: metadata.versionNumber } }),
    };
  }
};