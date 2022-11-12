import React from 'react'

const Skills = () => {
  return (
    <div>
       <section id="skills" class="container py-4 vh-90">
            <div class="row"/>
                <div class="col">
                {/* <!-- title --> */}
                <div class="title">
                    <span>Skills</span>
                </div>
                {/* <!-- icon --> */}
                <div class="icons">
                    <div><i class="fa-brands fa-html5"></i> HTML</div>
                    <div><i class="fa-brands fa-css3-alt"></i> CSS</div>
                    <div><i class="fa-brands fa-square-js"></i> JavaScript
                    </div>
                    <div><i class="fa-brands fa-figma"></i> Figma</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills
