import CountUp from "react-countup";
const Banner = () => {
  // const [count, setCount] = useState(900);
  const student = 900
  const country = 1000
  const university = 11000
  return (
    <div className="new_banner d-flex flex-row gap-5">
      <div>
        <h3>
        <h3>
          <CountUp start={0} end={student} duration={3} />
        </h3>
        </h3>
       
        <p>Happy Student</p>
      </div>
      <div>
        <h3>
        <CountUp start={0} end={country} duration={3} />
        </h3>
        <p>Countries Affiliation</p>
      </div>
      <div>
        <h3>
        <CountUp start={0} end={university} duration={3} />
        </h3>
        <p>Top University Partner</p>
      </div>
    </div>
  );
};

export default Banner;
