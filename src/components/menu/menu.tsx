import { NavLink } from 'react-router-dom'

const MENU_ITEMS = [
  { name: 'Contact', to: '/contact' },
  { name: 'About Us', to: '/about' },
  { name: "FAQ's", to: '/faqs' },
  { name: 'Support', to: '/support' },
]

function Menu({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {MENU_ITEMS.map((link) => (
        <li key={link.name}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'border-b text-white' : 'text-white hover:border-b'
            }
            to={link.to}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Menu
