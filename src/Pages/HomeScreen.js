import React from "react"
import AudioBook from "../component/Home/AudioBook"
import AudioDrama from "../component/Home/AudioDrama"
import Banner from "../component/Home/Banner"
import Educational from "../component/Home/Educational"
import Fairytales from "../component/Home/Fairytales"
import PopularMovies from "../component/Home/PopularMovies"
import TopPicks from "../component/Home/topPicks"
import TopSection from "../component/Home/TopSection"
import TvShows from "../component/Home/TvShows"
import Layout from "../Loyout/Loyout"
const HomeScreen = () => {
    return (
        <Layout>
            <div className="conatiner mx-auto min-h-screen px-0 mb-6">
                <TopSection/>
                <Banner />
                <TopPicks />
                <PopularMovies />
                <TvShows />
                <AudioDrama/>
                <AudioBook />
                <Educational/>
                <Fairytales />
               
            </div>
        </Layout>
    )
}
export default HomeScreen