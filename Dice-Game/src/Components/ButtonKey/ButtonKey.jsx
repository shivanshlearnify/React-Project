import styles from "./ButtonKey.module.css"

const ButtonKey = ({style, name, toggle}) => {
  return (
    <button onClick={toggle} className={styles.btn_primary} style={style}>{name}</button>
  )
}

export default ButtonKey