import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --darkBackGround:#001a00;
        --lightBackGround:rgb(224, 224, 209);
        --darkButtonsColor:rgb(204, 204, 255);
        --lightButtonsColor:rgb(102, 102, 255);
        --darkTitleColor:#e6ffe6;
        --lightTitleColor:#182c38;
        --darkCardBackground:#182c38;
        --lightCardBackground:#5da9d8;
    }
`;
export default GlobalStyle;
