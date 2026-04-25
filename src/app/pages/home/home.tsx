import { Link } from "@tanstack/react-router";

import styles from "./home.module.scss";

export function HomePage() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>TanStack Router</p>
      <h1>Fast routing with a lighter setup.</h1>
      <p className={styles.lead}>
        This starter removes Tailwind and React Router, then replaces them with
        a small Vite app powered by TanStack Router.
      </p>

      <div className={styles.actions}>
        <Link to="/about" className={styles.button}>
          Learn more
        </Link>
        <a
          className={`${styles.button} ${styles.buttonGhost}`}
          href="https://tanstack.com/router/latest"
          target="_blank"
          rel="noreferrer"
        >
          TanStack docs
        </a>
      </div>
    </section>
  );
}