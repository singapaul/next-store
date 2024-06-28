import Image from "next/image";
import { formatToDecimalPlace } from "@/lib/utils";
import styles from "./ProductCard.module.css";
import type { ProductType } from "@/types";

export const ProductCard = ({ product }: { product: ProductType }) => {
  const { category, price, image, rating, title, description } = product;
  const { rate } = rating;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          width={300}
          height={300}
          className={styles.image}
          src={image}
          alt={title}
          fetchPriority="auto"
        />
        <div className={styles.overlay}></div>
        <div className={styles.categoryTag}>{category}</div>
        <div className={styles.dateTag}>
          <span className="font-bold">{formatToDecimalPlace(rate, 1)}</span>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>
          {title}</p>     
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.price}>£{formatToDecimalPlace(price, 2)}</p>
        <button className={styles.button}>View Product</button>
      </div>
    </div>
  );
};
