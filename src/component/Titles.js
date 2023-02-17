const Titles=({title , Icon})=>{
    return(
       <div className="w-full flex sm-gap-8 gap-4 item-center ">
        {/* <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" /> */}
        <h1 className=" xl:text-xl font-semibold text-lg font-poppins">{title}</h1>
       </div>
    )
}
export default Titles