import styles from "./card.module.scss";

type TCard = {
    children:React.ReactNode;
}

const Card:React.FC<TCard> = ({children}) => {
  return (
      <div className={styles.card}>
        {children}
      </div>
  )
}

export default Card