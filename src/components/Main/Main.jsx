import React ,{useEffect}from "react";
import './main.css'
import {BiCurrentLocation} from 'react-icons/bi';
import {GiArmoredBoomerang} from 'react-icons/gi';

import img from '../assest/bankok.png';
import img2 from '../assest/dahab.png';
import img3 from '../assest/dubai.png';
import img4 from '../assest/istanbul.png';
import img5 from '../assest/london.png';
import img6 from '../assest/paris.png';
import img7 from '../assest/singaphore.png';
import img8 from '../assest/tokyo.png';

import Aos from 'aos';
import 'aos/dist/aos.css'

//Array of named data 
const data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: 'Bangkok',
    location: 'Thailand',
    grade: 'CULTRURAL RELAX  ',
    fees: '$700',
    description: 'Known for its vibrant street life and cultural landmarks, Bangkok boasts a unique blend of traditional and modern elements.',
  },


  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Dahab',
    location: 'Egypt',
    grade: 'CULTRURAL RELAX  ',
    fees: '$500',
    description: 'Dahab in Egypt is a popular destination for diving and snorkeling enthusiasts, with its clear blue waters and vibrant coral reefs. The town also offers a laid-back, bohemian atmosphere, making it a great place to relax and unwind. .',
  },


  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Dubai',
    location: 'United Arab Emirates',
    grade: 'CULTRURAL RELAX  ',
    fees: '$1000',
    description: 'A cosmopolitan city with towering skyscrapers, luxury shopping, and desert adventures, Dubai is a destination that offers a unique experience of modernity and tradition.',
  },


  {
    id: 4,
    imgSrc: img4,
    desTitle: 'Istanbul',
    location: 'Turkey',
    grade: 'CULTRURAL RELAX  ',
    fees: '  $700',
    description: 'Located at the crossroads of Europe and Asia, Istanbul is a city that blends Eastern and Western cultures, offering visitors a diverse range of experiences.',
  },


  {
    id: 5,
    imgSrc: img5,
    desTitle: 'London',
    location: 'United Kingdom',
    grade: 'CULTRURAL RELAX  ',
    fees: '$800',
    description: 'A global hub of finance, fashion, and entertainment, London is a city with a rich history and a diverse population..',
  },


  {
    id: 6,
    imgSrc: img6,
    desTitle: 'Paris',
    location: 'Paris',
    grade: 'CULTRURAL RELAX  ',
    fees: '$700',
    description: 'The City of Love and Lights, Paris is home to iconic landmarks such as the Eiffel Tower and the Louvre Museum, and is renowned for its art, culture, and cuisine..',
  },


  {
    id: 7,
    imgSrc: img7,
    desTitle: 'Singapore',
    location: 'Singapore',
    grade: 'CULTRURAL RELAX ',
    fees: '$1200',
    description: 'A small island city-state, Singapore is known for its cleanliness, efficiency, and multiculturalism, and is a popular destination for foodies and shoppers..',
  },


  {
    id: 8,
    imgSrc: img8,
    desTitle: 'Tokyo',
    location: 'Japan',
    grade: 'CULTRURAL RELAX   ',
    fees: '$400',
    description: 'A city of contrasts,Tokyo is a mix of traditional and modern elements, offering visitors a glimpse into Japans rich history and cutting-edge technology.',
  },

]


const Main = () => {
  // add a react hooks and scroll animation
  useEffect (()=>{
    Aos.init({duration: 2000}, [])
  })
  return (
    <section  className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-down" className="title">
          Mosy Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
        
        {
          data.map(({id, imgSrc, desTitle, location, grade, fees, description})=> {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className='content flex'>
                    <BiCurrentLocation className="icon"/>
                    <span className="location">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                    <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button data-aos="fade-left" className='btn flex'>
                  Details <GiArmoredBoomerang className="icon" />
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  );
}

export default Main;
