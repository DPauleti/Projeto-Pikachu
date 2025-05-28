import styles from './PagesHeader.module.css'

export default function PagesHeader({ title }) {
  return (
    <header className={`${styles.pagesHeader}`}>
      <h2 className={`${styles.pagesTitle}`}>{title}</h2>
    </header>
  )
}