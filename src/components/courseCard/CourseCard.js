import React, { Component } from "react";
import "./CourseCard.css";
import { Fade, Flip } from "react-reveal";

class CourseCard extends Component {
  render() {
    const course = this.props.course;
    const theme = this.props.theme;
    return (
      <div className="course-card">
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            ></div>
            <div classname="body-content">
              {course.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default CourseCard;
