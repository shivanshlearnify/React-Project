import styles from "./ButtonKey.module.css"

const ButtonKey = ({name, toggle}) => {
  return (
    <button onClick={toggle} className={styles.btn_primary}>{name}</button>
  )
}

export default ButtonKey