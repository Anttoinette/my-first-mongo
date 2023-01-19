//lets connect to mongodb and do some cool stuff

//import our library (just the tools we need)
import { MongoClient } from "mongodb";
//import our credtiials to connect
import { uri } from "./secrets.js"
//connect to our mongo server
const client = new MongoClient(uri);

// create a reference to our dadtbase
const db = client.db("mongo0");

//lets add a document to our collection...

//lets create a piece og furniture
const stool = {
    name: 'Ergo Stool',
    brand: 'Autonomus',
    color: 'Evergreen',
    price: 169.00,
    warranty: '2 years',
}

const chair = {
    name: 'Ergo Chair',
    brand: 'Autonomus',
    color: 'grey',
    price: 369.00,
    warranty: '2 years',
}
async function addOneItem(item) {
    await db.collection("items").insertOne(item);
    console.log("Item was added");

}
addOneItem(stool);
addOneItem(chair);

// db.collection("items").insertOne(stool)
// .then()
// .catch(console.error)