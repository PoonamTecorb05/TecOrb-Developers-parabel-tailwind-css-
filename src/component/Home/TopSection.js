import React from "react"
import { FaSearch } from "react-icons/fa"
const TopSection = () => {
    return (
        <div className="footer py-1  ">
            <div className="lg:container mx-auto px-4 py-5 md:px-1 md:container-fluid">
                <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-7 lg:grid-cols-10  gap-2 sm:gap-2  justify-between ">
                    <div className="col-span-12 md:col-span-3 flex justify-center lg:justify-end lg:col-span-3 xl:col-span-2 sm-pb-2 relative">
                        <button class="rounded-full bg-main px-5 py-2 text-base ">Trending 20</button>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex justify-end lg:col-span-5 xl:col-span-3 md:pr-5 sm-mb-3 pr-10 pl-5 relative">
                        <form className="w-full text-sm bg-main rounded-full flex-btn relative">
                          
                            <input type="text" placeholder="search" className="font-normal placeholder:text-borderd text-sm w-11/12 h-12 bg-transparent border-none px-8 text-white" />
                            <FaSearch className="absolute left-3"/>
                            <button type="submit" className="bg-white w-24 flex-colo h-10 rounded-full text-sm text-black absolute right-3">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center lg:justify-start lg:col-span-2 xl:col-span-2 sm-mb-0 relative">
                        <h6 className=" text-sm text-borderd font-normal leading-10 pt-1 ">DOWNLOAD APP</h6>
                        <button class="rounded-full bg-main px-0 py-0  mx-1"><img src="/images/playstore.svg" alt=""  className="w-11 h-11"/></button>
                        <button class="rounded-full bg-main px-0 py-0  mx-1"><img src="/images/ios_icon.svg" alt=""  className="w-11 h-11"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopSection