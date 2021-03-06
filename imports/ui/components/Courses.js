import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../../client/main.css";

import Course from "./Course";
import CourseDetail from "./CourseDetail";

const handleInputChange = () => {};

const Courses = props => {
  return (
    <div className="wrap-background">
      <div className="course-wrap">
        <h1>Cursos</h1>
        <div className="search-wrap">
          <i className="material-icons violet search">search</i>
          <input
            className="search-bar"
            placeholder="Buscar cursos..."
            value=""
            onChange={this.handleInputChange}
          ></input>
        </div>
        <div className="course-list">
          <Course />
        </div>
      </div>
      <div className="course-detail">
        <CourseDetail />
      </div>
    </div>
  );
};

export default Courses;
