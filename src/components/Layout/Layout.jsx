import { Outlet } from 'react-router-dom';

import { Container } from 'utils/Container';
import { Divider} from '@mui/material';
import { ListSt, ListItemSt, NavLinkSt } from './Layout.styled';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

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
      <Suspense fallback={<LinearProgress/>}> 
      <Outlet />
      </Suspense>
    </Container>
  );
}
