import { useRouter } from "next/router";
import styles from "./Sort.module.css"

export const Sort = () => {
  const router = useRouter();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, sort: value },
      });
    } else {
      const { sort, ...rest } = router.query;
      router.push({
        pathname: router.pathname,
        query: rest,
      });
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Sort by ID</label>
      <select className={styles.select} onChange={handleSortChange}>
        <option value="">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};
