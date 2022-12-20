import React from "react";
import video from "../assets/video.mp4";

function Video() {
  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default Video;
