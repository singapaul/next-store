import { ReactElement } from "react";
import { BaseLayout } from "@/components/BaseLayout";
import { NextPageWithLayout } from "./_app";
import styles from './home.module.css'

const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.main}>
      <p>Home</p>
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