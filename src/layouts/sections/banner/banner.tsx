import bannerImg from "../../../assets/images/banner_image_profile.png";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_info}>
        <div className={styles.tag}>Ayo bertanya</div>
        <h1 className={styles.title}>Jangan Malu Untuk Bertanya</h1>
        <p className={styles.description}>
          Cari jawaban dari pertanyaan yang kamu cari saat ini dengan mudah dan cepat dari seluruh dunia
        </p>
        <div className={styles.buttons}>
          <button className={styles.register_btn}>Daftar</button>
          <button className={styles.login_btn}>Masuk</button>
        </div>
      </div>

      <div className={styles.banner_image}>
        
        <img src={bannerImg} alt="Person thinking" className={styles.banner_image_profile} />
        <div className={styles.bubble_question}>
          <span>?</span>
        </div>
        <div className={styles.bubble_text}>
          <span>mau nanya nih</span>
        </div>
        <div className={styles.bubble_chat}>
          <span>💬</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;