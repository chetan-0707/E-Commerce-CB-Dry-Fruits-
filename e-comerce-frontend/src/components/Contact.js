import React from "react";

import "./Contact.css";

import a from '../assets/Images/a.jpg';
import s from '../assets/Images/s.jpg';
import d from '../assets/Images/d.jpg';
import g from '../assets/Images/g.jpg';

function Contact(){



    return (


     <>
     <h2>Contact Us</h2>
   <div className="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">India</option>
      <option value="canada">UK</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
</div> 


    
</>
    
  );
   
};

export default Contact;