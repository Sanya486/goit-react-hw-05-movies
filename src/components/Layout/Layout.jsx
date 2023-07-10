import { NavLink, Outlet } from 'react-router-dom';

import { Container } from 'utils/Container';
import {Divider} from '@mui/material';

export default function Layout() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Divider />
      <Outlet />
    </Container>
  );
}
