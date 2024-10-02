import React from "react";

function Contact() {
  return (
    <div
      className="row m-auto"
      style={{ height: "100%", backgroundColor: "#ddd" }}
    >
      <div className="col-sm   mt-4 m-4" style={{ height: "80%" }}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9496972484685!2d73.86308457410004!3d18.531175168852396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f555bf965d%3A0x4dbf1000c873a42d!2sAISSMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1683641575679!5m2!1sen!2sin"
          width="550vw"
          height="500vh"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="col-sm bg-light m-4 " style={{ height: "80%" }}>
        <section className="m-4 col-sm ">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className=" mb-md-0 mb-5">
              <form action="https://formspree.io/f/mdovvpbj" method="POST">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label for="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label for="email" className="">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row  mb-3">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label for="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row  mb-3">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label for="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-lg btn-dark btn-block">
                  Submit Form
                </button>
              </form>

              {/* <div className="text-center text-md-left">
                                <a href="#action1" className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                            </div> */}
              <div className="status"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
