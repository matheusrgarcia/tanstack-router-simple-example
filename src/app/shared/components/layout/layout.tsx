import { Link, Outlet } from "@tanstack/react-router";

import styles from "./layout.module.scss";

export function RootLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.topbar}>
        <Link to="/" className={styles.brand}>
          TanStack Starter
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
      </header>

      <main className={styles.page}>
        <Outlet />
      </main>
    </div>
  );
}