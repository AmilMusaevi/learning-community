import styles from "./faq.module.scss";
import FaqPng from "@/assets/images/faq.png";
import Button from "@/components/button/button";

export const Faq = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.faq_tentag}>
        <div className={styles.faq_tentag_wrapper}>
          <h3 className={styles.faq_tentag_subtitle}>Tentang</h3>
          <h2 className={styles.faq_tentag_title}>
            Membantu Pertanyaan Orang Lain
          </h2>
          <p className={styles.faq_tentag_description}>
            Mengenai semua hal pertanyaan yang mereka cari saat ini sehingga
            menemukan jawabannya
          </p>
          <div className={styles.faq_tentag_buttons}>
            <Button>Tanya sekarang</Button>
          </div>
        </div>
      </div>
      <div className={styles.faq_reborn}>
        <div className={styles.faq_reborn_wrapper}>
          <div className={styles.faq_reborn_image}>
            <img src={FaqPng} alt="faq image" />
          </div>
        </div>
        <div className={styles.faq_reborn_tag}>Brainly Reborn</div>
      </div>
    </div>
  );
};
