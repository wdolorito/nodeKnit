import Navlinks from './navlinks'

export default function Navbar(props) {
  return(
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light my-4'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <Navlinks active={ props.active } />
        </div>
      </nav>
    </>
  )
}