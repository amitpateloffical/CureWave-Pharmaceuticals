import React, { useEffect, useRef } from 'react'
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Manufacturing = () => {
    const listRefs = useRef([]);

    // useEffect(() => {
    //     AOS.init({ duration: 1400 });
    //     AOS.refresh();
    // }, []);

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
        <div className=''>
            <section className="innerBanner">
                <picture>
                    <img
                        className="responsive-image"
                        src="https://ajantapharma.com/assets/frontend/images/inner_banner/environment.jpg"
                        alt="Business Areas"
                        style={{ maxWidth: '100%' }}
                    />
                </picture>
            </section>
            <div className="container-fluid p-5   mt-4">
                <div >
                    <div className=" g-5 align-items-center slider-img">
                        <div>
                            <h1 className="Manu-about home-h3"> Our Commitment to Manufacturing Excellence</h1>
                            <p className="Manu-para">"Our commitment to manufacturing excellence ensures that patients and healthcare
                                professionals can trust in the safety and efficacy of every product bearing the CureWave Pharma name.
                                We are proud to be at the forefront of the pharmaceutical manufacturing industry,
                                delivering high-quality medicines that make a difference in people's lives."</p>


                        </div>
                    </div>
                </div>
            </div>

            <div className="content_container px-5 py-2">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item " data-aos="fade-left">
                    <b className='home-h3'>Multi-layered quality control: </b>Stringent checks are conducted throughout the production process, from raw material inspection to final product testing.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b className='home-h3'>Advanced monitoring systems: </b>Real-time monitoring ensures consistent production conditions and immediate detection of any potential deviations.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b className='home-h3'>Continuous improvement:</b>We actively invest in research and development to adopt the latest advancements in manufacturing technology and best practices.
                  </li>

                
                </ul>
              </div>

            
            <div className=" p-5">
                <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid blue" }} >
                    <div className="  wow  p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }} data-aos="">
                    Our state-of-the-art manufacturing facilities are the engines that turn scientific breakthroughs into tangible solutions. We employ rigorous quality control measures at every stage, from meticulously sourced raw materials to final product packaging. Our facilities are equipped with cutting-edge technology and staffed by highly skilled personnel, ensuring consistent production of safe and effective medications for patients worldwide. This unwavering commitment to precision manufacturing allows us to deliver life-saving treatments with the highest quality standards.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manufacturing