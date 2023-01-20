import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function VideoCard({ video }) {
  return (
    <Link
      className="video-card"
      to={generatePath(AppRoute.VIDEO, { id: video.id })}
    >
      <img className="video-card__poster"
        src={video.image}
        width="120"
        height="70"
        alt={video.title}
      />
      <h3 className="video-card__title">
        <span>{video.title}</span>
        <small>{video.channel}</small>
      </h3>
    </Link>
  )
}

export default VideoCard;