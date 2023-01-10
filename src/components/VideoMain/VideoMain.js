import "./VideoMain.scss";

function VideoMain(props) {
  return (
    <div className="video-hero">
      <video
        className="video-hero__player"
        poster={props.data.image}
        controls
      ></video>
    </div>
  );
}

export default VideoMain;
