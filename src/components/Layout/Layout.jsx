import {  NavLink, Outlet } from 'react-router-dom'

import { Container } from 'utils/Container'

export default function Layout() {
  return (
    <Container>
      <header>
        <nav>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
}
