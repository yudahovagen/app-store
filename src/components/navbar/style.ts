import styled from "styled-components";
import darkImage from "../../images/dark.png";
import lightImage from "../../images/light.png";

interface DarkModeProps {
  $isDarkMode: boolean;
}

const NavContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavTitle = styled.h1<DarkModeProps>`
  user-select: none;
  color: ${(props) =>
    props.$isDarkMode ? "var(--darkTitleColor)" : "var(--lightTitleColor)"};
`;

const NavItemsContainer = styled.nav``;

const NavButtons = styled.button<DarkModeProps>`
  text-decoration: none;
  font-size: 20px;
  padding: 5px 10px;
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

const DarkButton = styled.img.attrs<DarkModeProps>(({ $isDarkMode }) => ({
  src: $isDarkMode ? darkImage : lightImage,
}))<DarkModeProps>`
  width: 40px;
  aspect-ratio: 2/1;
`;

export { NavContainer, NavTitle, NavItemsContainer, NavButtons, DarkButton };
