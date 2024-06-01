import React from "react";
import { ErrorMessageContainer } from "../../style";

interface ErrorProps {
  isDarkMode: boolean;
}

const Error: React.FC<ErrorProps> = ({ isDarkMode }) => {
  return (
    <ErrorMessageContainer $isDarkMode={isDarkMode}>
      An error occurred while loading the data. Please refresh the page and try
      again.
    </ErrorMessageContainer>
  );
};

export default Error;
