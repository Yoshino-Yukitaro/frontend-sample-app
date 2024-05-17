import { Outlet } from "@remix-run/react"
import { PublicHeader } from "./PublicHeader"

const PublicRoutes = () => {
  return (
    <div>
      <PublicHeader />
      <Outlet />
    </div>
  )
}

export default PublicRoutes
