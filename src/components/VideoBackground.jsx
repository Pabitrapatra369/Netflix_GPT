import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieId);
  return (
    // <div className="w-screen ">
    //   <iframe
    //     className="w-screen h-screen "
    //     src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     referrerPolicy="strict-origin-when-cross-origin"
    //   />
    // </div>
    <div className="absolute w-screen h-screen overflow-hidden">
  <iframe
    className=" top-0 left-0 w-full h-full scale-150 transform object-cover"
    src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
  );
};

export default VideoBackground;
