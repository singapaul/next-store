import { ReactElement } from "react"; 
import { NewsletterLayout } from "@/components/NewsletterLayout";
import { NextPageWithLayout } from "../_app";
// @todo replace
import styles from '../styles/products.module.css'
const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.main}>
      <p>Newsletter</p>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <NewsletterLayout>
       {page} 
    </NewsletterLayout>
  )
}
 
export default Page