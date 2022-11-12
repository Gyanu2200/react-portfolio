import React from "react";
import project from "../assests/protfolio-img.png";
import restaurant from "../assests/restaurant-app-img.png";
import travel from "../assests/travelblog-img.png";

const Project = () => {
  return (
    <div id="projects" class="projects py-3">
      <div class="title">
        <span>Projects</span>
      </div>

      <div class="container">
        <div class="row ">
          <div class="col-md pb-5">
            <img src={project} alt="protfolio image" width="100%" />
          </div>
          <div class="col-md">
            <h2>My Portfolio site</h2>
            <div>
              <a href="#">
                <i class="fa-brands fa-github px-2"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p class="mt-3 fw-bold">Tech used: html, css, javascript, react</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus recusandae ex maiores quibusdam veniam odit?
            </p>
          </div>
        </div>

        <div class="row py-5">
          <div class="col-md order-md-2 pb-5">
            <img src={restaurant} alt="protfolio image" width="100%" />
          </div>
          <div class="col-md">
            <h2>My Portfolio site</h2>
            <div>
              <a href="#">
                <i class="fa-brands fa-github px-2"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p class="mt-3 fw-bold">Tech used: html, css, javascript, react</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus recusandae ex maiores quibusdam veniam odit?
            </p>
          </div>
        </div>

        <div class="row ">
          <div class="col-md pb-5">
            <img src={travel} alt="protfolio image" width="100%" />
          </div>
          <div class="col-md">
            <h2>My Portfolio site</h2>
            <div>
              <a href="#">
                <i class="fa-brands fa-github px-2"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p class="mt-3 fw-bold">Tech used: html, css, javascript, react</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus recusandae ex maiores quibusdam veniam odit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
