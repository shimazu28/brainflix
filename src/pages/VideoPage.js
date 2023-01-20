import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../components/VideoDetails/VideoDetails';
import VideoList from '../components/VideoList/VideoList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function VideoPage() {
  const params = useParams();
  const videoID = params.id;

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    if (videos.length === 0) {   
      axios.get('https://project-2-api.herokuapp.com/videos?api_key=d9321c15-a32c-46ab-a15d-07809df6aaef')
        .then((response) => {
          setVideos(response.data);
          if (videoID !== 0) {
            axios.get(`https://project-2-api.herokuapp.com/videos/${response.data[0].id}?api_key=d9321c15-a32c-46ab-a15d-07809df6aaef`)
              .then((response) => setCurrentVideo(response.data))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }

    if (videoID) {
      axios.get(`https://project-2-api.herokuapp.com/videos/${videoID}?api_key=d9321c15-a32c-46ab-a15d-07809df6aaef`)
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