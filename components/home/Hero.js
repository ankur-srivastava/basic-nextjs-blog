import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
    return <section className={styles.hero}>
        <div className={styles.image}>
            <Image src='/images/site/Ankur.jpg' alt='Shally' width={300} height={300} />
        </div>
        <h1>Hi, I am Ankur</h1>
        <p>I blog about Tech</p>
    </section>
}

export default Hero
