import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/css/Home.module.css'

export default function About() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About page</title>
			</Head>

			<Header />

			<main className={styles.main}>
				<h1>About</h1>
				<h2>Page subtitle</h2>
				<p>Page content</p>
			</main>

			<Footer />
		</div>
	)
}

