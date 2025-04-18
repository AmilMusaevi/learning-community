import styles from "./layout.module.scss"

export const Layout: React.FC<React.PropsWithChildren> = (props) => (
    <div className={styles.container} {...props} />
)
