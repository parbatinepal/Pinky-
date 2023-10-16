import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer: React.FC = () => {
  return (
    <Container className='footer__section my-5'>
      <Row>
        <Col md="3">
          <img
            src='https://cliffbyte.com/assets/logo-031d1230.png'
            alt='logo'
          />
          <p className=''>
            CliffByte Education Consultancy is one of the leading educational consultants, acknowledged for providing the best guidance and counseling to the students.
          </p>
        </Col>
        <Col md="3">
          <h5>Navigation</h5>
          <ul>
            <li><ArrowForwardIosIcon /> Home</li>
            <li><ArrowForwardIosIcon /> About Us</li>
            <li><ArrowForwardIosIcon /> Study Abroad </li>
            <li><ArrowForwardIosIcon /> Gallery</li>
            <li><ArrowForwardIosIcon /> Contact us</li>
          </ul>
        </Col>
        <Col md="3">
          <h5>Abroad</h5>
          <ul>
            <li><ArrowForwardIosIcon /> Home</li>
            <li><ArrowForwardIosIcon /> About Us</li>
            <li><ArrowForwardIosIcon /> Study Abroad </li>
            <li><ArrowForwardIosIcon /> Gallery</li>
            <li><ArrowForwardIosIcon /> Contact us</li>
          </ul>
        </Col>
        <Col md="3">
          <h5>Contact Us</h5>
          <ul>
            <li><ArrowForwardIosIcon /> Home</li>
            <li><ArrowForwardIosIcon /> About Us</li>
            <li><ArrowForwardIosIcon /> Study Abroad </li>
            <li><ArrowForwardIosIcon /> Gallery</li>
            <li><ArrowForwardIosIcon /> Contact us</li>
          </ul>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col md="6">
          <h5>2023 © All rights reserved | <strong>PARBATI NEPAL</strong></h5>
        </Col>
        <Col md="6">
          <ul className='icon'>
            <li><FacebookIcon /></li>
            <li><InstagramIcon /></li>
            <li><LinkedInIcon /></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
