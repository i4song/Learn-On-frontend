import React from "react";
import Bg from "../assets/LectureDetail.png";
import LectureVideo from "../components/LectureVideo";
class LectureDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <img
          src={Bg}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "1920px",
            height: "2606px",
          }}
          alt="Background"
        />
        <LectureVideo
          style={{
            position: "absolute",
            top: "196px",
            left: "518px",
          }}
        />
      </>
    );
  }
}

export default LectureDetail;
