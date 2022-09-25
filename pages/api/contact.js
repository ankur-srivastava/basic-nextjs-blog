// API -> localhost:3000/contact

import { addContact } from "../../helper/db-util"

const handler = async (req, res) => {
    // get the req data
    // push it to DB
    if(req.method === 'POST') {
        const { name, email, message } = req.body
        // validate
        if(!name || !email || !email.includes('@') || name.trim() === '') {
            res.status(422).json({message: 'Invalid Data'})
            return
        }
        const newMessage = {
            name,
            email,
            message
        }
        const contactObj = await addContact(newMessage)

        res.status(201).json({message: contactObj})
    }
}

export default handler
