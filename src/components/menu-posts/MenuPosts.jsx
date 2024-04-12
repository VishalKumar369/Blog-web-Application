import Link from "next/link";
import Image from "next/image";
import { MenuData } from "@/utils/data/MenuData";
import styles from "./menupost.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      {MenuData.map((data) => (
        <Link href="/" className={styles.item} key={data.id}>
          {withImage && (
            <div className={styles.imgContainer}>
              <Image
                src={data.imgSrc}
                alt=""
                className={styles.image}
                fill
              ></Image>
            </div>
          )}

          <div className={styles.textContainer}>
            <span
              className={styles.category}
              style={{ backgroundColor: `${data.catBgColor}` }}
            >
              {data.catType}
            </span>
            <h3 className={styles.postTitle}>{data.postTitle}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{data.username}</span>
              <span className={styles.date}> - {data.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
