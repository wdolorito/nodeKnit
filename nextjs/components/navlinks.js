import Link from 'next/link'

export default function Navlinks(props) {
  const active = props.active
  let home = '',
      crochet = '',
      knit = '',
      chart = '',
      about = ''
  
  if (active === '/') home = 'active'
  if (active === '/crochet') crochet = 'active'
  if (active === '/knit') knit = 'active'
  if (active === '/chart/crochet' || active === '/chart/knit') chart = 'active'
  if (active === '/about') about = 'active'

  return(
    <div className='navbar-nav'>
      <Link href='/' passHref><a className={ 'nav-item nav-link ' + home } >Home</a></Link>
      <Link href='/crochet' passHref><a className={ 'nav-item nav-link ' + crochet } >Crochet pattern editor</a></Link>
      <Link href='/knit' passHref><a className={ 'nav-item nav-link ' + knit }>Knit pattern editor</a></Link>
      <div className={'nav-item dropdown ' + chart }>
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
      <Link href='/about' passHref><a className={ 'nav-item nav-link ' + about }>About</a></Link>
  </div>
  )
}