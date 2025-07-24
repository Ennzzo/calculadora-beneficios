import styles from "./footer.module.css";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["logo-footer"]}>
        <Image src="/4.png" alt="Logo" width={300} height={300} />
      </div>
      <div className={styles["social-icons"]}>
        <a target="_blank" href="https://www.instagram.com/abrasel_/?hl=pt" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a target="_blank" href="https://twitter.com/abraselbrasil" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a target="_blank" href="https://www.facebook.com/abraselssp/" rel="noopener noreferrer">
          <FaFacebookF size={20} />
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCT58ptJHV0XCO8JjbFodEpQ" rel="noopener noreferrer">
          <FaYoutube size={20} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/abrasel" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
