import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = () => {
    const { pathname } = useLocation()
    const pageTitle = pathname.split("/")[1].length === 0 ? "Dashboard" : pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1).toLowerCase()
  return (
    <div className=" h-svh grid grid-rows-[5rem,1fr]">
        <Navbar heading={pageTitle} />
        <div className=" grid grid-cols-[10rem,1fr]">
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout