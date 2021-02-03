import React from 'react';
import {Link} from 'react-router-dom';
import News1 from '../images/resort_demand.jpg';
import News2 from '../images/beach_cleanup.jpeg';
import News3 from '../images/Lifeguard.jpg';
import News4 from '../images/Partyban.jpeg';

import { FaFacebookF, FaTwitter,FaLinkedinIn, FaAngleRight, FaHeart, FaGoogle, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            <footer className="area">
                <div className="foo_top_header_one section_padding_100_70">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="part">
                                    <h5>About Us</h5>
                                    <p>This is one of the top properties on Island and is just across the street from the beach. The resort has a very luxe, Texas-style, hacienda vibe, with grand public spaces featuring wood-beamed accents and extra high ceilings with curved archways and columns.</p>
                                    <p>The rooms here are plush, with a beach ambience and very comfy beds.The resort's swimming pool is stellar, with vine-covered columns surrounding it and a whirlpool at one end. The spa is also excellent and has more outdoor Jacuzzis. There is also a popular restaurant here.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="part">
                                    <h5>Tags</h5>
                                    <ul className="widget">
                                        <Link to="/">Class</Link>
                                        <Link to="/">Beachvbes</Link>
                                        <Link to="/">Travel</Link>
                                        <Link to="/">Beachresor</Link>
                                        <Link to="/">Vacation</Link>
                                        <Link to="/">Beachview</Link>
                                        <Link to="/">Beachday</Link>
                                        <Link to="/">Travelgram</Link>
                                    </ul>
                               </div>

                                <div className="part m-top-15">
                                    <h5>Important Links</h5>
                                    <ul className="links">
                                        <Link to="/"><i><FaAngleRight /></i>Terms & Conditions</Link>
                                        <Link to="/"><i><FaAngleRight /></i>About Licences</Link>
                                        <Link to="/"><i><FaAngleRight /></i>Help & Support</Link>
                                        <Link to="/"><i><FaAngleRight /></i>Privacy Policy</Link>
                                        <Link to="/"><i><FaAngleRight /></i>Community & Forum</Link>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="part">
                                    <h5>Latest News</h5>


                                    <div className="blog_area">
                                        <div className="thumb">
                                            <img className="img-fluid" src={News1} alt="" />
                                        </div>
                                        <Link to="/">Resorts are seeing increased demand</Link>
                                        <p className="date">1 Feb 2021</p>
                                    </div>

                                    <div className="blog_area">
                                        <div className="thumb">
                                            <img className="img-fluid" src={News2} alt="" />
                                        </div>
                                        <Link to="/">Beach clean up drives pick up steam in Goa</Link>
                                        <p className="date">29 Jan 2021</p>
                                    </div>

                                    <div className="blog_area">
                                        <div className="thumb">
                                            <img className="img-fluid" src={News3} alt="" />
                                        </div>
                                        <Link to="/">Lifeguards traces 5-year-old missing girl on beach</Link>
                                        <p className="date">18 Jan 2021</p>
                                    </div>

                                    <div className="blog_area">
                                        <div className="thumb">
                                            <img className="img-fluid" src={News4} alt="" />
                                        </div>
                                        <Link to="/">No new year bash due to Covid</Link>
                                        <p className="date">29 Dec 2020</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="part">
                                    <h5>Quick Contact</h5>
                                    <div className="single_contact_info">
                                        <p>+91 25341 12345</p>
                                        <p>info.bechresort@gmail.com</p>
                                        <p> 2024 Seawall Blvd, Galveston, Galveston Island, India</p>
                                    </div>

                                </div>

                                <div className="part m-top-15">
                                    <h5>Follow us</h5>

                                    <ul className="social">
                                        <li className="soicial-margin">
                                            <Link to="/">
                                                <i className="fa fa-facebook"><FaFacebookF /></i>
                                            </Link>
                                        </li>
                                        <li className="soicial-margin">
                                            <Link to="/">
                                                <i className="fa fa-twitter"><FaTwitter /></i>
                                            </Link>
                                        </li>
                                        <li className="soicial-margin">
                                            <Link to="/">
                                                <i className="fa fa-google"><FaGoogle /></i>
                                            </Link>
                                        </li>
                                        <li className="soicial-margin">
                                            <Link to="/">
                                                <i className="fa fa-linkedin"><FaLinkedinIn /></i>
                                            </Link>
                                        </li>
                                        <li className="soicial-margin">
                                            <Link to="/">
                                                <i className="fa fa-instagram"><FaInstagram /></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_header_one section_padding_50 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>© All Rights Reserved by <Link to="/"> Beach Resort <i><FaHeart /></i></Link></p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default ContactUs
