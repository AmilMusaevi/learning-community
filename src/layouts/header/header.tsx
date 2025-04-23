import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Ana səhifə" },
    { id: "about", label: "Haqqımda" },
    { id: "courses", label: "Kurslar" },
    { id: "students", label: "Tələbələr" },
    { id: "contact", label: "Əlaqə" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <h2 className={styles.header_title}>IELTS</h2>

      <div
        className={styles.menu_toggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
