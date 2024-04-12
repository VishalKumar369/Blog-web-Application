import AuthLinks from "../auth-link/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link"
import { SocialData } from "@/utils/data/SocialData";

const Navbar = () => {


  return (
    <div className={styles.container}>
      <div className={styles.social}>
        {SocialData.map((data) => (
          <Image
            src={data.imgSrc}
            alt={data.altName}
            width={24}
            height={24}
            key={data.id}
          />

        ))}
      </div>
      <div className={styles.logo}>TerraScript</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link} >HomePage</Link>
        <Link href="/" className={styles.link} >About</Link>
        <Link href="/" className={styles.link} >Contact</Link>
        <AuthLinks/>
      </div>
    </div>
  );
};

export default Navbar;
