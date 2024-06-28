import Link from "next/link";
import styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/newsletter">Newsletter</Link>
      </li>
    </ul>
  );
}
Navbar.displayName = 'Navbar';  