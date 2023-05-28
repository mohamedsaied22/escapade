import React ,{useEffect}from "react";
import "./home.css";
import video from '../assest/boat.mp4';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi';
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import {RiWhatsappFill} from 'react-icons/ri';
import "../Main/Main"
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
// add a react hooks and scroll animation
  useEffect (()=>{
    Aos.init({duration: 2000}, [])
  })
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} autoPlay muted loop type="video/mp4" ></video>

      <div className="homeContent container">
        <div className="textDiv">
          
          <span data-aos="fade-up" className="smallText">
            Our Packegs
          </span>
          
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holidays
          
          </h1>
        </div>

        <div data-aos="fade-down" className="cardDiv grid">
          <div  className="destinationInput">
            <label htmlFor="city">Search Your Destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here..." />
              <GrLocation className="icon"/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="month">Enter Your Date</label>
            <div className="input flex">
              <input type="month" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
            <label htmlFor="price">Max Price:</label>
            <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000"/>
            </div>
          </div>

          <div className="searchOptions flex">
          <HiFilter className="icon"/>
          <span>seach</span>
          </div>
        </div>

      <div data-aos="fade-right" className="homeFooterIcons flex">
        <div className="rigthIcons">
          <FaFacebook className="icon"/>
          <AiFillInstagram className="icon"/>
          <BsTwitter className="icon"/>
          
        </div>
        <div className="leftIcons">
        <BsMessenger className="icon"/>
        <RiWhatsappFill className="icon"/>
        </div>
      </div>  
      </div>
    </section>
  );
};

export default Home;