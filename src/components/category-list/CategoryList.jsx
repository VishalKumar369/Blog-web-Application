import styles from "./categorylist.module.css";
import Image from "next/image";
import Link from "next/link";
import { CategoryListData as CatListData } from "@/utils/data/CategoryListData";

const CategoryList = () => {
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
