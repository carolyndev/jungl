const {MongoClient, ServerApiVersion} = require('mongodb');
const {MONGO_URL} = require('../../config/environment')

main().catch(err => console.error(err));

async function main() {
  const client = new MongoClient(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
  try {
    await client.connect();
    await  listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}