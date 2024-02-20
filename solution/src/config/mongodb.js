import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://rahulverma9559:2JEc0XwXpgfEU8TE@cluster0.7sa8r47.mongodb.net/?retryWrites=true&w=majority";

let client;
export const connectToMongoDB = () => {
  MongoClient.connect(url)
    .then((clientInstance) => {
      client = clientInstance;
      console.log("Mongodb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDB = () => {
  return client.db("ExpenZap");
};
