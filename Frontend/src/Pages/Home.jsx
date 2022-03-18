import React, { useContext, useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import UserContext from "./Context/LoggedUserContext";
import "./styles/Home.css";

import HomeCard from "./Components/HomeCard";
import {Winners, IntroCardsData} from "../data/homeCard";
import Slider from "./Components/Slider";

import Numbers from "../Components/Numbers";
import {IntroCards} from './Components/IntroCards';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [show, setShow] = useState(true);
  useEffect(()=>{
    AOS.init({duration:1000});
  }, [])

  return (
    <>
      <div className='home-main'>
        <div className='home-pic'>
          <Slider />
        </div>

        <div className='content'>
          {/* <button
            onClick={() => setShow(!show)}
            id='btntogglediv'
            className='btn'
          >
            Coding Club Objective
          </button>

          {show ? (
            <section className='objective-section'>
              <div className='objective'>
                <span>Coding Club </span>
                <p>
                  The AEC Coding Club started its journey on 11 April 2021. Its
                  major objective is to motivate students' interest in learning
                  various technologies and to obtain information about how
                  technology will be used to project work. The club's goal is to
                  encourage students to solve various challenging problems using
                  demanding technologies which include Python, Java, C, C++,
                  etc. Our approach will help students to become Industry Ready.
                  This will boost them to get Job. The AEC Coding Club actively
                  organizes various activities like Online Coding Contest,
                  Online Quiz Contest, etc. Other events like Expert's Talk,
                  Alumni Talk, and Hands-on practical workshops for various
                  programming basics are planned for the future.

                </p>
              </div>
            </section>
          ) : null} */}

          <div className="sections">
            <p className="section-heading"  data-aos="fade-up">
              WHO ARE WE ?
              <hr id="inro-head-hr"/>
            </p>
            <div className="intro-cards">
              {IntroCardsData.map((items,index)=>{
                return(
                  <IntroCards key={index} {...items}/>
                )
              })}
            </div>
          </div>
          <div className="sections" data-aos="fade-up">
            <p className="section-heading">
              Objectives
              <hr id="inro-head-hr"/>
            </p>
            <div className="section-text">
              <p className="section-text-body">
              The AEC Coding Club started its journey on 11 April 2021. Its
                  major objective is to motivate students' interest in learning
                  various technologies and to obtain information about how
                  technology will be used to project work. The club's goal is to
                  encourage students to solve various challenging problems using
                  demanding technologies which include Python, Java, C, C++,
                  etc. Our approach will help students to become Industry Ready.
                  This will boost them to get Job. The AEC Coding Club actively
                  organizes various activities like Online Coding Contest,
                  Online Quiz Contest, etc. Other events like Expert's Talk,
                  Alumni Talk, and Hands-on practical workshops for various
                  programming basics are planned for the future.
              </p>
            </div>
          </div>

          <div className='winners'>
            <h2 className='winners-heading'>Last Event Winners</h2>
            <div className='winner-cards'>
              {Winners.map((props) => {
                return <HomeCard key={props.id} data={props} />;
              })}
            </div>
          </div>

          <section className='aeccc-numbers'>
            <Numbers />
          </section>
        </div>

        <footer style={{ textAlign: "center" }}>
          <span>Copyright @AEC Coding Club</span>
        </footer>
      </div>
    </>
  );
};

export default Home;
