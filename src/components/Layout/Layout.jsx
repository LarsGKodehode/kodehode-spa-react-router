import {
  /**
   * A wrapper around the <a> element for ensuring the href links
   * are generated correctly when linking internally
   * https://reactrouter.com/en/main/components/link
   */
  Link,
  /**
   * Alternative for when you want to give UX feedback
   * about which page you are currently on
   * https://reactrouter.com/en/main/components/nav-link
   */
  NavLink,
  /**
   * This is akin to the props.children that you have been using
   * It is where all the childroute elements will be inserted
   * https://reactrouter.com/en/main/components/outlet
   */
  Outlet,
} from 'react-router-dom'

// CSS Modules really help out here for not having to think to much about CSS Class names
import styles from './styles.module.css'

// We are using this component as a 'static' / layout for our page
function Layout() {
  return (
    <>
      <header className={styles.header}>
        <h3>Links here</h3>
        <nav className={styles.navigation} >
          {/* Use <Link> for inter page linking */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>

          {/* If you are linking to an external page use the normal <a> element */}
          <a href="https://www.github.com" target="_blank" referrerPolicy='no-referrer'>GitHub</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h5>Contact information</h5>
      </footer>
    </>
  )
}

export default Layout