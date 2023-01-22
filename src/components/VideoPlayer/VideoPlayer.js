function VideoPlayer({ video }) {
  return (
    <div className="video">
      <video className="video__player"
        controls="controls"
        poster={video?.image}
        src={`${video?.video}`}
      ></video>
    </div>
  );
}
//optional chaining ?
export default VideoPlayer;
