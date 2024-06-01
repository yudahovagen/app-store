import React from "react";
import gif from "../../../../../images/Swing.gif";
import { LoadingGif } from "../../style";

const Loading: React.FC = () => {
  return <LoadingGif src={gif} alt={"Loading..."} />;
};

export default Loading;
