import React from "react";

//styles
import Styles from "./Styles/Input.module.scss";


function Index(props) {
    const {
        type,
        value,
        placeholder,
        size,
        align,
        handleChange,
        handleIcon,
        error,
        icon,
        handleBlur
      }  = props
  return (
    <div className={Styles["wrapper-input"]}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
        className={
          size
            ? `${Styles[`form-control-${size}`]}`
            : `${Styles["form-control"]}`
        }
        dir={align ? "ltr" : "rtl"}
        onChange={(e) => handleChange(e)}
        onBlur={(e)=> handleBlur(e)}
      />
      {icon && (
        <span onClick={() => handleIcon()}>
        </span>
      )}
      {error && <small className={`text-right w-100 d-block mt-1 mr-1 ${Styles.error}`}>{error}</small>}
    </div>
  );
}

export default Index;
