import { useEffect, useRef, } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {
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
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [listRefs]);

  return (
    <>
      {/* <!-- About Start --> */}

      <div className="container-fluid   py-3">
      <div id='header'>
        <p id='header-h1 '> Advancing Healthcare through Innovation and Excellence</p>
       
        </div>
       
        <div className=" p-5 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">
                Mission Statement
              </h4>
              <div className="paragraph_container" data-aos="fade-left">
                <p className="paragraph">
                At CureWave Pharmaceuticals, we are dedicated to pioneering innovative healthcare solutions that enhance patient well-being and advance medical science. Our commitment to excellence in healthcare services and products is unwavering. We strive to deliver cutting-edge research and adhere to the highest standards of quality assurance in all our endeavors. Through this commitment, we aim to make a meaningful impact on the health and well-being of individuals worldwide
                </p>
              </div>
              <h3 className="mb-4" data-aos="fade-left">
                Through our relentless dedication to:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Innovation: </b>We continuously develop cutting-edge
                    technology that simplifies complex GxP processes, fostering
                    agility and efficiency.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Collaboration: </b>We foster partnerships with our
                    clients, understanding their unique needs and building
                    solutions that drive success.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Compliance:</b>: We ensure our software adheres to the
                    highest GxP standards, providing peace of mind and
                    regulatory confidence.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    <b>Security: </b>We protect sensitive data with robust
                    security measures, mitigating risks and safeguarding patient
                    safety.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Scalability: </b>We design flexible solutions that adapt
                    to your evolving needs, supporting your growth journey.
                  </li>
                </ul>
              </div>
            </div>        
      </div>
      {/* <!-- About End --> */}
    </>
  );
}

export default About;
