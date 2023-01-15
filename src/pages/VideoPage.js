import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import VideoList from '../components/VideoList';
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
          if (!videoID) {
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

export default VideoPage;