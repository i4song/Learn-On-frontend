import React from "react";
import Bg from "../assets/StudentDashboard.png";
class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  next() {
    document.location.href = "/student/subjectDetail/Visual-Perception-for-self-driving-cars";
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
          height: "1380px",
        }}
        alt="Background"
      />
      <div
        style={{
          position: "absolute",
          left: "547px",
          top: "179px",
          width: "682px",
          height: "76px",
          cursor: "pointer"
        }}
        onClick={this.next.bind(this)}
      ></div>
      </>
    );
  }
}

export default StudentDashboard;


