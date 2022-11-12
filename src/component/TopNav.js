import React from 'react'

const TopNav = () => {
  return (

      <div id="nav-bar" class="topNav">
        <nav class="navbar navbar-expand-md bg-none">
            <div class="container">
              <a class="navbar-brand" href=""><img src="img/Group 1.png" alt=""/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#contact">Contacts</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
    </div>
    
  )
}

export default TopNav
