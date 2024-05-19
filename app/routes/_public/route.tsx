import { Outlet } from "@remix-run/react"
import { PublicHeader } from "./PublicHeader"

export const meta = () => {
  return [{
    title: 'ログイン前のページ'
  }]
}

const PublicRoutes = () => {
  return (
    <div>
      <PublicHeader />
      <Outlet />
    </div>
  )
}

export default PublicRoutes
