import { SearchOutlined } from "@ant-design/icons"

// eslint-disable-next-line react/prop-types
const SearchButton = ({ placeholder, onChange }) => {
   
    return (
        <div>
            <input
                className=" border border-[#C4C4C4] rounded-[5px] outline-none pl-10 placeholder:font-medium placeholder:text-[#717171] h-10 w-[377px]"
                type="search"
                onChange={onChange}
                placeholder={placeholder} />
            <span className=" relative right-[22.5rem]"><SearchOutlined style={{
                color: "#717171",
            }} /></span>
            {/* <span className=" relative lg:hidden bottom-8 left-3 "><SearchOutlined style={{
                color: "#717171",
            }} /></span> */}
        </div>
    )
}

export default SearchButton