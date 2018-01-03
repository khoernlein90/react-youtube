import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    return (
            <li onClick={() => onVideoSelect(video)} className="list-group-item media">
                <div className="media">
                    <img className="mr-3" src={video.snippet.thumbnails.default.url}  />
                        <div className="media-body">
                            <p className="mt-0">{video.snippet.title}</p>
                        </div>
                </div>
            </li>
            )
}

export default VideoListItem;