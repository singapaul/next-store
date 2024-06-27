import Link from "next/link";
import styles from "./CategoriesList.module.css";

export const CategoriesList = ({
  categories,
}: {
  categories: string[];
}) => {
  if (!categories || categories.length === 0) {
    return <>Nothing found</>;
  }

  return (
    <aside className={styles.aside}>
      <h2 className={styles.heading}>Categories</h2>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href={{ pathname: "/products" }} passHref>
            All
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={{ pathname: "/products", query: `category=${category}` }}
              passHref
              className={styles.link}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
