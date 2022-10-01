import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="grid-wrap">
      <div className="ui embed">
        <iframe title='video player' src={videoSrc} frameborder="0"/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <p>Designed by Ogundele Caleb</p>
    </div>
  );
};

export default VideoDetails;
