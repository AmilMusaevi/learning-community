import { FaWhatsapp } from "react-icons/fa6";
import Button from "@/components/button/button";
import ellipseBig from "@/assets/icons/orbit.svg";
import ellipseSmall from "@/assets/icons/ellipseSmall.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  const phoneNumber = "+99477555555";


  return (
    <footer className={styles.footer}>
      <div className={styles.footer_circles}>
        <div className={styles.ellipse_big}>
          <img src={ellipseBig} alt="ellipse" />
        </div>
        <div className={styles.footer_ellipse}>
          <div className={styles.footer_ellipse_text}>
            <h2>Sualınız var ?</h2>
            <div></div>
            <Button
              type="secondary"
              style={{ minWidth: "200px" }}
            >
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
                aria-label="Contact us on WhatsApp"
              >
                <span>{phoneNumber}</span>
                <FaWhatsapp className={styles.whatsappIcon} />
              </a>
            </Button>
          </div>
        </div>
        <div className={styles.ellipse_small}>
          <img src={ellipseSmall} alt="ellipse" />
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <h2 className={styles.footer_bottom_title}>Reborn</h2>

        <div className={styles.footer_bottom_nav}>
          <nav className={styles.footer_bottom_nav_items}>
            <a href="#kategori">Kategori</a>
            <a href="#tentang">Tentang</a>
            <a href="#pertanyaan">Pertanyaan</a>
          </nav>

          <p>©2021 Brainly Reborn. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
