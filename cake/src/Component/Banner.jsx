import React from "react";
import cake1 from '../assets/image/cake banner.webp'
import cake2 from '../assets/image/cake1banner'
import cake3 from '../assets/image/cake2banner.webp'



function Banner() {
  return (
    <div>
      <section className="container">
      
      </section>
     <section className="container mt-4">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cake1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={cake2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={cake3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
      </div>
    </section>
   
    </div>
  );
}

export default Banner;
