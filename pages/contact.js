import Head from "next/head"
import { Fragment } from "react"
import ContactFormComponent from "../components/contact/ContactForm"

const ContactComponent = () => {
    return <Fragment>
        <Head>
            <title>Contact</title>
            <meta name='description' content='Contact Us'/>
        </Head>
        <ContactFormComponent />
    </Fragment>
}

export default ContactComponent
