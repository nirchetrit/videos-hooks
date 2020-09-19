import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("ski");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      {/* <div className="row"> */}
      <SearchBar onSearchTermSubmit={search}> </SearchBar>
      {/* </div> */}
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-8">
          <VideoDetail video={selectedVideo}></VideoDetail>
        </div>
        <div className="col-6 col-lg-4">
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
