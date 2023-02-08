import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 30px;
  color: #000000;
  text-decoration: none;
  transition: color, ease-in-out, 250ms;

  &:hover,
  &:focus {
    color: red;
  }

  &.active {
    color: red;
  }
`;
