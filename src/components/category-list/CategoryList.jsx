import styles from "./categorylist.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  const CatListData = [
    {
      id: 1,
      srcImg: "/style.png",
      catName: "Style",
      CatLink: "",
      bgColor: "#57c4ff31",
    },
    {
      id: 2,
      srcImg: "/fashion.png",
      catName: "Fashion",
      CatLink: "",
      bgColor: "#da85c731",
    },
    {
      id: 3,
      srcImg: "/food.png",
      catName: "Food",
      CatLink: "",
      bgColor: "#7fb88133",
    },
    {
      id: 4,
      srcImg: "/travel.png",
      catName: "Travel",
      CatLink: "",
      bgColor: "#ff795736",
    },
    {
      id: 5,
      srcImg: "/culture.png",
      catName: "Culture",
      CatLink: "",
      bgColor: "#ffb04f45",
    },
    {
      id: 6,
      srcImg: "/coding.png",
      catName: "Coding",
      CatLink: "",
      bgColor: "#5e4fff31",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {CatListData.map((data) => (
          <Link
            href="/blog?cat=style"
            className={styles.category}
            style={{backgroundColor:`${data.bgColor}`}}
            key={data.id}
          >
            <Image
              src={data.srcImg}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {data.catName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
