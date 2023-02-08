import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 30px;
  padding: 30px;
`;

export const MoviesNavListItem = styled.li`
  list-style: none;
  width: 320px;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: transform, ease-in-out, 250ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const MoviesNavLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
`;

export const TitleName = styled.p`
  padding-left: 10px;
  height: 50px;
  font-size: 20px;
  transition: color, ease-in-out, 250ms;
`;

export const TitlePoster = styled.img`
  display: block;
  width: 100%;
  height: 480px;
`;
