import styles from "./featured.module.css";
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, blog readers here!</b> Discover new stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            corrupti perferendis ut vitae quis est necessitatibus, odit
            inventore. Consequuntur quam accusamus tenetur molestiae ea. Ducimus
            eos ut pariatur fugit minima.
          </p>

          <button className={styles.button}> Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
