import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
} & React.ComponentProps<"button">;

function Button({ children, leftIcon, rightIcon, ...rest }: ButtonProps) {
  return (
    <button className={styles.Button} {...rest}>
      {leftIcon && <img src={leftIcon} alt="Button icon" />}
      <p className={styles.buttonText}>{children}</p>
      {rightIcon && <img src={rightIcon} alt="Button icon" />}
    </button>
  );
}

export default Button;
