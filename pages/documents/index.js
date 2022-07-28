import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from '../../styles/css/Home.module.css'

export default function Documents() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Documents</title>
			</Head>

			<Header />

			<main className={styles.main}>
				<h1>Documents</h1>
				<Link href='/documents/1'>
					<a>Document 1</a>
				</Link>
				<Link href='/documents/2'>
					<a>Document 2</a>
				</Link>
			</main>

			<Footer />
		</div>
	)
}

