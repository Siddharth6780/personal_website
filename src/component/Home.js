import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../component/home.css";
import Typical from 'react-typical';

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="main_container">
          <div className="App">
            <div className="intro">Hello 👋, my name is</div>
            <div className="name">Siddharth</div>
            <div className="transition">
              And I'm a <span className="what_i_do">
                <Typical
                loop = {Infinity}
                wrapper='b'
                steps={[
                  'Programmer',
                  2000,
                  'Student',
                  2000,
                  'Developer',
                  4000,
                ]}
                />
                </span>
            </div>
            <div className="links_container">
            <SocialIcon className="links_2" url="https://github.com/Siddharth6780" fgColor="#fff" bgColor="black" />
            <SocialIcon className="links" url="https://www.linkedin.com/in/siddharthbit/" fgColor="#fff" />
            <SocialIcon className="links" url="https://www.facebook.com/siddhharth.singh.9" fgColor="#fff" />
            <SocialIcon className="links" url="https://twitter.com/siddharth6780" fgColor="#fff"/>
            </div>
            <div className="CV_tag"><a href="https://drive.google.com/file/d/1H63eOwzaUFHgufDCr03Js3NYpMAGXLoh/view?usp=sharing">Download CV</a></div>
          </div>
          <div className="image_animated">
            <img className="image_style" src="images.png" alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
