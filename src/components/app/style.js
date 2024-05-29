import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.$isDarkMode ? "var(--darkBackGround)" : "var(--lightBackGround)")};
`;

export { AppContainer };
