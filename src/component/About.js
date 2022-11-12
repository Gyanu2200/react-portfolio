import React from 'react'
import gyanu from '../assests/pro2-i.png'

export const  About = () => {
  return (
    <section id="about" class="container mb-5">
      <div class="title">
        <span>About Me</span>
      </div>
      <div class="row">
        <div class="col-md-5 mb-3">
          <img src={gyanu} alt="my image" width="100%"/>
        </div>
        <div class="col-md-7">
          <p pb-4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam beatae dicta inventore quos corrupti consequuntur numquam, blanditiis quas cupiditate!
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque accusantium sapiente, doloremque delectus saepe sed tempora optio non numquam, libero consequuntur magni ipsum nulla.</p>
          </p>
        </div>
      </div>
    </section>
  )
}
