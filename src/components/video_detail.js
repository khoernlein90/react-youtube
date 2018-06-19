import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title={video.snippet.title}
          src={url}
        />
      </div>
      <div
        className="details"
        style={{
          border: "1px solid lightgray",
          padding: "20px"
        }}
      >
        <div style={{ fontWeight: "bold" }}>{video.snippet.title}</div>
        <hr />
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
