import Slider from "react-slick";

const Partners = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    // <div className="container">
    //   <div>
    //     <h2 className="text-center">Our Partners</h2>
    //     <h6 className="text-center">Our University</h6>
    //   </div>

    //     <div className="row">
    //     <div className="col-md-3" >
    //     <div className="partner col-md-3" style={{ width: "18rem" }}>
    //       <div>
    //         <img
    //           src="https://moonlightedu.com.np/uploads/university/1680020862.png"
    //           className="partners"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" col-md-3">
    //     <div className="partner col-md-3" style={{ width: "18rem" }}>
    //       <div>
    //         <img
    //           src="https://moonlightedu.com.np/uploads/university/1680020821.png"
    //           className="partners"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="col-md-3">
    //     <div className="partner col-md-3" style={{ width: "18rem" }}>
    //       <div>
    //         <img
    //           src="https://moonlightedu.com.np/uploads/university/1680020851.png"
    //           className="partners"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" col-md-3">
    //     <div className="partner col-md-3" style={{ width: "18rem" }}>
    //       <div>
    //         <img
    //           src="https://moonlightedu.com.np/uploads/university/1680020910.png"
    //           className="partners"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //   </div>
    //     </div>
    // </div>

    <div>
      <h2>Our Partners</h2>
      <h2>Our Univerities</h2>
      <Slider {...sliderSettings}>
        <div >
          <div className=" col-md-3 ">
            <div className="partner col-md-3 " style={{ width: "18rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/university/1680020910.png"
                  className="partners"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "18rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/university/1680020917.png"
                  className="partners"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "18rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/university/1680020881.png"
                  className="partners"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "18rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/university/1680020910.png"
                  className="partners"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "18rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/university/1680020862.png"
                  className="partners"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "18rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/university/1680020851.png"
                  className="partners"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
