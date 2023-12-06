import React from "react";

//  this function is used to display the Slider
function Slider(Props) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
         {/* to create buttons upon the slider basied on number of slides */}
        <div className="carousel-indicators">
          {Props.Moviegurusliderdata.map((values, index) => {
            if (index === 0) {
              return (
                <button type="button"data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"className="active"aria-current="true"
                  aria-label="Slide 1" key={index}></button>
              );
            }
             else {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"data-bs-slide-to={index}
                  aria-label={index + 1} key={index}></button>
              );
            }
          })}
        </div>
             {/* to create  imgs upon the slider  dynamically */}
        <div className="carousel-inner">
          {Props.Moviegurusliderdata.map((values, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active" key={index}>
                  <img style={{ height: "500px" }} src={values.img} className="d-block w-100 "
                    alt="..."/>
                </div> );
            }
             else {
              return (
                <div className="carousel-item" key={index}>
                  <img style={{ height: "500px" }} src={values.img}className="d-block w-100 "
                    alt="..." />
                </div>);
            }

          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
