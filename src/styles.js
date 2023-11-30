// styles.js
import styled, { css } from "styled-components";

// Header Styles
export const Nav = styled.nav`
  height: 10vh;
  background-color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
`;

// MovieList Styles
export const MovieListSection = styled.div`
  margin: 2rem 0;
`;

export const MovieHeading = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 2rem 0;
`;

export const MovieListItem = styled.li`
  width: 100%;
  border: 1px solid black;
  padding: 0.5rem;
`;

export const MovieTitle = styled.h3`
  width: 15rem;
  margin: auto;
`;

// Footer Styles
export const FooterContainer = styled.footer`
  height: 10vh;
  background-color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

// MovieDetails Styles
export const MovieDetailsContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
`;

export const LeftColumn = styled.div`
  width: 30%;
  background-color: #f0f0f0;
`;

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  gap: 2rem;
  margin: 0 2rem;
  font-size: 1.4rem;
`;

export const MovieTitleDetails = styled.p`
  span {
    font-weight: bold;
    margin-right: 1rem;
  }
`;

export const MovieDetailsDescription = styled.p`
  span {
    font-weight: bold;
    margin-right: 1rem;
  }
`;

export const MovieDetailsButton = styled.button`
  background-color: red;
  color: white;
  padding: 1rem;
  width: fit-content;
  border: none;
  font-size: 1.4rem;
  border-radius: 1rem;
`;
export const MoviePoster = styled.img`
  height: 30rem;
`;

const tablet = (...args) => css`
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    ${css(...args)};
  }
`;

const mobile = (...args) => css`
  @media only screen and (max-width: 768px) {
    ${css(...args)};
  }
`;

export const MovieListGrid = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  list-style-type: none;

  ${tablet`
    grid-template-columns: auto auto;
  `}

  ${mobile`
    grid-template-columns: auto;
  `}
`;
