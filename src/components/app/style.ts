import styled from "styled-components";

interface AppContainerProps {
  $isDarkMode: boolean;
}

const AppContainer = styled.div<AppContainerProps>`
  height: 100vh;
  background-color: ${(props) => (props.$isDarkMode ? "var(--darkBackGround)" : "var(--lightBackGround)")};
`;

export { AppContainer };
