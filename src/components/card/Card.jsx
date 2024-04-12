import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            className={styles.image}
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>12.04.2024 -</span>
            <span className={styles.category}>culture</span>
          </div>

          <Link href="/">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </Link>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            ratione atque, quae consectetur dicta cum voluptatibus a expedita
          </p>
          <Link href="/" className={styles.link}>
            {" "}
            Read More
          </Link>
        </div>
    </div>
  );
};

export default Card;
