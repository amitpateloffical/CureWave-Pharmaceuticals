import BreadCrumb from "../components/BreadCrumb"
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ""
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });
  }, []);
  return (
    <>

      <BreadCrumb page="Contact Us" />

      {/* <!-- Contact Start --> */}
      <div className="container-fluid section2 bgcontactimg  py-4">
        <div className="container">
          <div className="row g-5  pt-5 d-flex">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.2s">
              <div className="abouts pt-5" data-aos="fade-right">
                <h1 className="contact-h2" data-aos="fade-left"> Contact Us</h1>
                <h5 className="contact-p">We would like to hear from you</h5>
      

              </div>
            </div>

            <div className="container-fluid  col-lg-7">
              <div className="container  " data-aos="fade-left">
                <div className="mx-auto text-center wow fadeIn " data-wow-delay="0.1s" style={{ 'max-width': '500px' }}>
                </div>
                <div className="row justify-content-center ">
                  <div className="col-lg-7 contact-bg px-3 py-5">
                    <div className="wow fadeIn" data-wow-delay="0.3s">
                      <form>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="contactbt">Name</label>
                            <input type="text" className="form-control" id="contact-form-border" placeholder="Your Name" />
                          </div>
                          <div className="col-md-6">
                          <label className="contactbt">Email</label>
                            <input type="email" id="contact-form-border" className="form-control" placeholder="Your Email" />
                          </div>
                          <div className="col-12">
                          <label className="contactbt">Subject</label>
                            <input type="text" className="form-control" id="contact-form-border" placeholder="Subject" />
                          </div>
                          <div className="col-12">
                          <label className="contactbt">Message</label>
                            <textarea className="form-control" placeholder="Leave a message here" id="contact-form-border" style={{ 'height': '100px' }}></textarea>
                          </div>
                          <div className="contactbt">
                            By submiting this form, You agree to our Privacy policy
                          </div>
                          <div className="col-12">
                            <button id="btn-theme" className="btn btn-success w-100 py-2" type="submit">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
