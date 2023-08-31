import React from 'react';
import gitterImage from '../img/gitter.jpg';

const AboutMe = () => {
  return (
    <div className="about">
      <div className="aboutBackground">
        <img src={gitterImage} alt="Background" />
      </div>
      <div className="aboutContent">
        <h2>About Me</h2>
        <p>
          This page was built by a woman named Edan. It serves as a platform for people to find bands, as well as to help those starting bands find customers. We are dedicated to promoting and supporting talented musicians in their journey to success.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
