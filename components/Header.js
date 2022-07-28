import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/css/Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<Image src='/images/logo.svg' className={styles.logo} height={60} width={60} alt='Logo' />
			<nav className={styles.navigation}>
				<Link href='/'>
					<a className={styles.navigationLink} title='Home'>
						Home
					</a>
				</Link>

				<Link href='/documents'>
					<a className={styles.navigationLink} title='Documents'>
						Documents
					</a>
				</Link>
				<Link href='/about'>
					<a className={styles.navigationLink} title='About'>
						About
					</a>
				</Link>
			</nav>
		</header>
	)
}

