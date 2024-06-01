import { Link } from "react-router-dom";
import styled from "styled-components";

interface DarkModeProps {
  $isDarkMode: boolean;
}
const FavoritesContainer = styled.div<DarkModeProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-content: center;
`;
const StyledLink = styled(Link)<DarkModeProps>`
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.$isDarkMode ? "var(--darkButtonsColor)" : "var(--lightButtonsColor)"};
  color: ${(props) =>
    props.$isDarkMode ? "var(--darkTitleColor)" : "var(--lightTitleColor)"};
  border-radius: 1rem;
  margin: 5px;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;
const ItemContainer = styled.div<DarkModeProps>`
  width: fit-content;
  max-width: 150px;
  aspect-ratio: 1;
  color: ${(props) =>
    props.$isDarkMode ? "var(--darkTitleColor)" : "var(--lightTitleColor)"};
  background-color: ${(props) =>
    props.$isDarkMode
      ? "var(--darkCardBackground)"
      : "var(--lightCardBackground)"};
  border-radius: 5px;
  border: solid 1px white;
  padding: 0.5rem;
  margin: 0.5rem;
  &:hover {
    scale: 1.1;
    cursor: pointer;
    transition: scale 0.25s ease-in-out;
  }
`;
const FavoritesTitle = styled.h1<DarkModeProps>`
  margin: 0 auto;
  color: ${(props) =>
    props.$isDarkMode ? "var(--darkTitleColor)" : "var(--lightTitleColor)"};
`;
const ItemData = styled.span`
  display: inline-block;
`;
const ItemsOuter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const ItemImage = styled.img`
  width: 50px;

  height: 50px;
  display: block;
`;

export {
  FavoritesContainer,
  StyledLink,
  ItemContainer,
  ItemData,
  ItemImage,
  FavoritesTitle,
  ItemsOuter,
};
