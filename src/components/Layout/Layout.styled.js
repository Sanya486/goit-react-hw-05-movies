import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';

export const ListSt = styled(List)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  & .active {
    color: #fff;
    background-color: #1976d2;
  }
`;

export const ListItemSt = styled(ListItem)`
  padding: 0;
`;

export const NavLinkSt = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  appearance: button;
  backface-visibility: hidden;
  background-color: #fff;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #1976d2;
  cursor: pointer;
  font-size: 20px;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;
