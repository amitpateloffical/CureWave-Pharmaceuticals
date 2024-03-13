import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GxpTrainig() {
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
      


<div className=" col-lg-12 ">
  <div className="img-fluid ">
    <img src="https://www.mankindpharma.com//media/images/cmspage/image/r&d-overview-banner-1548144778.jpg" alt="...." />
  </div>
</div>



      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="" data-aos="fade-right" >
                <img className="img-fluid researchimg" src="https://img.freepik.com/premium-photo/researcher-with-glass-laboratory-chemical-test-tubes-with-liquid-analytical-medical-pharmaceutical-scientific-research-concept_43284-1998.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="mb-4 " data-aos="fade-left">At CureWave, science is embedded in our ethos, as we wholeheartedly embrace Research and Development (R&D) as an essential component of our sustainable business strategy. Over the decades, we have invested strongly and strategically in cutting-edge technological advancements and innovative research activities.</h4>
            
              <div className="containt-data fs-5">Our paramount proficiency resides in our adeptness at excelling in the development of differentiated generic products, bolstered by our specialized teams in formulation development, process chemistry, and analytical development. This prowess significantly contributes to the establishment of a formidable competitive advantage.</div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5">
        <div className="container" style={{background:"#AFEEEE",paddingLeft:"20px", paddingTop:"30px", paddingBottom:"30px", borderLeft:"4px solid blue"}}>
          <div className="row align-items-center g-5">
            <div className="col-lg-9  wow fadeIn" data-wow-delay="0.5s" style={{fontSize: "19px", fontWeight: "500"}}>
            we're dedicated to trailblazing innovations in healthcare. Our Research & Development team is committed to pushing the boundaries of possibility to develop revolutionary treatments and therapies. Through constant exploration and collaboration with top experts, we're transforming the way diseases are managed and treated. With an unwavering focus on patient well-being and a deep understanding of medical needs, we're shaping the future of healthcare. Join us as we embark on this extraordinary journey towards a healthier world.
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-75 w-75 " data-aos="fade-right" >
                <img className="img-fluid  rounded" src="https://img.freepik.com/premium-photo/researcher-with-glass-laboratory-chemical-test-tubes-with-liquid-analytical-medical-pharmaceutical-scientific-research-concept_43284-1998.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
  );
}
