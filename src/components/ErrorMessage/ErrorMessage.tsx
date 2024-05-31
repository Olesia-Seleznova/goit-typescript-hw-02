import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.p}>Oops...Something went wrong...Reload the page! </p>
  );
};

export default ErrorMessage;
