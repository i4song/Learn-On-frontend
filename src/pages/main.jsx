import React, { Fragment } from "react";
import Bg from "../assets/Main.png";
import LoginPopup from "../assets/LoginPopup.png";
import { Icon } from "@iconify/react";
import bxUser from "@iconify/icons-bx/bx-user";
import lockPasswordLine from "@iconify/icons-ri/lock-password-line";
import "../styles/componentsStyle.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      ID: "",
      PW: "",
    };
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.login = this.login.bind(this);
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  handleIDChange(event) {
    this.setState({ ID: event.target.value });
  }
  handlePWChange(event) {
    this.setState({ PW: event.target.value });
  }
  login() {
    if (this.state.ID === "gobongbob" && this.state.PW === "gobongbob") {
      document.location.href = "/student/dashboard";
    }
    if (this.state.ID === "professor" && this.state.PW === "professor") {
      document.location.href = "/instructor/dashboard";
    }
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
            height: "2103px",
          }}
          alt="Background"
        />
        <div className="Authenticate">
          <div className="Button gray">Sign Up</div>
          <div className="Button blue" onClick={this.toggleHidden.bind(this)}>
            Sign In
          </div>
        </div>
        {!this.state.isHidden && (
          <>
            <img
              src={LoginPopup}
              style={{
                position: "absolute",
                width: "1920px",
                height: "888px",
                left: "0px",
                top: "0px",
              }}
              alt="LoginPopup"
            />
            <div
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                width: "155px",
                height: "48px",
                left: "872px",
                top: "333px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #00B9F1",
                  width: "155px",
                  height: "18px",
                }}
              >
                <Icon
                  icon={bxUser}
                  style={{
                    width: "16px",
                    height: "16px", 
                    color: "#00b9f1",
                    fontSize: "16px",
                  }}
                />
                <input
                  className="StyledInput"
                  type="text"
                  value={this.state.ID}
                  onChange={this.handleIDChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #00B9F1",
                  width: "155px",
                  height: "18px",
                }}
              >
                <Icon
                  icon={lockPasswordLine}
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "#00b9f1",
                    fontSize: "16px",
                  }}
                />
                <input
                  className="StyledInput"
                  type="password"
                  value={this.state.PW}
                  onChange={this.handlePWChange}
                />
              </div>
            </div>
            <div
              onClick={this.login}
              className="Button blue"
              style={{
                position: "absolute",
                left: "911px",
                top: "411px",
              }}
            >
              Sign In
            </div>
          </>
        )}
      </>
    );
  }
}

export default Main;
