import { LiaCcVisa } from "react-icons/lia";

const Choose = () => {
  return (
    <div className="banner">
      <h3>Choose Us</h3>
      <div className="career">
        <h3> Why you choose us to build your career?</h3>
      </div>

      <div className=" chooses row gap-1">
        <div className="process col-md-3" style={{ width: "18rem" }}>
          <div>
            <LiaCcVisa className="visa" />
            <h5>Visa Process</h5>
            <p>
              The visa process can vary significantly depending on the country
              you plan to visit and your nationality.Here's a general overview
              of the typical steps involved in obtaining a visa for
              international travel.
            </p>
          </div>
        </div>

        <div className="Letter col-md-3" style={{ width: "18rem" }}>
          <div >

          <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8Yo6CUKzWGJ6aeQSZfAIdPiwcG_9JNrXgg&usqp=CAU"
                  className="letter"
                  alt="..."
                />
            <h5>Acceptance Letter</h5>
            <p>
            An acceptance letter is a formal document sent by an organization, institution,
             or individual to inform someone that their application, proposal, or offer has 
             been accepted.  
            </p>
          </div>
        </div>

        <div className="Submits col-md-3" style={{ width: "18rem" }}>
          <div>
            <h5>Application Submits</h5>
            <p>
            It seems like you're interested in the process of submitting an application.
             The steps involved in submitting an application can vary depending on the type
              of application .
            </p>
          </div>
        </div>

        <div className="Guidance col-md-3" style={{ width: "18rem" }}>
          <div>
            <h5>Admission Guidance</h5>
            <p>
              The visa process can vary significantly depending on the country
              you plan to visit and your nationality.Here's a general overview
              of the typical steps involved in obtaining a visa for
              international travel.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Choose;
