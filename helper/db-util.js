import { MongoClient } from 'mongodb'

const DB_USERNAME = process.env.mongodb_username
const DB_PASSWORD = process.env.mongodb_password
const DB_NAME = process.env.mongodb_db

const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.jrdex.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(DB_URL);

async function initDb() {
  try {
    const database = client.db(DB_NAME);
    return database.collection('contacts');
  } catch(e) {
    console.log('Error occured ', e)
  }
}

export async function addContact(newContact) {
    const contacts = await initDb()
    if(contacts) {
        const contact = await contacts.insertOne(newContact)
        client.close()
        console.log('New contact created ', JSON.stringify(contact))
        return contact
    }
    return null
}