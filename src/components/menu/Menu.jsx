import styles from "./menu.module.css";
import Link from "next/link";
import { CategoryListData } from "@/utils/data/CategoryListData";
import MenuPosts from "../menu-posts/MenuPosts";
import MenuCategoryList from "../menu-categories-list/MenuCategoryList";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Most Popular */}
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true} />

      {/* Category List */}
      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategoryList/>

      {/* Editor Choice */}
      <h2 className={styles.subTitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImage={false} />
    </div>
  );
};

export default Menu;
