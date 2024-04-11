import AuthLinks from "../auth-link/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  const SocialData = [
    {
      id: 1,
      imgSrc: "/facebook.png",
      altName: "facebook",
    },
    {
      id: 2,
      imgSrc: "/instagram.png",
      altName: "instagram",
    },
    {
      id: 3,
      imgSrc: "/youtube.png",
      altName: "youtube",
    },
  ];

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
