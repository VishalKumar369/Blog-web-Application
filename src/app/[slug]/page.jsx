import Menu from "@/components/menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
            <h1 className={styles.title}> Lorem ipsum dolor sit amet. Lorem, ipsum.</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="user" fill className={styles.avatar} />
                </div>
                <div className={styles.userTextContainer}>
                <span className={styles.username}>Jon Doe</span>
                <span className={styles.date}>10.04.2024</span>
                </div>
            </div>
            </div>
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="user" fill className={styles.image} />
            </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.desc}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi repudiandae ipsam quasi! Veniam necessitatibus doloribus maxime nulla voluptatem enim adipisci quia error iure assumenda est perspiciatis tenetur itaque consectetur architecto incidunt, omnis officiis aliquam consequuntur?</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi repudiandae ipsam quasi! Veniam necessitatibus doloribus maxime nulla voluptatem enim adipisci quia error iure assumenda est perspiciatis tenetur itaque consectetur architecto incidunt, omnis officiis aliquam consequuntur?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi repudiandae ipsam quasi! Veniam necessitatibus doloribus maxime nulla voluptatem enim adipisci quia error iure assumenda est perspiciatis tenetur itaque consectetur architecto incidunt, omnis officiis aliquam consequuntur?</p>
            </div>
            <div className={styles.comment}>
              <Comments/>
            </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
