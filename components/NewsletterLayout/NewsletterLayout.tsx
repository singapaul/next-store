import styles from "./NewsletterLayout.module.css";
import { Navbar } from "../Navbar";
import { DeveloperFooter } from "../DeveloperFooter/DeveloperFooter";
import { Search } from "../Search";

export const NewsletterLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className={styles.body}>
      <div></div>
      <div className={styles.main}>{children}</div>
      <DeveloperFooter />
    </main>
  );
};
