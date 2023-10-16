import Slider from "react-slick";
import Button from "../Component/Layout/Button";

const Country = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (

    <div>
      <div className="country_text">
        <h1>Study in Abroad</h1>
        <h1>SELECT THE COUNTRY</h1>
      </div>
      <Slider {...sliderSettings}>
        <div >
          <div className="country_card">
            <div className="partner col-md-3 " style={{ width: "28rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/multiple-images/gallery6.jpg_1680070611.jpg"
                  className="country_new"
                  alt="..."
                />

<div className="card-body">
            <h5 className="card-title">Japan</h5>
            <p className="card-text">
              The United States of America (USA) is a country located in North
              America. It is a federal republic composed of 50 states, a federal
              district (Washington, D.C.), and several territories. The USA is
              known for its diverse geography, culture, and history.
            </p>
            <Button title="Learn More" />
          </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" country_card">
            <div className="partner col-md-3 " style={{ width: "28rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/multiple-images/canada.jpg_1680072187.jpg"
                  className="country_new"
                  alt="..."
                />
                 <div className="card-body">
            <h5 className="card-title">Canada</h5>
            <p className="card-text">
            Canada is a North American country known for its vast and diverse landscape,
             multicultural society, and strong economy. Here are some key facts about Canada.
             Canada is a federal parliamentary democracy and a constitutional monarchy. 
             The head of state is Queen Elizabeth II, represented by
              the Governor General, while the head of government is the Prime Minister.
            </p>
            <Button title="Learn More" />
          </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" country_card">
            <div className="partner col-md-3 " style={{ width: "28rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/multiple-images/australia.jpg_1680070283.jpg"
                  className="country_new"
                  alt="..."
                />
                 <div className="card-body">
            <h5 className="card-title">Australia</h5>
            <p className="card-text">
            Canada is a North American country known for its vast and diverse landscape,
             multicultural society, and strong economy. Here are some key facts about Canada.
             Canada is a federal parliamentary democracy and a constitutional monarchy. 
             The head of state is Queen Elizabeth II, represented by
              the Governor General, while the head of government is the Prime Minister.
            </p>
            <Button title="Learn More" />
          </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "28rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/multiple-images/canada.jpg_1680072187.jpg"
                  className="country_new"
                  alt="..."
                />
                 <div className="card-body">
            <h5 className="card-title">Canada</h5>
            <p className="card-text">
            Canada is a North American country known for its vast and diverse landscape,
             multicultural society, and strong economy. Here are some key facts about Canada.
             Canada is a federal parliamentary democracy and a constitutional monarchy. 
             The head of state is Queen Elizabeth II, represented by
              the Governor General, while the head of government is the Prime Minister.
            </p>
            <Button title="Learn More" />
          </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "28rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/multiple-images/gallery6.jpg_1680070611.jpg"
                  className="country_new"
                  alt="..."
                />
                 <div className="card-body">
            <h5 className="card-title">Japan</h5>
            <p className="card-text">
            Canada is a North American country known for its vast and diverse landscape,
             multicultural society, and strong economy. Here are some key facts about Canada.
             Canada is a federal parliamentary democracy and a constitutional monarchy. 
             The head of state is Queen Elizabeth II, represented by
              the Governor General, while the head of government is the Prime Minister.
            </p>
            <Button title="Learn More" />
          </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-md-3">
            <div className="partner col-md-3 " style={{ width: "28rem" }}>
              <div>
                <img
                  src="https://moonlightedu.com.np/uploads/multiple-images/australia.jpg_1680070283.jpg"
                  className="country_new"
                  alt="..."
                />
                 <div className="card-body">
            <h5 className="card-title">Asutralia</h5>
            <p className="card-text">
            Canada is a North American country known for its vast and diverse landscape,
             multicultural society, and strong economy. Here are some key facts about Canada.
             Canada is a federal parliamentary democracy and a constitutional monarchy. 
             The head of state is Queen Elizabeth II, represented by
              the Governor General, while the head of government is the Prime Minister.
            </p>
            <Button title="Learn More" />
          </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Country;
