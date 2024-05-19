import { Link, Outlet } from "@remix-run/react"

import styles from "./private.module.scss"
import { PlusIconButton } from "~/ui/PlusIconButton"

const PrivateRoute = () => {
  const plusButtonHandler = () => {
    alert('plus button clicked')
  }
  const navLinks = [
    { text: 'Todo一覧', url: '/todos' },
    { text: 'マイページ', url: '/mypage' },
  ]
  return (
    <div className={styles['private-page-container']}>
      <Outlet />
      <nav className={styles['private-nav']}>
          <PlusIconButton onClick={plusButtonHandler} className={styles['private_todo-plus-button']} />
          <ul className={styles['private_nav_ui']}>
            {navLinks.map((navLink) => (
              <li key={navLink.text} className={styles['private_nav-content_list-item']}>
                <Link to={navLink.url} className={styles['private_nav-content_list-item-link']}>{navLink.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
    </div>
  )
}

export default PrivateRoute
