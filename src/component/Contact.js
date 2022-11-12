import React from 'react'

const Contact = () => {
  return (
    
    <div id="contact" class="container contact rounded-5 p-1">
        <div class="title">
            <span>Contact Me</span>
        </div>
            {/* <!-- icons to Links --> */}
        <div class="row mb-5">
            <div class="col fa-3x d-flex justify-content-between p-2 px-5 pb-3">
            {/* <!-- <a href="tel:0427874844"><i class="fa-solid fa-mobile"></i></a> --> */}
            <a href="mailto:your@email.com"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/gyanusherchan" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
    
  )
}

export default Contact
