import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from '../../styles/css/Home.module.css'

export default function Doc({ doc }) {
	const router = useRouter()
	const { id } = router.query

	return (
		<div className={styles.container}>
			<Head>
				<title>{doc.title}</title>
			</Head>

			<Header />

			<main className={styles.main} data-document-id={id}>
				<h1>{doc.title}</h1>
				<Link href='/documents/'>
					<a>Back to documents</a>
				</Link>
				<p>{doc.body}</p>
			</main>

			<Footer />
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const req = await fetch(`http://localhost:3000/${params.id}.json`)
	const data = await req.json()

	return {
		props: { doc: data },
	}
}

// export async function getStaticProps({ params }) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { doc: data },
//     }
// }

// export async function getStaticPaths() {

//     const req = await fetch('http://localhost:3000/docs.json');
//     const data = await req.json();

//     const paths = data.map(doc => {
//         return { params: { id: doc } }
//     })

//     return {
//         paths,
//         fallback: false
//     };

// }

