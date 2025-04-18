import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import styles from "./header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { id: "1", label: "Beranda" },
    { id: "2", label: "Profil" },
    { id: "3", label: "Tentang" },
    { id: "4", label: "Pertanyaan" },
  ];
  
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={styles.header}>
      <h2 className={styles.header_title}>Reborn</h2>

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