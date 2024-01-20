import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import FormContainer from "../components/formContainer";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../actions/studentActions";
import Loading from "../components/loader.jsx";
import Message from "../components/message.jsx";
import { STUDENT_UPDATE_RESET } from "../constants/studentConstant";
import Loader from "../components/loader";

const AboutUs = () => {

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <div className='about-container'>
        <h2>About Our Hostel Management System</h2>
        <p>
          Welcome to our Hostel Management System, an efficient and user-friendly solution designed to streamline hostel operations and enhance the overall experience for both administrators and residents.
        </p>
        <div className="images">
          <img className="img1" src='https://lh5.googleusercontent.com/p/AF1QipNs2P0zPBrOir6u35OMQ01_WSS2UIpvxhZ0PjI=w900-h1482-p-k-no' style={{ width: 300, height: 300 }}></img>
          <img className="img2" src='https://www.raiuniversity.edu/wp-content/uploads/Hostel-min.jpg' style={{ width: 300, height: 300 }}></img>
          <img className="img3" src='https://www.hiusa.org/wp-content/uploads/2020/04/sacramento-dorm-hiusa-1000x550-compressor-1-778x446.jpg' style={{ width: 300, height: 300 }}></img>
        </div>

        <h3>Mission Statement:</h3>
        <p>
          Our mission is to simplify the management of hostels, ensuring a comfortable and secure environment for residents while empowering administrators with the tools they need for effective oversight and control.
        </p>

        <h3>Key Features:</h3>
        <ul>
          <li>Room Allocation: Easily assign and manage room allocations for residents, keeping track of vacancies and occupancy status.</li>
          <li>Resident Profiles: Maintain comprehensive profiles for each resident, including personal information, contact details, and emergency contacts.</li>
          <li>Billing and Payments: Simplify billing and payment processes, allowing residents to pay rent and fees online.</li>
          <li>Attendance Tracking: Keep a record of resident check-ins and check-outs for improved security and attendance monitoring.</li>
          <li>Communication: Facilitate communication between administrators and residents through announcements, notices, and messaging features.</li>
          <li>Inventory Management: Manage hostel inventory and supplies efficiently.</li>
        </ul>

        <h3>Why Choose Our System:</h3>
        <ul>
          <li>User-Friendly: Our system is designed with a simple and intuitive interface for ease of use.</li>
          <li>Cost-Effective: An affordable solution that offers excellent value for money.</li>
          <li>Customization: Tailor the system to your specific hostel's needs.</li>
          <li>Customer Support: We provide dedicated customer support to assist you at every step.</li>
        </ul>

        <h3>Contact Us:</h3>
        <p>If you have any questions or need assistance, So please Contact Us </p>
        <ul>
          <li><b>+91 9879096790</b></li>
          <li><b>support@Presenceplus.com</b></li>
        </ul>
        <b>Thank you for choosing our PRESENCE+</b >
        {/* <p> We are dedicated to making hostel management hassle-free and efficient for you!</p> */}
        <br />
        <h3 class="copy-text">Copyright © 2023 PRESENCE+ - All Rights Reserved. </h3>

      </div>
    </>
  );
};

export default AboutUs;
