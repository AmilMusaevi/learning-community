
import Button from "@/components/button/button";
import bannerImg from "../../../assets/images/banner_image_profile.png";
import chatSvg from "@/assets/icons/chat.svg";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_info}>
        <div className={styles.banner_info_wrapper}>
          <div className={styles.tag}>Ayo bertanya</div>
          <h1 className={styles.title}>Jangan Malu Untuk Bertanya</h1>
          <p className={styles.description}>
            Cari jawaban dari pertanyaan yang kamu cari saat ini dengan mudah
            dan cepat dari seluruh dunia
          </p>
          <div className={styles.buttons}>
          <Button text="Daftar" type="secondary"/>
          <Button text="Masuk" className={styles.login_btn} type="primary" />

          </div>
        </div>
      </div>

      <div className={styles.banner_image_wrapper}>
        <div className={styles.banner_image}>
          <img
            src={bannerImg}
            alt="Person thinking"
            className={styles.banner_image_profile}
          />

          <div className={styles.bubble_chat}>
            <div className={styles.bubble_chat_question}>?</div>
            <div className={styles.bubble_chat_text}>
              <span>mau nanya nih</span>
            </div>
          </div>

          <div className={styles.bubble_info}>
            <div className={styles.bubble_info_icon}>
              <img src={chatSvg} alt="Chat icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
