import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const db_name = process.env.MONGODB_DB_NAME;
const options = {};

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri, options);
const connected = await client.connect();
const connectToDatabase = connected.db(db_name);

export default connectToDatabase;
