import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./pages/main";
import InstructorDashboard from "./pages/InstructorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentSubjectDetail from "./pages/StudentSubjectDetail";
import LectureDetail from "./pages/LectureDetail";
import InstructorSubjectDetail from "./pages/InstructorSubjectDetail.jsx";


function Routers({ location }) {
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path={process.env.PUBLIC_URL + "/"} component={Main}/>
                        <Route path="/instructor/dashboard" component={InstructorDashboard} />
                        <Route path="/student/dashboard" component={StudentDashboard} />
                        <Route path="/student/subjectDetail/Visual-Perception-for-self-driving-cars/lecture-4" component={LectureDetail} />
                        <Route path="/student/subjectDetail/Visual-Perception-for-self-driving-cars" component={StudentSubjectDetail} />
                        <Route path="/instructor/subjectDetail/Visual-Perception-for-self-driving-cars" component={InstructorSubjectDetail} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
}
export default withRouter(Routers);