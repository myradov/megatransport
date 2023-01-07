import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="relative w-full h-auto mx-auto">
      <Head>
        <title>MegaTrans</title>
        <meta name="description" content="Mega transportation company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-full h-auto">
        <section className='w-full h-screen'>
          <Image src='/cargoship.jpg' alt='Image of a cargo ship' fill objectFit="cover" className='border border-red-500'/>
          <div className='absolute bottom-0 left-0 w-1/3 h-64 z-10 bg-white flex-col p-3'>
            <p className='text-xl font-medium text-black'>Corporate customers may create and manage agreements, review spending and subscribe to the latest products and services</p>
            <Link href='/hello' className='bg-blue-500'>
              Learn more
            </Link>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
