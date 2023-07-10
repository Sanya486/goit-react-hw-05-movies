import { NavLink, Outlet } from 'react-router-dom';

import { Container } from 'utils/Container';
import { Divider, List, ListItem } from '@mui/material';
import { ListSt, ListItemSt, NavLinkSt } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <nav>
        <ListSt>
          <ListItemSt>
            <NavLinkSt to="/">Home</NavLinkSt>
          </ListItemSt>
          <ListItemSt>
            <NavLinkSt to="/movies">Movies</NavLinkSt>
          </ListItemSt>
        </ListSt>
      </nav>
      <Divider />
      <Outlet />
    </Container>
  );
}
