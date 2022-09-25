import { MongoClient } from 'mongodb'

const DB_URL = 'mongodb+srv://test:gID52h2HpERyAizf@cluster0.jrdex.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(DB_URL);

async function initDb() {
  try {
    const database = client.db('test');
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