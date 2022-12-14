import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/css/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Page title</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className={styles.main}>
				<h1>Page title</h1>
				<h2>Page subtitle</h2>
				<p>Page content</p>
			</main>

			<Footer />
		</div>
	)
}

