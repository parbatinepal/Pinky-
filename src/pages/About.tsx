import { Row, Col } from "react-bootstrap";
import Button from "../Component/Layout/Button";
import "./style.css";
const About = () => {
  return (
    <div className="about_section">
      <Row>
        <Col className="col-md-6 hero-content">
          <div>
            <h3>About CliffByte Education and Consultany</h3>

            <p>
              Abroad" is a term that refers to foreign countries or places
              located outside one's own country or homeland. When people use the
              term "abroad," they typically mean traveling, studying, working,
              or residing in a foreign country. Here are some key points and
              considerations related to going abroad: Traveling abroad often
              involves visiting foreign countries for tourism, vacations,
              exploration, or leisure. It provides opportunities to experience
              different cultures, cuisines, languages, and landscapes. Travelers
              may explore historical sites, natural wonders, and engage in
              various activities such as sightseeing, adventure sports, or
              relaxation.
            </p>
            <Button title="Read More" />
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
            <div className="col-md-4 mb-5" style={{marginTop:"40px"}}>
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
  );
};

export default About;
