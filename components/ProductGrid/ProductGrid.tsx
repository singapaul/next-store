import { ProductCard } from "../ProductCard";
import styles from "./ProductGrid.module.css";
import type { ProductType } from "@/types";
export const ProductsGrid = ({ products }: { products: ProductType[] }) => {
  if (!products || products.length === 0) {
    return <>No products found.</>;
  }
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
