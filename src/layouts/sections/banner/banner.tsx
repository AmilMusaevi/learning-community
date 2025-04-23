import Button from "@/components/button/button";
import bannerImg from "../../../assets/images/banner_image_profile.png";
import chatSvg from "@/assets/icons/chat.svg";
import askSvg from "@/assets/icons/question.svg";
import styles from "./banner.module.scss";
import { FaWhatsapp } from "react-icons/fa6";

const Banner = () => {
  const phoneNumber = "0516787628";
  return (
    <div className={styles.banner}>
      <div className={styles.banner_info}>
        <div className={styles.banner_info_wrapper}>
          <div className={styles.tag}>Akademik İngilis dili</div>
          <h1 className={styles.title}>İngilis dilini peşəkarından öyrənin</h1>
          <p className={styles.description}>
            Effektiv və fərdi yanaşma ilə akademik ingilis dilini mənimsəyin
          </p>
          <div className={styles.buttons}>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
              aria-label="Contact us on WhatsApp"
            >
              <Button
                type="secondary"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  padding: "4px",
                }}
              >
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h3>Ödənişsiz sınaq</h3>

                <FaWhatsapp className={styles.whatsappIcon} />
              </Button>
            </a>
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
            <div className={styles.bubble_chat_question}>
              <img src={askSvg} alt="ask icon" />
            </div>
            <div className={styles.bubble_chat_text}>
              <span>Görəsən bacaracam?</span>
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
