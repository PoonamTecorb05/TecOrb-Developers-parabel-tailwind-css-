import React from "react"
const Footer = () => {
    return (
        <div className="footer py-3  fixed	 bottom-0 z-10 w-full left-0 right-0">
            <div className="container-fluid mx-auto px-2">
                <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-7  justify-between ">
                    <div className="col-span-4 md:col-span-3 lg:col-span-3 sm-pb-0 relative">
                        <div className="px-4 hoveres gap-0 flex-rows ">
                            <div className="w-16 h-16 m-auto" to="" >
                                <img src="/images/placeholder.png" alt="" />
                            </div>
                            <div className="hidden lg:block">
                                <h4 className="text-white   px-2 font-normal text-base ">The Queen Bee- ChatterBox Theater</h4>
                                <p className="text-textSubMain  px-2 font-normal text-sm ">The Queen Bee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 md:col-span-8 lg:col-span-6 sm-pb-0 relative">
                        <div className="px-4 hoveres gap-0 flex-rows-player my-2 ">
                        <div className="px-4 hoveres gap-0 flex-rows ">
                            <button class=" px-0 py-0  mx-2"><img src="/images/replay_icon.png" alt="" className="w-7 h-7" /></button>
                            <button class=" px-0 py-0  mx-2"><img src="/images/back_icon.png" alt="" className="w-6 h-6" /></button>
                            <button class=" px-0 py-0  mx-2"><img src="/images/playIcon.png" alt="" className="w-14 h-14" /></button>
                            <button class=" px-0 py-0  mx-2"><img src="/images/next_icon.png" alt="" className="w-6 h-6" /></button>
                            <button class=" px-0 py-0  mx-2"><img src="/images/reverse.png" alt="" className="w-7 h-7" /></button>
                        </div>
                        <div className="px-4 hoveres gap-0  ml-10 flex-rows">
                            <span className="transitions text-white inline-block py-1 px-2 font-medium text-base">00:00</span>
                            <span className="transitions text-white inline-block py-1 px-2 font-medium text-lg">/</span>
                            <span className="transitions text-white inline-block py-1 px-2 font-medium text-base">00:00</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 lg:col-span-3 sm-pb-0 relative hidden lg:block">
                    <div className="px-4 hoveres gap-0 flex-rows-player py-5">
                            <button class=" px-0 py-0  mx-2"><img src="/images/speakers.png" alt="" className="w-7 h-7" /></button>
                            <button class=" px-0 py-0  mx-2 bg-white h-1 w-32 rounded"></button>
                            <button class=" px-0 py-0  mx-2"><img src="/images/reverse.svg" alt="" className="w-7 h-7" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer