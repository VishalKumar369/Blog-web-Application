import styles from "./comments.module.css";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";

  const commentsData = [
    {
      id: 1,
      srcImg: "/p1.jpeg",
      username: "John Doe",
      date: "10.04.2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque, rerum, delectus autem, at temporibus commodi magni quod eligendi molestiae ipsa nobis culpa impedit atque blanditiis praesentium non voluptatibus quo.",
    },
    {
      id: 2,
      srcImg: "/p1.jpeg",
      username: "John Doe",
      date: "10.04.2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque, rerum, delectus autem, at temporibus commodi magni quod eligendi molestiae ipsa nobis culpa impedit atque blanditiis praesentium non voluptatibus quo.",
    },
    {
      id: 3,
      srcImg: "/p1.jpeg",
      username: "John Doe",
      date: "10.04.2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque, rerum, delectus autem, at temporibus commodi magni quod eligendi molestiae ipsa nobis culpa impedit atque blanditiis praesentium non voluptatibus quo.",
    },
    {
      id: 4,
      srcImg: "/p1.jpeg",
      username: "John Doe",
      date: "10.04.2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque, rerum, delectus autem, at temporibus commodi magni quod eligendi molestiae ipsa nobis culpa impedit atque blanditiis praesentium non voluptatibus quo.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}

      <div className={styles.comments}>
        {commentsData.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            <div className={styles.user}>
              <Image
                src={comment.srcImg}
                width={50}
                height={50}
                alt=""
                className={styles.image}
              />
              <div className={styles.userInfo}>
                <span className={styles.username}>{comment.username}</span>
                <span className={styles.date}>{comment.date}</span>
              </div>
            </div>
            <div className={styles.desc}>
              <p>{comment.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
