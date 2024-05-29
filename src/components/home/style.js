import styled, { css } from "styled-components";
import heartButton from "../../images/heart.png";
import favoriteButton from "../../images/favorite.png";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const AppsContainer = styled.div`
  width: ${(props) => (props.$horizontal ? "100%" : "fit-content")};
  position: relative;
  overflow: hidden;
  margin: ${(props) => (props.$horizontal ? "0 0 0.5rem 0" : "0.5rem 0 0 0")};
  padding: ${(props) => (props.$horizontal ? "0.5rem 0" : "0 0.5rem")};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$horizontal ? "row" : "column")};
  margin: ${(props) => (props.$horizontal ? "0 auto" : "auto 0")};
  width: 95%;
  height: 90%;
  transition: ${(props) =>
    props.$useTransition ? "transform 0.5s ease" : "none"};
`;
const Card = styled.div`
  flex: 0 0 16.666%;
  margin: ${(props) => (props.$horizontal ? "0 10px" : "10px 0")};
  background-color: ${(props) =>
    props.$isDarkMode
      ? "var(--darkCardBackground)"
      : "var(--lightCardBackground)"};
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-height: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:hover {
    scale: calc(1.05);
    transition: scale 0.25s ease-in-out;
  }
`;
const handleArrowPosition = (props) => {
  const { $horizontal, $isFirst } = props;
  if ($horizontal) {
    if ($isFirst) {
      return css`
        ${"left: 30px;top: 50%;"}
      `;
    } else {
      return css`
        ${"right: 30px;top: 50%;"}
      `;
    }
  } else {
    if ($isFirst) {
      return css`
        ${"top: 15px;right: 75%;"}
      `;
    } else {
      return css`
        ${"top: 15px;right: 25%;"}
      `;
    }
  }
};
const ArrowButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 1);
  color: white;
  border: 1px solid red;
  border-radius: 50%;
  padding: 0.9rem;
  cursor: pointer;
  z-index: 1;
  display: ${(props) => (props.$showArrows ? "block" : "none")};
  ${handleArrowPosition};

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
const CardImage = styled.img`
  width: 50px;
  height: 50px;
  display: block;
`;
const CardTitle = styled.span`
  width: fit-content;
  user-select: none;
`;
const CardFavoriteButton = styled.button`
  width: 24px;
  height: 24px; 
  border: none;
  background: ${(props) =>
      props.$isFavorite ? `url(${favoriteButton})` : `url(${heartButton})`}
    no-repeat center center;
  background-size: cover; 
`;

const LoadingGif = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
`;

export {
  LoadingGif,
  HomeContainer,
  AppsContainer,
  InnerContainer,
  Card,
  CardImage,
  CardTitle,
  CardFavoriteButton,
  ArrowButton,
};
