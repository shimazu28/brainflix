import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../components/VideoDetails/VideoDetails';
import VideoList from '../components/VideoList/VideoList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ENDPOINT } from '../const';

function VideoPage() {
  const params = useParams();
  const videoID = params.id;

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    if (videos.length === 0) {   
      axios.get(ENDPOINT)
        .then((response) => {
          console.log(response);
          setVideos(response.data);
          if (videoID !== 0) {
            axios.get(`${ENDPOINT}/${response.data[0].id}`)
              .then((response) => setCurrentVideo(response.data))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }

    if (videoID) {
      axios.get(`${ENDPOINT}/${videoID}`)
        .then((response) => setCurrentVideo(response.data))
        .catch((err) => console.log(err));
    }
  }, [videoID, videos.length]);
// лайн сихтин иф видеос ленгз из тру, ви муст ритурн лист оф информейщн ин некст видео лист
  return (
    <main className="video-page">
      <VideoPlayer video={currentVideo} />

      <div className="video-page__container container">
        <VideoDetails video={currentVideo} />

        <VideoList videos={videos} currentVideo={currentVideo} />
      </div>
    </main>
  );
}
// лайн твени иф ви лод пейдж визоут айди ор слешс, ви шулд гет фирст видео айди фром со ит вилби зе байскл
// лайн тв найн ви вон мейк щюр ту рендер пейдж вен ви чуз реквайрд видео айди кий
export default VideoPage;