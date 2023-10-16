import { Row, Col } from "react-bootstrap";
import AboutMission from "./AboutMission";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <h3>About Us</h3>
        <div className="career">
          <h3></h3>
        </div>
      </div>

      <div className="about_section">
        <Row>
          <Col className="col-md-6 hero-content">
            <div>
              <div className="aboutnew">
                <h3>About</h3>
              </div>
              <p>
                Abroad" is a term that refers to foreign countries or places
                located outside one's own country or homeland. When people use
                the term "abroad," they typically mean traveling, studying,
                working, or residing in a foreign country. Here are some key
                points and considerations related to going abroad: Traveling
                abroad often involves visiting foreign countries for tourism,
                vacations, exploration, or leisure. It provides opportunities to
                experience different cultures, cuisines, languages, and
                landscapes. Travelers may explore historical sites, natural
                wonders, and engage in various activities such as sightseeing,
                adventure sports, or relaxation.
              </p>
              <div className="d-flex flex-row gap-5">
                <div>
                  <img
                    src="https://moonlightedu.com.np/user/images/icons/winner.png"
                    className="letter"
                    alt="..."
                  />
                  <p>Highly Experienced</p>
                </div>
                <div>
                  <img
                    src="https://moonlightedu.com.np/user/images/icons/customer-service.png"
                    className="letter "
                    alt="..."
                  />
                  <p>24/7 Support</p>
                </div>
                <div>
                  <img
                    src="https://moonlightedu.com.np/user/images/icons/trust.png"
                    className="letter"
                    alt="..."
                  />
                  <p>100% Trusted</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md="6">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/09/universities-pexels-photo-256490.jpeg"
                  alt="img"
                  className="about_img"
                />
              </div>
              <div className="col-md-4 mb-5" style={{ marginTop: "40px" }}>
                <img
                  src="https://th.bing.com/th/id/OIP.YNGQRvdKs87efe8W0mOMuAHaEK?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="img"
                  className="about_img"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://th.bing.com/th/id/OIP._-TEznaZbL9O2I6A2GYLGQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="img"
                  className="about_img"
                />
              </div>

            </div>
          </Col>
        </Row>

      </div>
      <AboutMission />
    </>
  );
};

export default AboutUs;
