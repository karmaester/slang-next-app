import styles from "../styles/Button.module.scss"

const Button = ({ text, onClickHandler }: { text: string, onClickHandler?: () => void }) => {
    return <button onClick={onClickHandler} className={styles.button}>{text}</button>;
}

export default Button;