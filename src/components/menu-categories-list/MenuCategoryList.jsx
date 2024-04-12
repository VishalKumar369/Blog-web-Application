import Link from "next/link";
import { CategoryListData } from "@/utils/data/CategoryListData";
import styles from "./menucategorylist.module.css"

const MenuCategoryList = () => {
  return (
    <div className={styles.categoryList}>
        {CategoryListData.map((data) => (
          <Link
            href="/blog?cat=style"
            className={styles.categoryItem}
            style={{ backgroundColor: `${data.bgColor}` }}
          >
            {data.catName}
          </Link>
        ))}
      </div>
  )
}

export default MenuCategoryList