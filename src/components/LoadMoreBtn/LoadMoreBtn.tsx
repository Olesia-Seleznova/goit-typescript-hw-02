import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.div}>
      <button onClick={onClick} className={css.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
