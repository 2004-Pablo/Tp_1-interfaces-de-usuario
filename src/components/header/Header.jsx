import NavigationBar from "../NavigationBar/NavigationBar.jsx"
import styles from './Header.module.css'

function Header() {

  return (
    <header className={styles.headerContainer}>
        <h1 className={styles.tittlePage}>
            <strong>Luna & Granos</strong>
        </h1>
        <NavigationBar />
    </header>
  )

}

export default Header
