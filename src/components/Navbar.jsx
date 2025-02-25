/* eslint-disable react/prop-types */
import notification from "../assets/notifications.png"
import useLogout from "./useLogout"

const Navbar = ({ heading }) => {
    const { onLogout, loading } = useLogout()

    const firstName = "Olubunmi"
    const Lastname = "Amaremo"

    const initials = firstName.charAt(0).toUpperCase() + Lastname.charAt(0).toUpperCase()

    return (
        <div className="shadow-sm">
            <div className=" flex justify-between pt-5 mx-5 lg:ml-40 lg:mr-20">
                <p className=" font-semibold text-[20px] lg:text-[26px] leading-9">{heading}</p>
                <div className=" flex items-center gap-2 lg:gap-4">
                    <img src={notification} alt="" />
                    <p className=" font-normal lg:block md:block hidden text-base font-sans">{`${firstName} ${Lastname}`}</p>
                    <p className=" font-medium text-[16px] leading-6 bg-[#D9D9D9] rounded-full p-2">{initials}</p>
                    {loading && <button className=" py-2 px-5 font-semibold rounded-lg text-white bg-[#39CDCC] border hover:text-[#39CDCC] hover:bg-white"   loading={loading} onClick={onLogout} type="primary" > Logging Out </button>}
                    {!loading && <button className=" py-2 px-5 font-semibold rounded-lg text-white bg-[#39CDCC] border hover:text-[#39CDCC] hover:bg-white"  onClick={onLogout} type="primary" > Log Out </button>}
                </div>

            </div>
        </div>
    )
}

export default Navbar