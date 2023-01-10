import "./VideoList.scss";

function VideoList(props) {
  return (
    <div
      className="aside-video__video"
      onClick={() => props.handleVideoClick(props.id)}
    >
      <img className="aside-video__img" src={props.image} alt="small video" />
      <div className="aside-video__text-container">
        <h3 className="aside-video__title">{props.title}</h3>
        <p className="aside-video__by">{props.by}</p>
      </div>
    </div>
  );
}

export default VideoList;
