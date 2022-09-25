import { useEffect, useRef, useState } from 'react'
import NotificationComponent from '../ui/notification'
import styles from './ContactForm.module.css'

const ContactFormComponent = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    // status can be pending, success, error
    const [requestStatus, setRequestStatus] = useState()

    useEffect(() => {
        if(requestStatus) {
            const timer = setTimeout(() => {
                setRequestStatus(null)
            }, 3000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [requestStatus])

    // On form submit we want to send data to API
    const submitForm = (e) => {
        e.preventDefault()
        setRequestStatus('pending')
        const nameData = nameRef.current.value
        const emailData = emailRef.current.value
        const messageData = messageRef.current.value

        // validate
        // call API
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: nameData,
                email: emailData,
                message: messageData
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setRequestStatus('success')
            return response.data
        }).then(data => console.log(data)).catch(e => {
            setRequestStatus('error')
        })
    }

    let notification
    if(requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message ..',
            message: 'Your message is being submitted'
        }
    } else if(requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Message sent',
            message: 'Your message was submitted'
        }
    } else if(requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error while sending Message',
            message: 'There was an error.'
        }
    }


    return <section className={styles.contact}>
        <h1>How can we help you?</h1>
        <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="email">Your email</label>
                    <input type="email" id='email' required ref={emailRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id='name' required ref={nameRef}/>
                </div>
            </div>
            <div className={styles.control}>
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" cols="30" rows="10" ref={messageRef}></textarea>
            </div>
            <div className={styles.action}>
                <button>Submit</button>
            </div>
        </form>
        {notification && (<NotificationComponent status={notification.status} 
            title={notification.title} 
            message={notification.message} />)}
    </section>
}

export default ContactFormComponent
