import Button from "../Component/Layout/Button";

const Country = () => {
  return (
    <div className="country_section">
      <div className="country_text">
        <h1>Study in Abroad</h1>
        <h1>SELECT THE COUNTRY</h1>
      </div>

      <div className=" country_image d-flex flex-row gap-5">
        <div className="card" style={{ width: "28rem" }}>
          <img
            src="https://th.bing.com/th/id/OIP.MCLS_IDy_DefvOym_-wpDgHaE7?w=272&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">USA</h5>
            <p className="card-text">
              The United States of America (USA) is a country located in North
              America. It is a federal republic composed of 50 states, a federal
              district (Washington, D.C.), and several territories. The USA is
              known for its diverse geography, culture, and history.
              The United States of America (USA) is a country located in North
              America. It is a federal republic composed of 50 states, a federal
              district (Washington, D.C.), and several territories. The USA is
              known for its diverse geography, culture, and history.
            </p>
            <Button title="Learn More" />
          </div>
        </div>
     
        <div className="card" style={{ width: "28rem" }}>
          <img
            src="https://th.bing.com/th/id/OIP.MCLS_IDy_DefvOym_-wpDgHaE7?w=272&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">USA</h5>
            <p className="card-text">
              The United States of America (USA) is a country located in North
              America. It is a federal republic composed of 50 states, a federal
              district (Washington, D.C.), and several territories. The USA is
              known for its diverse geography, culture, and history.
            </p>
            <Button title="Learn More" />
          </div>
        </div>
     
        <div className="card" style={{ width: "28rem" }}>
          <img
            src="https://th.bing.com/th/id/OIP.MCLS_IDy_DefvOym_-wpDgHaE7?w=272&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">USA</h5>
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
  );
};

export default Country;
