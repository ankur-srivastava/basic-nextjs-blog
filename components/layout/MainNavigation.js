import Link from 'next/link'
import LogoComponent from './Logo'
import styles from './MainNavigation.module.css'

const MainNavigationComponent = () => {
    return <header className={styles.header}>
        <Link href='/'>
            <a>
                <LogoComponent />
            </a>
        </Link>
        <ul>
            <li><Link href='/posts'>Posts</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
        </ul>
    </header>
}

export default MainNavigationComponent
