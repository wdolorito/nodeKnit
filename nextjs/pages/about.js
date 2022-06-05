import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className='jumbotron'>
        <h1 className='display-4'>About me</h1>
      </div>

      <Navbar />

      <div className='row mb-5'>
        <div className='col'></div>
        <div className='col-9'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='card-title'>Site junk</h1>
              <p className='card-text'>This site was built using <Link href='https://nodejs.org/en/' passHref><a target='_blank'>Node.js.</a></Link></p>
              <p className='card-text'>Styling components are Twitter's <Link href='https://getbootstrap.com' passHref><a target='_blank'>Bootstrap</a></Link> if y'all hadn't guessed. ;) With the default theme no less because I have no imagination, hah</p>
              <p className='card-text'>It's naive and simple incorporating the <Link href='https://nextjs.org/' passHref><a target='_blank'>NextJS</a></Link> framework and can conceivably run on pretty much anything.</p>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>

      <div className='row mb-5'>
        <div className='col'></div>
        <div className='col-9'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='card-title'>Me</h1>
              <p className='card-text'>There's not much to say about myself other than I willingly identify as any pejorative you would have to describe someone who knows a little too much about nothing.</p>
              <p className='card-text'>I'm in to lots of clich&eacute; tech things. I'm a filthy casual that likes watching (a little too much) other people way more skilled at button mashing than myself on <Link href='https://www.twitch.tv' passHref><a target='_blank'>Twitch.</a></Link></p>
              <h3 className='card-text'>I'm also a really big fan of yarn work!!</h3>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}
