import styles from "./about.module.scss";

export function AboutPage() {
  return (
    <section className={styles.panel}>
      <p className={styles.eyebrow}>About</p>
      <h1>What changed</h1>
      <p className={styles.lead}>
        The app now runs on plain Vite, uses TanStack Router for navigation,
        and relies on custom CSS instead of Tailwind utilities.
      </p>
    </section>
  );
}