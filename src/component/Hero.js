import React from 'react'
import gyanu from '../assests/pro2-i.png'

const Hero = () => {
  return (
    <div>
       <section class="hero">
            <div class="container">
                <div class="row py-5">
                <div class="col-md-5 text-end order-md-2">
                    <img src={gyanu} alt="my image" width="80%"/>
                </div>
                <div class="col-md-7 mt-5">
                
                    
                    Hi I'm <span class="fw-bold">Gyanu Sherchan</span>.
                    <div class="mt-2 mb-5 fs-3 fw-bold">Software Engineer | Coder</div>
                    <p>I love coding and slolving problems. Tech enthusiast.</p>
                    <button class="btn btn-danger">Download Resume <i class="fa-solid fa-download"></i> </button>
                </div>
                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
