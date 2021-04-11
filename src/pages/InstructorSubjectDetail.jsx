import React from "react";
import Bg from "../assets/InstructorSubjectDetail.png";
class StudentSubjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  next() {
    document.location.href =
      "/student/subjectDetail/Visual-Perception-for-self-driving-cars/lecture-4";
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
        <label
          className="Button blue long"
          style={{ position: "absolute", left: "1154px", top: "321px" }}
        >
            <input type="file"/>
          Upload Video
        </label>
        
        <div
          className="Button indigo long"
          style={{ position: "absolute", left: "1285px", top: "321px" }}
          onClick={this.next.bind(this)}
        >
          Preview
        </div>
      </>
    );
  }
}

export default StudentSubjectDetail;
