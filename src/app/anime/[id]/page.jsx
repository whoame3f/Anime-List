import { getAnimeId, getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"
import Image from "next/image"
import VideoPlayer from "@/components/utilities/videoPlayer"
// import Header from "@/components/Dashboard/Header"

const Page = async ({params: {id}}) => {
    const anime = await getAnimeId(`anime/${id}`)
    // console.log(anime.data)
    
    return (
        <div className="mb-10">
            {/* <Header title={"searh Anime"}/> */}
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-primary border-color-accent">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 overflow-x-auto text-color-primary ">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>

            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="md:w-64 w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p> 
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </div>

    )
}

export default Page