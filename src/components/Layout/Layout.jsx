import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from 'components/utils/Container'

export default function Layout() {
  return (
    <Container>
      <header>
        <ul>
          <li>Home</li>
          <li>Movies</li>
        </ul>
          </header>
          <Outlet/>
    </Container>
  );
}
