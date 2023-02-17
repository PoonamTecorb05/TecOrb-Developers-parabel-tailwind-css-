import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
const ViewAll = ({ anchorName }) => {
    return (
        <div className="w-full flex-rows sm-gap-8 gap-4 item-center ">
            <Link className="font-normal flex items-center w-64 text-base font-poppins justify-start" to="" >
                {anchorName}
                <IoIosArrowForward />
            </Link>
            <hr class="w-full h-px my-8 bg-border border-0  " />
        </div>
    )
}
export default ViewAll