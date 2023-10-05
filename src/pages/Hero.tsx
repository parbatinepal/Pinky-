import { Row, Col } from "react-bootstrap";
import Button from "../Component/Layout/Button";
import "./style.css";
const Hero = () => {
  return (
    <div className="hero_section">
      <Row>
        <Col className="col-md-6 hero-content">
          <div>
            <h3>CliffByte Education</h3>
            <h3>Help To Study Abroad</h3>
             <p>Studying abroad can be a rewarding and life-changing experience. 
              It offers you the opportunity to gain a global perspective, 
              immerse yourself in a different culture, and access high-quality education.
               Here are some steps to help you get started on your journey to study abroad</p>
            <Button title="Get Started" />
          </div>
        </Col>

        <Col md="6">
          <img
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
            alt="img"
            className="hero_img"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
