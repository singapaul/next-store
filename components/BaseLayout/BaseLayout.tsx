import styles from "./BaseLayout.module.css";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Search } from "../Search";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.body}>
      <div>
        <Navbar />
        <Search /> 
      </div>
      <div className={styles.main}>{children}</div>
      <Footer />
    </main>
  );
};
 
