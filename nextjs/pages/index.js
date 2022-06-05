import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pattern site</title>
      </Head>

      <div className='jumbotron'>
        <h1 className='display-4'>Yarn work pattern editor</h1>
      </div>

      <Navbar />

      <div className='row'>
        <div className='col'></div>
        <div className='col-8'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text'>Like working with yarn? Same. I put this together to practice some web programming and make a custom tool for one of my hobbies. Maybe you might find it useful as well. :-D</p>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}
