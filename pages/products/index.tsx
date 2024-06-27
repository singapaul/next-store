import { ReactElement } from "react";
import { BaseLayout } from "@/components/BaseLayout";
import { GetServerSideProps } from "next";
import { fetchCategories } from "@/lib/fetchCategories";
import { fetchProducts } from "@/lib/fetchProducts";
import { CategoriesList } from "@/components/CategoriesList";
import { ProductsGrid } from "@/components/ProductGrid";
import styles from "../styles/products.module.css";
import type { ProductType } from "@/types";



type PageProps = {
  categories: string[];
  products: ProductType[];
};

const Page = ({ categories, products }: PageProps) => {

  return (
    <div className={styles.main}>
      <CategoriesList categories={categories} />
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
