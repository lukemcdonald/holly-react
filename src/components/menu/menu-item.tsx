import { NavLink } from 'react-router-dom'

function MenuItem({ name, to }: { name: string; to: string }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'border-b text-white' : 'text-white hover:border-b'
        }
        to={to}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default MenuItem
