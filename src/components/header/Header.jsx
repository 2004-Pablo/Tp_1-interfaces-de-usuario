import { Link } from "react-router-dom"
import NavigationBar from "../NavigationBar/NavigationBar.jsx"
import styles from "./Header.module.css"
import Logo from "../Logo/Logo.jsx"

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <NavigationBar />
    </header>
  )
}

export default Header
