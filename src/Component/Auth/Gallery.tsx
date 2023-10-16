import { Row, Col } from "react-bootstrap";


const Gallery = () => {
  return (
    <>
      <div className="about">
        <h3>Gallery</h3>
        <div className="career">
          <h3></h3>
        </div>
      </div>

      <div className="about_section">
        <Row>
          <Col className="col-md-6 hero-content">
            <div>
              <div className="aboutnew">
                <h3></h3>
              </div>

              <div className="d-flex flex-row gap-5">
                <div>
                  <img
                    src="https://moonlightedu.com.np/uploads/multiple-images/gallery6.jpg_1680070611.jpg"
                    className="gallery"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://moonlightedu.com.np/uploads/multiple-images/canada.jpg_1680072187.jpg"
                    className="gallery "
                    alt="..."
                  />
                </div>

                <div>
                  <img
                    src="https://moonlightedu.com.np/uploads/multiple-images/australia.jpg_1680070283.jpg"
                    className="gallery"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Gallery;
