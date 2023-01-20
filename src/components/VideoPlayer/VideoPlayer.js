function VideoPlayer({ video }) {
  return (
    <div className="video">
      <video className="video__player"
        controls="controls"
        poster={video?.image}
        src={`${video?.video}?api_key=d9321c15-a32c-46ab-a15d-07809df6aaef`}
      ></video>
    </div>
  );
}
//optional chaining ?
export default VideoPlayer;
