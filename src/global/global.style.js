import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --darkBackGround:rgb(153, 153, 102);
        --lightBackGround:rgb(224, 224, 209);
        --darkButtonsColor:rgb(204, 204, 255);
        --lightButtonsColor:rgb(102, 102, 255);
        --darkTitleColor:rgb(255, 255, 153);
        --lightTitleColor:rgb(153, 51, 0);
        --darkCardBackground:rgb(153, 255, 204);
        --lightCardBackground:rgb(51, 153, 51);
    }
`;
export default GlobalStyle;
