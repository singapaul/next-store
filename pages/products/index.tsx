import { ReactElement } from "react";
import { BaseLayout } from "@/components/BaseLayout";
import { NextPageWithLayout } from "../_app";
import styles from '../styles/products.module.css'
const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.main}>
      <p>Products</p>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
       {page} 
    </BaseLayout>
  )
}
 
export default Page