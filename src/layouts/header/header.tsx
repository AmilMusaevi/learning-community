import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import styles from "./header.module.scss";

const Header = () => {
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
  return (
    <div className={styles.header}>
      <h2 className={styles.header_title}>Reborn</h2>

      <nav className="nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
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
