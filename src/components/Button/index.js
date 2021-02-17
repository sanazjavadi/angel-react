import React from "react";

//styles
import Styles from "./Styles/Button.module.scss";

function BaseButton(props) {
  const { children, size, theme, handleClick, type, disabled } = props;
  return (
    <button
      {...props}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={`${Styles[`btn-${size}`]} ${Styles[`${theme}`]}`}
    >
      {children}
    </button>
  );
}

BaseButton.defaultProps = {
  theme: "darkbtn",
  size:'lg',
  type:'button'
};

export default BaseButton;
