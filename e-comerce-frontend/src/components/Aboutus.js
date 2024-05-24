import React from "react";

import "./Aboutus.css";

import Footer from '../components/Footer'

import a from '../assets/Images/a.jpg';
import s from '../assets/Images/s.jpg';
import d from '../assets/Images/d.jpg';
import g from '../assets/Images/g.jpg';

function Aboutus(){

    return (
        <>
    <div className="about-section">
    <h1>About Us</h1>
    <p>Incorporated in the year 1988, at Nashik (Maharashtra, India), we, "CB Dry Fruits", are prominent Trader and Wholesaler of premium quality range of cashew, almonds, raisins, dry figs,etc. This entire range of dry fruits is processed and hygienically packed in adherence to international quality standards with the aid of innovative technology under the supervision of our quality controllers. Owing to features such as high nutritional value, rich taste, freshness and longer shelf life, these products are widely demanded all across the globe. In addition to this, the offered dry fruit are available in various packaging options as per the precise requirement of clients at reasonable prices. We are backed with ultra-modern infrastructural base, which is the most significant asset of our organization and plays vital role in our phenomenal growth in this domain. This base is divided into various functional units like processing unit, quality testing unit, administrative unit, sales & marketing unit, warehousing & packaging unit and logistic unit. The systematic segregation of infrastructural base assists us in smooth and swift execution of entire business operation. The processing unit is equipped with the advanced machinery and tools that assist us in processing our product range at fast production rate. We are backed by an adept team of professionals, which is the strength of our organization assisting us in achieving the utmost level of client satisfaction.
</p>

    </div>
    {/* <br></br> */}
    {/* <h2>Our Team</h2>
    <br></br>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={a} alt="Jane" />
      <div className="container">
        <h2>Akshada Sonar</h2>
        <p className="title">Data Analyst</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={s}  alt="Mike" />
      <div className="container">
        <h2>Shravni Chate</h2>
        <p className="title">Software Engineer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={d}  alt="Mike" />
      <div className="container">
        <h2>Deva Bendkule</h2>
        <p className="title">Project Manager</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={g}  alt="Mike" />
      <div className="container">
        <h2>Gaurav Pawar</h2>
        <p className="title">UX Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  

  
</div>
      */}


<div className="responsive-container-block outer-container">
  <div className="responsive-container-block inner-container">
    <p className="text-blk section-head-text">
      Meet Our Expert Team
    </p>
    <p className="text-blk section-subhead-text">
      Cb Dryfruits !!
    </p>
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://img.playbook.com/QW8FScWdp2mMS4_VplmFSM7lTQw3xwlPAKR8NSz2QbE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc4ODY1ZTNm/LTRhOGEtNDgxYS04/YTE1LTRjODkxZDJi/YzRmNA"/>
          </div>
          <p className="text-blk name">
            Akshada Sonar
          </p>
          <p className="text-blk position">
          Data Analyst
          </p>
          <div className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://img.playbook.com/FTP386VoHWJZvXV5nYwvKL-upgyb0HV-Z5b26V4EyJA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZkMWJkMTQ5/LTlmM2QtNGE0Mi1h/Yjc5LWM4Njk0NmY4/NDYxMQ"/>
          </div>
          <p className="text-blk name">
            Shravni Chate
          </p>
          <p className="text-blk position">
          Software Engineer
          </p>
          <div className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://img.playbook.com/kC-am5QpWna4bdCGBgiOt9AAX65EmCG0-4o2nmDLCXs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQ4ZGI4ZDQx/LWMwZGUtNGNjZS1i/MmRhLWRmY2E1MTI0/MGZjNQ"/>
          </div>
          <p className="text-blk name">
            Deva Bendkule
          </p>
          <p className="text-blk position">
          Project Manager
          </p>
          <div className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://img.playbook.com/796BCkN7e-nwl-EDBha0kzj1sauNUIgYSoLfsxX0uXo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM4NzM3NDA0/LTlkMjctNDQ1OS1i/MjkzLTY4MDEwYjUz/NDI4Mg"/>
          </div>
          <p className="text-blk name">
          Gaurav Pawar
          </p>
          <p className="text-blk position">
          UX Designer
          </p>
          <div className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <Footer/> */}
</>
    
  );
   
};

export default Aboutus;