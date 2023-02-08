import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsWrap = styled.div`
  padding: 30px;
`;

export const AboutMovieWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const MovieStatsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VotesPercentage = styled.span`
  font-weight: bold;
`;

export const GoBackLink = styled(Link)`
  padding: 5px;
  margin-bottom: 16px;

  width: 60px;

  text-decoration: none;
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  transition: color, ease-in-out, 250ms;

  &:hover,
  &:focus {
    color: red;
  }
`;

export const MoreDetailsLinkWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const MoreDetailsLink = styled(NavLink)`
  margin-bottom: 16px;

  font-size: 26px;
  text-decoration: none;
  color: black;
  transition: color, ease-in-out, 250ms;

  &:hover,
  &:focus {
    color: red;
  }

  &.active {
    color: red;
  }
`;
