import { NavLink } from "react-router-dom"
import pageRoutes from "../routes/dashboard.routes"

const Sidebar = () => {
  return (
    <div className=" shadow-md">
         <div className=" mt-14">
                {pageRoutes.map((page, index) => (
                    <div key={index}>
                        <NavLink to={page.path} className={({ isActive }) => {
                            return `${isActive && "text-[#0014CC]"} flex gap-4 py-2 px-[10px] font-medium text-[15px] leading`

                        }}>
                            {({ isActive }) => (
                                <>
                                    <div>{page.icon(isActive)}</div>
                                    <p>{page.name}</p>
                                </>
                            )}
                        </NavLink>
                    </div>

                ))}

            </div>
    </div>
  )
}

export default Sidebar