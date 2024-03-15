import React from "react";

const VideoCard = ({info})=>{
    console.log(info);
    // const {snippet, statistics} = info;
    // const {channelTitle, title, thumbnails} = snippet;
    if (!info || !info.snippet || !info.statistics) {
        return null;
      }
    
      const { snippet, statistics } = info;
    
      if (!snippet.thumbnails || !snippet.thumbnails.high) {
        return null;
      }
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
          <img className="rounded-lg" alt="video thumbnails" src={snippet.thumbnails.medium.url}/>
          <ul>
            <li className="font-bold py-2">{snippet.title}</li>
            <li>{snippet.channelTitle}</li>
            <li>{statistics.viewCount} views</li>
          </ul>
        </div>
    )
};

export default VideoCard;