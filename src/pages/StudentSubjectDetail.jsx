import React from "react";
import Bg from "../assets/StudentSubjectDetail.png";
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
        <a
          href="/assets/Data Splits and Neural Network Performance Evaluation.pdf"
          download
          className="Button pink long"
          style={{
            position: "absolute",
            left: "1109px",
            top: "468px",
            textDecoration: "none",
          }}
        >
          Download PDF
        </a>
        <div
          className="Button blue long"
          style={{ position: "absolute", left: "1233px", top: "468px" }}
          onClick={this.next.bind(this)}
        >
          Study Now
        </div>
      </>
    );
  }
}

export default StudentSubjectDetail;
