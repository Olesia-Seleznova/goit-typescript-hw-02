import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.div}>
      <ThreeCircles
        visible={true}
        height="80"
        width="80"
        color="#6e2d75"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className={css.p}>Please, wait... Images are loading...</p>
    </div>
  );
};

export default Loader;
