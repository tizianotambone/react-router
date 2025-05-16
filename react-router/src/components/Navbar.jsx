import { NavLink } from 'react-router-dom'

function Navbar() {
  const links = [
    {
      path: '/',
      label: 'Homepage'
    },
    {
      path: '/about',
      label: 'About'
    },
    {
      path: '/product',
      label: 'Prodotti'
    }
  ]

  return (
    <header>
      <nav className=' nav'>
        <ul className="list-unstyled d-flex gap-3 m-3 fw">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'fw-bold text-primary' : 'text-dark'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
