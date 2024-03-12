import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const listRefs = useRef([]);
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
const navigate=useNavigate()
  // useEffect(() => {
  //   if (listRefs.current) {
  //     ""
  //   }
  //   const observers = [];

  //   listRefs.current.forEach((listRef) => {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const listItems =
  //             listRef.current.querySelectorAll(".list-group-item");
  //           listItems.forEach((item) => {
  //             item.classList.add("list-item-animation");
  //           });
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     });

  //     if (listRef.current) {
  //       observer.observe(listRef.current);
  //     }
  //     observers.push(observer);
  //   });
  //   return () => {
  //     observers.forEach((observer) => observer.disconnect());
  //   };
  // }, [listRefs]);

  return (
    <>
      <div className="slider-container ">
        <MySlider />
      </div>

    <div className="p-3">
    <h3 className="mb-4" data-aos="fade-right">
                
              </h3>
              <div className="content_container">
                
                <div data-aos="fade-right" className="py-3 container">
                  <h3 className="home-h3">Business Area</h3>
                  <h5>Advancing Neurological Care</h5>
                  <p>As a patient-centric company, we are driven by the mission of developing groundbreaking 
                    treatments that address unmet medical needs and improve global health outcomes.
                     Our research and development efforts span across a wide range of therapeutic areas,
                      from infectious diseases to rare genetic disorders. We are committed to making our life-saving 
                      and life-changing medications accessible to patients worldwide, regardless of location or socioeconomic
                       background. Through strategic partnerships with public health organizations and access programs,
                        we strive to
                     create a future where everyone has the opportunity to live a healthy life</p>
                     <div onClick={()=>navigate("/businessareas")} className="read-more-btn">Read More...</div>

                </div>
                <div data-aos="fade-right" className="py-3 container">
                  <h3  className="home-h3">Manufacturing</h3>
                  <h5> From Science to Solution: Ensuring Quality Manufacturing</h5>
                  <p> Our state-of-the-art manufacturing facilities translate groundbreaking research into life-saving medications.
                     We employ rigorous quality control processes at every stage, from raw materials to final packaging.
                      Our commitment to cutting-edge technology and highly skilled personnel ensures
                     consistent production of safe and effective treatments for patients worldwide.</p>
                     <div onClick={()=>navigate("/manufacturing")} className="read-more-btn">Read More...</div>

                </div>
                <div data-aos="fade-right" className="py-3 container">
                  <h3 className="home-h3">
                    R & D
                  </h3>
                  <h5>Building Trust Through Transparency: Clinical Trial Excellence</h5>
                  <p> Rigorous clinical trials are the cornerstone of bringing safe and effective
                     treatments to patients. We conduct comprehensive clinical trials that adhere to the 
                     highest ethical standards. Transparency is key, allowing us to share research findings
                      openly and contribute to the advancement of medical knowledge. Patient safety is our top priority,
                       and we work closely with leading researchers and healthcare professionals
                     to ensure the well-being of participants throughout the trial process.</p>

                     <div onClick={()=>navigate("/features")} className="read-more-btn">Read More...</div>
                </div>
                <div data-aos="fade-right" className="py-3 container">
                  <h3 className="home-h3">About Us</h3>
                  <h5>Bridging the Gap Between Discovery and Delivery</h5>
                  <p> CureWave is a passionate force in the pharmaceutical landscape.
                     We bridge the critical gap between scientific discovery and delivering life-changing
                      treatments to patients in need. Our team translates promising research into tangible solutions,
                       accelerating drug development from lab bench to bedside. We are committed to collaboration,
                        working with researchers, clinicians, and healthcare providers
                     to ensure our medications reach those who will benefit most.</p>
                     <div onClick={()=>navigate("/about")} className="read-more-btn">Read More...</div>

                </div>
            
            
              </div>
    </div>

     
    </>
  );
}

export default Home;
