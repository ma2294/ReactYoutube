import React from 'react';
//we just want video properties so instead of props we use {video} for the object. it gives us access to said divs below

const VideoDetail = ({video}) => {
    if(!video) { //as this is return statement nothing else will be run after this statement.
        return <div>Loading...</div>;
    } 

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
