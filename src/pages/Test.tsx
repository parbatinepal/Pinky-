const Test = () => {
  return (
    <div className="test">
      <div className="new_test">
        <h3>Testimonials</h3>
        <p>What our Students think about us</p>
      </div>
      <div className="d-flex flex-row gap-5">
        <div className=" chooses row">
          <div
            className="process col-md-3"
            style={{ width: "34rem", height: "22rem" }}
          >
            <div>
              <p>
                The visa process can vary significantly depending on the country
                you plan to visit and your nationality.Here's a general overview
                of the typical steps involved in obtaining a visa for
                international travel.
              </p>
              <div className="test_img">
                <img
                  src="data:image/jpeg;base64,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"
                  className="avatar-img-top"
                  alt="..."
                />

                <div >
                  <h3> Samuna Tmg</h3>
                  <p>Student</p>
                </div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX////4lSD4jwD4jgD4kxf4kQ/4lBv4khD4kQD5rFn9//35s2z4p0/6y5z5unn4my34oUD72LX77t39/Pf88uT86tb7xZT89er5uHX9+PL83r/6vob6tHD5u4D82LP81K34sGP4nzj5z6P77dn4pEj74sf5rV74miT5wY385s/3nDH5qEz7z6j727z50KE6um5EAAAGP0lEQVR4nO2cbXeiPBCGJYEA4lvFlqpVsdVa3Xb//897kMQ+3RIwiQml59zXl/2w50xnksxLZoK9HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8RtJsMVw+vcZxsnpYT+c3yZpP1w+rJI5fn5bDRZZa0vAm5ovVhJAg8M+EAaGHZJMZyso2yYGSICxlBQEhk9XitgW7nenyREPmfYX5hCX7vrao/j5hxP8mK6Sn5dSB3qpMn8LgX5UEIRksNGUtBiSUiWJB+PRTNqZvoVSnEp/EMw1Zs5j4tbLC8O1HHPJ4IrU6lTZGz8qynqN6+86Q09GhJTUMqfR8foXmakuf5vSaKEaHju35Tn90VamCYKISVWeTQEEWHekHrxtI8+YTesEfX3fG6bj5hF4giifCDooGqpg4UzTwbGIbpnFGqgYWJm6bVz7dqhpYmDhqyb7es7qBhS++Nsp6VfHBTxPVo/NN3EcaShVqNUXBoc5ieV5034aB6UT9XHG16kuSqd5ief6kjYCqueyFWoNaWQPNxWo+EJaYeVcz/XeiuxpZd5pbWGR+T6cWNGOpExo4/kQeT7XPe0GwdG1gpr+Fxdn6kMr60D3v3nkTTS+fqmh74RlfnjFe9bfQvSf2JwZbWKglC6dTk8XymONweq9ScFcJZAs/1PfoM9RtTnww00qaMLRTBSd4cGqhoVZeVI0PmXaq4DSkVwv0DbXy6L4ia2F24IvVcumIL6ZaSRzR0A2L1XpxaOGdUfgrCFcVWav6NlYzpK5EssG7qYV+XJEVG7q0R94dWmgYSosstq3I2hplVs9xMF0ZWziuyBobW1g98RYtNPUddqjIOphaKPFpexhcLISFv2UPzf1wUpHVTT/U6kF95dfEUvN8+FiR1c18aF7TvFVkGd00SwurFaA9jOtSyb3VuC6lTseJps4jOVlz4yre6fzCtFyWXVsNV0uSWm1i6oiR5MGBoSO6vR/2ejujLMZOkpOl2/AWOC1peqYL7+cyWUa9NufjmYyZbKIkWfTM+qXSdoFdjEpTspaJMul5y13aKpnJnYDIpw1GTW/34ycDT2TbmnU3SBiuA01Bf6etlp/UyJrq16Zk49zC3r22WvWzBv0DIR0Q2Gajm/YbhtO5ZuBiNZM6y6z0Vr5JK523GGfClt5jKL+n4VpVL4f/kym/pymh8lGkdfpaJpLGl5jqT4a8c9ntekD6icajITZu1irbqfuivPxzw3OouvS1ueJCmhDVKsJpB+M7x0nzNn7mlOZDWrJhzRkoOPB/3U/x/yF9COuPl0+STSC0Uojvs7zhjXAQDkf8f8Nrx8E208eo7p13vO8lXCvFBu4+rnnnHUajWU/8FadNKDmztwP9bqRPo8djvzcXdYHquK9/fIq+byQL6OFt9tnFZCe31shJ98sDpUR8b0EIjZJ1WWeLlo6/U5c1XycRJUR8b1HIGq/25REXL0CkDx5aIVu8L/P4zyAfDT8+y0Zxy6KanyVMP4arfPAnzpfvi0tYubwAIT/9eck/rMXBstEZy7U8ui3EwbJx2bk8LaLuX+1pcIkNYwtXgUceZIOm8rZ1LtdkG1v4IrJI1KktXPNeqJXbXBJ20AvnYvxZ8+xSi6NYLNZqwXYN0Zzw49v7Yn3x0KyN98/qzES/PrTwekm0TPxdJ74nvSDa9UTa6dbj8iY5+oGP1+pZi2W3EmZ47ef+ebcO2SW6W1j2O4uLZQ8RGmx8MWhzsezxwONoaGOQubO3WPZYiPTlWbgHiL5skN8uyh4zPl9kxMJ7843Iqlc+8GuXuWhh2yhm9sLA9lqkCqQDHtxtTKJfeCZkrJUv8hRJxZyFWHhbJ1rhzG+/+VRPPyHWapnZiRsY6v42g0suwwxqw0Cxg2GXdjCNibXkNWXcwE5l+oz/bgCjFiYLe/5zKeGhS7f6o+dzpSys+l/+gxQk7lIe3ERCqdtzV8p/kIKRZas/E9HM/LFUyo/eblfqZVe6czBuadirxP5UuiDZWjihfCzJSN6hQmY+okE5slje7jb3A1qOLLw2B6HXOOaD+ExuobhaD7isVYc2sMjzHZUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6DD/AVcGUOHUnReOAAAAAElFTkSuQmCC"
                  className="quotation-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" chooses row">
          <div
            className="process col-md-3"
            style={{ width: "34rem", height: "22rem" }}
          >
            <div>
              <p>
                The visa process can vary significantly depending on the country
                you plan to visit and your nationality.Here's a general overview
                of the typical steps involved in obtaining a visa for
                international travel.
              </p>

              <div className="test_img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoImpG6ePmcPlFPMSikVNlsop4yB-CKoW1SQ&usqp=CAU"
                  className="avatar-img-top"
                  alt="..."
                />
                <div>
                  <h3>Paru Nepal</h3>
                  <p>Student</p>
                </div>
                <img
                  src="data:image/png;base64,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"
                  className="quotation-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
