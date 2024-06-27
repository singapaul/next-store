import Image from "next/image";
import { formatToDecimalPlace } from "@/lib/utils";
import styles from "./ProductCard.module.css";
import type { ProductType } from "@/types";

export const ProductCard = ({ product }: { product: ProductType }) => {
  const { category, price, image, rating, title, description } = product;
  const { count, rate } = rating;
 
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          width={300}
          height={300}
          className={styles.image}
          src={image}
          alt={title}
        />
        <div className={styles.overlay}></div>
        <div className={styles.categoryTag}>{category}</div>
        <div className={styles.dateTag}>
          <span className="font-bold">{formatToDecimalPlace(rate, 1)}</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <a href="#" className={styles.title}>
          {title}
        </a>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <span>{count} Reviews</span>
        <button className={styles.button}>View Product</button>
      </div>
    </div>
  );
};
