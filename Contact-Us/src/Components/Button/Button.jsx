import styles from "./button.module.css";

const Button = ({ icon, name, isOutLine, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutLine ? styles.btn_outline : styles.btn_primary}
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;
