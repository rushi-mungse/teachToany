import React from "react";
import styles from './Button.module.css'
const Button = ({ text, img }) => {
  return (
    <button>
      <span className={styles.text_wrap}>{text}</span>
      {img && <img src={`/images/{img}.png`} alt="button-img" />}
    </button>
  );
};

export default Button;
