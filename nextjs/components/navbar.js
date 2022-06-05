import Link from 'next/link'

export default function Navbar() {
  return(
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light my-4'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link href='#' passHref><a className='nav-item nav-link active'>Home</a></Link>
            <Link href='/crochet' passHref><a className='nav-item nav-link'>Crochet pattern editor</a></Link>
            <Link href='/knit' passHref><a className='nav-item nav-link'>Knit pattern editor</a></Link>
            <div className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>Symbols legend</a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link href='/chart/crochet' passHref><a className='dropdown-item'>Crochet</a></Link>
                <Link href='/chart/knit' passHref><a className='dropdown-item'>Knit</a></Link>
              </div>
            </div>
            <Link href='/about' passHref><a className='nav-item nav-link'>About</a></Link>
          </div>
        </div>
      </nav>
    </>
  )
}