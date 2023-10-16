const AboutMission = () => {
  return (
    <div className="container">
      <div className="education">
        <h3>ABOUT CLIFFBYTE EDUCATION CONSULTANCY</h3>
        <h1>WE ARE HERE TO FULFILL YOUR DREAMS</h1>
      </div>

      <main className="row missions  gap-5">
        <div className="edu  mission col-md-4" style={{ width: "24rem" }}>
          <div>
            <img
              src="https://moonlightedu.com.np/user/images/icons/leadership.png"
              className="letter"
              alt="..."
            />
            <h5>Mission</h5>
            <p>
              To match the student’s abilities, performance, and desires with
              the best possible career options.
            </p>
          </div>
        </div>
        <div className="edu  mission col-md-4" style={{ width: "22rem" }}>
          <div>
            <img
              src="https://moonlightedu.com.np/user/images/icons/visionary.png"
              className="letter"
              alt="..."
            />
            <h5>Vision</h5>
            <p>
            To become Nepal’s Leading Education consultant and guide students
             to achieve their dreams.
            </p>
          </div>
        </div>
        <div className="edu  mission col-md-4" style={{ width: "22rem" }}>
          <div>
            <img
              src="https://moonlightedu.com.np/user/images/icons/dartboard.png"
              className="letter"
              alt="..."
            />
            <h5>Goal</h5>
            <p>
            To develop the strong team spirit and provide quality solutions
             to the students.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMission;
