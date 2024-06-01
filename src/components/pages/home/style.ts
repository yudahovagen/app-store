import styled, { css } from "styled-components";
import heartButton from "../../../images/heart.png";
import favoriteButton from "../../../images/favorite.png";
import { CarouselAlignment } from "../../../types/types";

interface HomeContainerProps {
  $isDarkMode: boolean;
}

interface AppsContainerProps {
  $horizontal: CarouselAlignment;
}

interface InnerContainerProps {
  $horizontal: CarouselAlignment;
  $useTransition?: boolean;
}

interface CardProps {
  $isDarkMode: boolean;
  $horizontal: CarouselAlignment;
}

interface ArrowButtonProps {
  $horizontal: CarouselAlignment;
  $isFirst?: boolean;
  $showArrows?: boolean;
}

interface ErrorMessageContainerProps {
  $isDarkMode: boolean;
}

const HomeContainer = styled.div<HomeContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AppsContainer = styled.div<AppsContainerProps>`
  width: ${(props) => (props.$horizontal ? "100%" : "fit-content")};
  position: relative;
  overflow: hidden;
  margin: ${(props) => (props.$horizontal ? "0 0 0.5rem 0" : "0.5rem 0 0 0")};
  padding: ${(props) => (props.$horizontal ? "0.5rem 0" : "0 0.5rem")};
`;

const InnerContainer = styled.div<InnerContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.$horizontal ? "row" : "column")};
  margin: ${(props) => (props.$horizontal ? "0 auto" : "auto 0")};
  width: 95%;
  height: 90%;
  transition: ${(props) =>
    props.$useTransition ? "transform 0.5s ease" : "none"};
`;

const Card = styled.div<CardProps>`
  flex: 0 0 16.666%;
  margin: ${(props) => (props.$horizontal ? "0 10px" : "10px 0")};
  background-color: ${(props) =>
    props.$isDarkMode
      ? "var(--darkCardBackground)"
      : "var(--lightCardBackground)"};
  border: 1px solid #ccc;
  color:${(props) =>
    props.$isDarkMode
      ? "var(--darkTitleColor)"
      : "var(--lightTitleColor)"};
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
    cursor: pointer;
    transition: scale 0.25s ease-in-out;
  }
`;

const handleArrowPosition = (props: ArrowButtonProps) => {
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

const ArrowButton = styled.button<ArrowButtonProps>`
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

interface CardFavoriteButtonProps {
  $isFavorite: boolean;
}

const CardFavoriteButton = styled.button<CardFavoriteButtonProps>`
  width: 24px;
  height: 24px;
  border: none;
  background: ${(props) =>
      props.$isFavorite ? `url(${favoriteButton})` : `url(${heartButton})`}
    no-repeat center center;
  background-size: cover;
`;

const LoadingGif = styled.img`
  width: 150px;
  height: 150px;
`;

const ErrorMessageContainer = styled.h1<ErrorMessageContainerProps>`
  color: ${(props) =>
    props.$isDarkMode ? "var(--darkTitleColor)" : "var(--lightTitleColor)"};
`;

export {
  ErrorMessageContainer,
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
