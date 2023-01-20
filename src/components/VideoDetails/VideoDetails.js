import dayjs from 'dayjs';
import Comments from '../Comments/Comments'

function VideoDetails({ video }) {
  return (
    <div className="video-details">
      <h1 className="video-details__title">{video.title}</h1>

      <div className="video-details__info">
        <small>By {video.channel}</small>
        <time dateTime={video.timestamp}>
          {dayjs(video.timestamp).format('DD/MM/YYYY')}
        </time>
        <span>{video.views}</span>
        <span>{video.likes}</span>
      </div>

      <p className="video-details__description">{video.description}</p>

      <Comments comments={video.comments} />
    </div>
  );
}

export default VideoDetails;
