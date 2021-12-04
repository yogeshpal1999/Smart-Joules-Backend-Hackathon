const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://test1234:test1234@cluster0.bfzbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  return 'done.';
}
exports.main = main;
