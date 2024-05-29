import styled from "styled-components";

const NavContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NavTitle = styled.h1`
  user-select: none;
  color: ${(props) =>
    props.$isDarkMode ? "var(--darkTitleColor)" : "var(--lightTitleColor)"};
`;
const NavItemsContainer = styled.nav``;
const NavButtons = styled.button`
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

export { NavContainer, NavTitle, NavItemsContainer, NavButtons };
