import { MongoClient } from "mongodb";

if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = import.meta.env.MONGODB_URI;
const options = {};
let cachedMongo;

const connectToDB = async () => {
  console.log("BIEN CONNECTER")
  const mongo = await new MongoClient(uri, options).connect();
  console.log("MongoClient", mongo)
  // Change this to your own DB name of course.
  // Or better yet, put it in your .env
  return mongo.db(import.meta.env.MONGODB_DATABASE);
};

export const getDB = async () => {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  // Text above copied from :
  // https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.ts

  if (import.meta.env.NODE_ENV === "development") {
    if (!global._mongoConnection) {
      global._mongoConnection = await connectToDB();
      cachedMongo = global._mongoConnection;
    }
    return cachedMongo;
  }
  const mongo = await connectToDB();
  console.log("Mongo", mongo)
  return mongo;
};