import Head from 'next/head'
import { useRouter } from 'next/router'

import Navbar from '../components/navbar'
import styles from '../styles/crochet-chart.module.css'

export default function Crochet() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create your own crochet pattern!</title>
      </Head>

      <div className='jumbotron'>
      </div>

      <Navbar active={ router.pathname } />
    </>
  )
}
