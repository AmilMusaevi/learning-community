import React from "react";
import styles from "./button.module.scss";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  type?: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  onClick,
  style,
  className = "",
  children,
  text,
  ...rest
}) => {
  const typeClass = type === "primary" ? styles.login_btn : styles.register_btn;

  return (
    <button
      className={`${styles.button} ${typeClass} ${className}`}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {children || text}
    </button>
  );
};

export default Button;
