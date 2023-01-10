import VideoMain from "../VideoMain";
import videos from "../../data/videos.json";
import videosDetails from "../../data/video-details.json";
import { useState } from "react";
import Comments from "../Comments";
import VideoContainer from "../VideoContainer";
import "./Main.scss";

function Main() {
  const [currentVideo, setCurrentVideo] = useState(videosDetails[0]);
  const [nextVideos, setNextVideos] = useState(videos.slice(1));

  function handleVideoClick(id) {
    setCurrentVideo(videosDetails.find((item) => item.id === id));
    setNextVideos(videos.filter((item) => item.id !== id));
  }
  return (
    <>
      <VideoMain data={currentVideo} />
      <div className="aside-desktop-container">
        <Comments data={currentVideo} />
        <VideoContainer data={nextVideos} handleVideoClick={handleVideoClick} />
      </div>
    </>
  );
}

export default Main;
