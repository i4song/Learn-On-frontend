import React, { Component } from "react";
import ReactPlayer from "react-player";
import lectureVideo from '../assets/LectureVideo.mp4'
class Video extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          style={{
            position: "absolute",
            top: "196px",
            left: "518px",
          }}
          className="react-player fixed-bottom"
          url={lectureVideo}
          controls={true}
          width={893}
          height={492}
        />
      </div>
    );
  }
}

export default Video;
