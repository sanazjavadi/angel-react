import React from "react";

//styles
import Styles from "./Styles/Button.module.scss";

function BaseButton(props) {
  const { children, size, theme, handleclick, type, disabled } = props;
  return (
    <button
    tabIndex={-1}
      {...props}
      disabled={disabled}
      type={type}
      onClick={handleclick}
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
