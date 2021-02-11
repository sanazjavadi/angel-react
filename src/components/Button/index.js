import React from "react";

//styles
import Styles from "./Styles/Button.module.scss";

function BaseButton(props) {
  const { children, size, theme, handleClick } = props;
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${Styles[`btn-${size}`]} ${Styles[`${theme}`]}`}
    >
      {children}
    </button>
  );
}

BaseButton.defaultProps = {
  theme: "darkbtn",
  size:'lg'
};

export default BaseButton;
