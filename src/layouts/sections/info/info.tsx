import infoImg from "@/assets/images/info-image.png";
import styles from "./info.module.scss";


const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.info_image}>
                <img src={infoImg} alt="Information image" className={styles.info_image_profile} />
            </div>

            <div></div>
        </div>
    )
}

export default Info