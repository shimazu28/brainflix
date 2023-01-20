import VideoCard from "./VideoCard";

function VideoList({ videos, currentVideo }) {
  return (
    <aside className="videos">
      <h2 className="videos__title">Next videos</h2>

      <ul className="videos__list">
        {videos.map((video) => {
          if (video.id === currentVideo.id) {    
            return false;
          }

          return (
            <li key={video.id} className="videos__item">
              <VideoCard video={video} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
//  лайн тен мейкс щюр зет видео своп вен ви клик ту зе видеолист 
export default VideoList;
