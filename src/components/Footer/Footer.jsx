import React ,{useEffect}from "react";
import "./footer.css";
import video from '../assest/fising.mp4';
import {BsSendCheck} from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaCaretRight} from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  // add a react hooks and scroll animation
  useEffect (()=>{
    Aos.init({duration: 2000}, [])
  })
  
  
  return (
    <section id="foot" className="footer">
      <div className="videoDiv">
        <video src={video} autoPlay loop muted></video>
      </div>
      <div data-aos="fade-left" className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-left" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with US</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-right" type="text" placeholder="Enter Your Email" />
            <button data-aos="fade-up" className="btn flex" type="submit">send
            <BsSendCheck className="icon" />
            </button>
          </div>
        </div>
        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerInfo flex">
            <div data-aos="fade-left" className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon"/>Travelista...
              </a>
            </div>

            <div data-aos="fade-left" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil tenetur odio obcaecati, ut eligendi repudiandae qui dicta dolore ullam iste, inventore ipsum autem. Quae temporibus delectus tempora porro accusantium.
            </div>

            <div data-aos="fade-left" className="footerSocial flex">
              <FaFacebook className="icon"/>
              <AiFillInstagram className="icon"/>
              <BsTwitter className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
                      {/* group one */}
            <div data-aos="fade-left" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Payment
              </li>
            </div>
                      {/* group two */}
            <div data-aos="fade-right" className="linkGroup">
              <span className="groupTitle">
                PARTINERS
              </span>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Bookings
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                RentCars
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                HostelWords
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Trivage
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                TripAdvisor
              </li>
            </div>
                      {/* group three */}
            <div data-aos="fade-up" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Dahab
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                London
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Los Anglos
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                New York
              </li>
              <li className="footerList flex">
                <FaCaretRight className="icon"/>
                Moroco
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVIL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - TRAVIESTA 2023 </small>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Footer;
