import React, { useEffect } from "react";
import logo from "../logo1.JPG";
import Terminal from "./Terminal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import Form from "./Form";

const Intro = (props) => {
  const { projects, currentProject, setCurrentProject, currentPage } = props;

  useEffect(() => {
    document.title = currentPage.title;
  }, [currentPage, currentProject]);
  return (
    <div className="main">
      <div className="intro">
        <Terminal currentPage={currentPage} />

        <div className="intro-inner">
          <div className="intro-left">
            <img src={currentPage.image} alt="logo" />
          </div>
          <div className="intro-right">
            {currentPage.title == "Projects" ? (
              <Carousel
                currentProject={currentProject}
                projects={projects}
                setCurrentProject={setCurrentProject}
              />
            ) : (
              <p className="paragraph-content">{currentPage.content}</p>
            )}
            {currentPage.title == "Contact" ? <Form></Form> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
