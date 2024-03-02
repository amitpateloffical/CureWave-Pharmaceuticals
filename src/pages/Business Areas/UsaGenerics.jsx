import './BusinessAreas.css';
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function UsaGenerics() {
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
                        <img src="https://ajantapharma.com/assets/frontend/images/inner_banner/businessareas_usa_generics.jpg" style={{ maxWidth: '100%' }} />
                    </picture>
                    <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right">USA - GENERICS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='businesspage'>
                    <div className="row">
                        <div className="linkerItem col-md-3">
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
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <div className="heading-business m-4" data-aos="fade-left">
                                    Ajanta Pharma has established itself as a meaningful niche player in the US generics market.
                                </div>
                                <div className="m-4 text-secondary" data-aos="fade-left">
                                    Our strategy is to have a selective play in this market with launching limited competition products. Currently we have 54 ANDA approvals (includes 2 tentative), out of which 44 are commercialized. Ajanta is awaiting US FDA approval for 22 ANDAs. We plan to file 6-8 ANDAs every year. All the products are marketed through our subsidiary Ajanta Pharma USA Inc. For more details on this subsidiary, please click here.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4">
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    We continue to work with all major distributors in the market with an impeccable service record which has strengthened our position as a partner of first-choice. We have received DIANA award three times for ‘Best Overall Generic Manufacturer’ in less than $100 million category.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UsaGenerics
