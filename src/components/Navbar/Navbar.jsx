import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {
  useEffect (()=>{
    Aos.init({duration: 2000}, [])
  })

  const [active, setActive] = useState('navBar');
  const navbarRef = useRef(null);

  useEffect(() => {
    // add event listener to the document object to close navbar on outside click
    const handleClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target) ) {
        setActive('navBar');
      }
    };

    document.addEventListener('mousedown', handleClick);

    // cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  return (
    <section className="navBarSection">
      <header data-Aos = "fade-down"  className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1 data-Aos = "fade-left"> <MdOutlineTravelExplore className="icon" /> Travelista </h1>
          </a>
        </div>

        <div className={active} ref={navbarRef}>
          <ul data-Aos = "fade-right" className="navLists flex">
            <li className="navItem">
              <a href="/src/components/Home" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="foot" className="navLink">Contact</a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </header>
      </section>
      );

};

export default Navbar;
