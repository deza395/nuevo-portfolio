import React, { Component } from "react";
import "./Courses.css";
import CourseCard from "../../components/courseCard/CourseCard.js";
import { courses } from "../../portfolio";
import { Fade } from "react-reveal";

class Courses extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="courses">
        <div className="courses-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Cursos
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {courses.courses.map((course) => {
            return <CourseCard course={course} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Courses;
