import Head from 'next/head'
import { useRouter } from 'next/router'

import Navbar from '../components/navbar'
import styles from '../styles/knit-chart.module.css'

export default function Knit() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create your own knit pattern!</title>
      </Head>

      <div className='jumbotron'>
      </div>

      <Navbar active={ router.pathname } />
    </>
  )
}
