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
      <BreadCrumb page="About Us" />

      {/* <!-- About Start --> */}

      <div className="container-fluid   py-3">
      <div id='header'>
        <h1 id='header-h1'>About us</h1>
        </div>
       
        <div className="container py-4">
          <div className="row g-2 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h3 className=" text-center fs-2 pt-3">
              CureWave Pharmaceuticals: Advancing Healthcare through Innovation and Excellence
              </h3>
              <div className="paragraph_container ">
                <p className="paragraph fs-5 pt-2">
                CureWave Pharmaceuticals is a pioneer of innovation and excellence in the healthcare industry. Our relentless commitment to advancing medical science and improving patient outcomes is the cornerstone of our operations. By spearheading groundbreaking research and development initiatives, we are at the forefront of developing novel treatments for a wide range of diseases and medical conditions. Through the application of cutting-edge technologies and the utilization of top-tier expertise, we remain dedicated to pushing the boundaries of what is possible in healthcare.
                </p>
              </div>
              <p className="mb-4"></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/premium-photo/medicine-bottle-colorful-pills_785361-341.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              // data-aos="fade-left"
              data-wow-delay="0.5s"
            >
              <p className="mb-4"></p>

              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Innovative Solutions: </b>
                    CureWave Pharmaceuticals pioneers innovative healthcare solutions.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Excellence in Healthcare: </b>
                    Committed to delivering excellence in healthcare services and products.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Cutting-edge Research:</b> Engaged in groundbreaking research to advance medical science.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Continuous Improvement: </b>  Strives for continual improvement and evolution in healthcare practices.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Industry Collaboration: </b>Actively collaborates with healthcare professionals and organizations to enhance healthcare outcomes.
                  </li>
                   
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
<div></div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-right">
                By partnering with CureWave Pharmaceuticals, you can:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-right">
                    <b>   Commitment to Excellence: </b>
                   Dedication to excellence in every aspect of healthcare provision.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Visionary Leadership:</b> Guided by visionary leadership committed to transforming healthcare.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Leaders in Innovation:</b>  Recognized as leaders in driving innovation within the pharmaceutical industry.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Quality Assurance:</b> Ensures the highest standards of quality and safety in all pharmaceutical products.
                  </li>
                </ul>
              </div>

              <div
                className="ps_paragraph_container mt-2 bg"
                data-aos="fade-right"
              >
                <h5 className="ps_paragraph">
                Contact CureWave Pharmaceuticals today to explore our innovative healthcare solutions.


                </h5>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/pills-white-surface_144627-3165.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About End --> */}
      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn "
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="aboutsimg">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/aged-man-chemist-store-asking-pharmacist-medical-opinion-needing-treatment-cardiac-arrest-prevention-druggist-helping-old-shopper-choose-best-pharmaceutical-drug-heart-problems_482257-70201.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">
                Quality Policy
              </h4>
              <div className="paragraph_container" data-aos="fade-left">
                <p className="paragraph">
                At CureWave Pharmaceuticals, we prioritize quality as the cornerstone of our operations. We have established robust quality policies to ensure the safety, efficacy, and reliability of our products. By adhering to stringent regulatory standards, implementing rigorous testing processes, and embracing continuous improvement, we strive to consistently deliver excellence. Our commitment to quality is unwavering, and we remain dedicated to maintaining the highest standards in everything we do.
                </p>
              </div>
              {" "}
              <h3 className="mb-4" data-aos="fade-left">
                By partnering with CureWave Pharmaceuticals, you can:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Global Impact: </b> CureWave Pharmaceuticals strives to make a meaningful impact on a global scale by improving access to healthcare and advancing medical science.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Ethical Standards: </b> We adhere to the highest ethical standards in all aspects of our operations, ensuring transparency and integrity in our business practices.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Community Engagement: </b> Committed to giving back to the community, CureWave Pharmaceuticals actively participates in philanthropic initiatives and supports healthcare initiatives in underserved regions.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    <b> Sustainability: </b> We are dedicated to environmentally sustainable practices, minimizing our ecological footprint and promoting eco-friendly solutions in pharmaceutical manufacturing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              {/* <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div> */}
              <h3 className="mb-4" data-aos="fade-right">
                To achieve these goals, we will:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-right">
                  Allocate resources towards research and development efforts to foster innovation and develop groundbreaking healthcare solutions.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                  Establish robust quality management systems to ensure adherence to the highest standards of quality and safety in all pharmaceutical products and processes.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                  Promote a culture of continuous improvement within the organization, encouraging employees to identify areas for enhancement and implement innovative solutions.
                  </li>

                  <li className="list-group-item" data-aos="fade-right">
                  Strengthen relationships with customers by actively seeking feedback, understanding their needs, and tailoring products and services to meet their expectations.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                  Collaborate with healthcare professionals, research institutions, and industry partners to drive innovation, share knowledge, and advance healthcare outcomes.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                  Integrate sustainable practices into operations, including reducing waste, minimizing environmental impact, and promoting eco-friendly initiatives.
                  </li>
                </ul>
              </div>
              <div
                className="ps_paragraph_container mt-2 bg"
                data-aos="fade-right">
                <h5 className="ps_paragraph">
                  We are committed to providing our customers with the highest
                  quality products and services possible. We believe that our
                  quality policy is a key factor in our success and we are
                  committed to its continuous improvement.
                </h5>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/premium-photo/medicine-pill-capsules-fallling-with-blue-background-healthcare-medical-3d-illustration-background_518421-301.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
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
        </div>
      </div>

     
    </>
  );
}

export default About;
