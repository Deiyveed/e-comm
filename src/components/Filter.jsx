import { ControlOutlined } from "@ant-design/icons"

// eslint-disable-next-line react/prop-types
const Filter = ({children}) => {
    return (
        <div className=" flex items-center gap-2 cursor-pointer border border-[#C4C4C4] rounded-[5px] w-[100px] h-10 py-2 px-3">
            <ControlOutlined />
            <p className=" font-medium text-[16px] leading-5 text-[#101828]">{children}</p>
        </div>
    )
}

export default Filter


