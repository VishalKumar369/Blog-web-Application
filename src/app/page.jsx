import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CardList from "@/components/card-list/CardList";
import Menu from "@/components/menu/Menu";
import CategoryList from "@/components/category-list/CategoryList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
