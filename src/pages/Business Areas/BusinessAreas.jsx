import { Link } from 'react-router-dom';
import './BusinessAreas.css';
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../../components/Footer';

function BusinessAreas() {
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
            <div className="BusinessArea">
                <section className="innerBanner">
                    <picture>
                        <img
                            className="responsive-image"
                            src="https://www.monopharma.in/img/slide7.jpg"
                            alt="Business Areas"
                            style={{ maxWidth: '100%' }}
                        />

                    </picture>

                    {/* <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right"></h1>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>

                <div className='businesspage'>
                    <div className="p-3 ">
                        {/* <div className="col-md-3">
                            <div className="container mt-5">
                                <div className="card p-4 bg-light">
                                    <div className='d-flex flex-column align-items-start'>
                                        <Link to="/businessareas" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Overview</button></Link>
                                        <Link to="/indiabranded" data-aos="fade-right"> <button className='btn btn-warning mb-1'>India-Branding Generics</button></Link>
                                        <Link to="/emergingmarkets" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Emerging Markets - Branded Generics</button></Link>
                                        <Link to="/usgenerics" data-aos="fade-right"> <button className='btn btn-warning mb-1'>USA - Generics</button></Link>
                                        <Link to="/africainstitution" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Africa - Institution Business</button> </Link>
                                    </div>
                                </div>
                            </div>
                            <img src=''/>
                        </div> */}
                        <div className="">
                            <div className="">
                                <div className="heading-business py-3" data-aos="fade-left">
                                Empowering Healthcare Professionals: Partnering for Optimal Patient Care
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4">
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                At CureWave, we recognize the crucial role healthcare professionals play in delivering exceptional patient care. We go beyond simply developing medications; we strive to be a trusted partner by providing
                                </div>
                            </div>
                        </div>
                       
              <div className="content_container py-2">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b className='home-h3'>Comprehensive educational resources: </b>We offer in-depth information on our products, including their mechanism of action, clinical data, and best practices for patient management.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b className='home-h3'>Collaboration and support: </b>We actively engage with healthcare professionals through workshops, conferences, and ongoing dialogue to address their needs and ensure optimal use of our medications.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b className='home-h3'>Commitment to innovation:</b>:We share our research findings and development pipeline openly, fostering collaboration and keeping healthcare professionals informed about the latest advancements in treatment options.
                  </li>

                
                </ul>
              </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default BusinessAreas;
