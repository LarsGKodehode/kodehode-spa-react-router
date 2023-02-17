import { useState } from 'react'
import {
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

import styles from './styles.module.css'

function Layout() {
  const [theme, setTheme] = useState("paletteFirst")

  function changeTheme() {
    setTheme(
      (oldTheme) => {
        if (oldTheme === "paletteFirst") {
          return "paletteSecond"
        } else {
          return ("paletteFirst")
        }
      }
    )
  }

  return (
    <div
      className={theme}
    >
      <header className={styles.header}>
        <button onClick={changeTheme}>Change Theme</button>
        <h3>Links here</h3>
        <nav className={styles.navigation} >
          <DropdownMenu>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
          </DropdownMenu>

          <a href="https://www.github.com" target="_blank" referrerPolicy='no-referrer'>GitHub</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h5>Contact information</h5>
      </footer>
    </div>
  )
}

export default Layout