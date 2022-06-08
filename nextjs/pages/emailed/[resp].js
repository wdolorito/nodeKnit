import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Navbar from '../../components/navbar'

export default function Emailed() {
  const router = useRouter()
  const { resp } = router.query
  const [ pageTitle, setPageTitle ] = useState('Error')
  const [ title, setTitle ] = useState('Email failed :(')
  const [ message, setMessage ] = useState('There was a problem sending your email.  Please try again')

  useEffect(() => {
    console.log(resp)
    if(resp === 'true') {
      setPageTitle('Thanks!')
      setTitle('Email sent!')
      setMessage("Thanks for the company! I'll get back to you as soon as I can.")
    }
  }, [resp])

  return (
    <>
      <Head>
        <title>{ pageTitle  }</title>
      </Head>

      <div className='jumbotron'>
        <h1 className='display-4'>Processing Email</h1>
      </div>

      <Navbar active={ router.pathname } />

      <div className='row'>
        <div className='col'></div>
        <div className='col-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{ title }</h5>
              <p className='card-text'>{ message }</p>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}
