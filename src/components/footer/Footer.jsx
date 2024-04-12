import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { SocialData } from "@/utils/data/SocialData";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="TerraScript Blog"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>terraScipt</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ab
          quia vero doloribus rerum architecto inventore quibusdam ratione saepe
          cupiditate.
        </p>

        <div className={styles.icons}>
          {SocialData.map((data) => (
            <Image
              src={data.imgSrc}
              alt={data.altName}
              width={18}
              height={18}
              key={data.id}
            />
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.lists}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">HomePage</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.lists}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashions</Link>
          <Link href="/">Culture</Link>
          <Link href="/">Coding</Link>
        </div>
        <div className={styles.lists}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">You tube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
