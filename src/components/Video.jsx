import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="col-span-2 pt-8 pl-8">
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default Video;
