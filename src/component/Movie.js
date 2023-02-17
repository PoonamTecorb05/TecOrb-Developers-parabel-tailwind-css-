import { Link } from "react-router-dom"

const Movie = ({ movie }) => {
    return (
        <div className=" p-1 hover:scale-95 h-60 hover:shadow-base  transition relative rounded">
            <div className="p-1  h-40 transition hovered relative rounded overflow-hidden">
                <Link to="" className="w-full">
                    <img src={`/images/${movie?.image}`} alt={movie?.name} className="w-full h-full object-cover" />

                </Link>
                <div className="px-4 hoveres gap-6 text-center m-auto absolute bg:black bg-opacity-70 bg-main top-0 left-0 bottom-0 right-0 ">

                    <Link className="w-16 h-16 m-auto" to="" >
                        <img src="/images/play_button-1.svg" alt="" />
                    </Link>

                </div>
            </div>

            <div className="bg-main  px-1 py-1 ">
                <h4 className="font-normal text-textMain text-lg text-ellipsis truncate">{movie?.name}</h4>
                <p className="font-normal text-textSubMain text-base text-ellipsis">{movie?.desc}</p>
            </div>

        </div>
    )
}
export default Movie