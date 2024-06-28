import { ReactElement } from "react";
import { GetServerSideProps } from "next";
import { fetchCategories } from "@/lib/fetchCategories";
import { fetchProducts } from "@/lib/fetchProducts";
import { CategoriesList } from "@/components/CategoriesList";
import { BaseLayout } from "@/components/BaseLayout";
import { Sort } from "@/components/Sort";
import { ProductsGrid } from "@/components/ProductGrid";
import styles from "./products.module.css";
import type { ProductType } from "@/types";

type PageProps = {
  categories: string[];
  products: ProductType[];
};

const Page = ({ categories, products }: PageProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.filterColumn}>
        <h3 className={styles.filterHeading}>Filter</h3>
        <CategoriesList categories={categories} />
        <Sort />
      </div>
      <ProductsGrid products={products} />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { query } = context;

  const categoryId = query.category as string;
  const sort = query.sort as string;

  const categories = await fetchCategories();
  const products = await fetchProducts(categoryId, sort);

  return {
    props: {
      categories,
      products,
    },
  };
};
