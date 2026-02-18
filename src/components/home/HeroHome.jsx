import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrSchedules } from 'react-icons/gr';
import img from "../../assets/Home/ambulanceService.jpeg";
import img2 from "../../assets/Home/rescue-3735206_1920.jpg";
import img3 from "../../assets/Home/ambulance-2901017_1920.jpg";
import { Link } from 'react-router-dom';

const AboutHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_fz071h8",       // service id
      "template_7px1z7k",      // same template
      {
        form_type: "Hero Section",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        date: formData.date,
        message: "Booking request from Hero section",
      },
      "qo6SLdXEADDbP3U52"      // public key
    ).then(
      () => {
        alert("✅ Appointment request sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          date: "",
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send request. Try again.");
      }
    );
  };

  const images = [img, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`md:h-[100vh] overflow-hidden transition-all duration-500 ${fade ? "" : "blur-0"}`}
      style={{
        backgroundImage: `url("${images[currentImage]}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div className="h-[100%] w-[100%] md:px-20 px-4 bg-[#00000070] z-10 md:flex items-center py-4 md:py-0 justify-between gap-2">
        <div className="md:w-[50%] h-auto" data-aos="fade-up">
          <h1 className="text-[4.3vh] md:text-[4vw] leading-none font-[700] text-white mt-8 md:mt-0">
            Making Expert <br /> Ambulette Services for All
          </h1>
          <p className="text-[1.8vh] md:text-[1.3vw] mt-4 text-white">
            We provide reliable and comfortable non-emergency ambulette transportation services for medical appointments. We also accept Medicaid for non-emergency medical transport.
          </p>

          <div className='w-[100%] md:flex items-center gap-5 mt-5'>
            <a
              href="tel:+19175143080"
              className="flex items-center gap-2 justify-center bg-[#B82324] hover:bg-[#152C5B] transition-all duration-75 md:w-[50%] w-[80%] mx-auto py-3 rounded-md text-white"
            >
              <FaPhoneAlt /> CALL TO SCHEDULE
            </a>

            <Link
              to='/schedule'
              className='flex items-center gap-2 justify-center bg-[#152C5B] hover:bg-[#B82324] transition-all duration-75 md:w-[50%] w-[80%] mx-auto py-3 rounded-md text-white mt-3 md:mt-0'
            >
              <GrSchedules /> SCHEDULE ONLINE
            </Link>
          </div>
        </div>

        <div className="md:w-[50%] h-[100%] flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="p-4 rounded-md bg-white flex flex-col md:w-[60%] w-[100%] mt-8 md:mt-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-[#132870]">Need Transportation?</p>
            <h1 className="text-[#132870] font-bold text-xl mb-2">Book Now</h1>

            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className="border border-[#6e6c6c46] p-2 rounded-md mb-2"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#6e6c6c46] p-2 rounded-md mb-2"
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              className="border border-[#6e6c6c46] p-2 rounded-md mb-2"
              required
            />

            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border border-[#6e6c6c46] text-[gray] p-2 rounded-md mb-2"
              required
            >
              <option value="" disabled>Location</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Staten Island">Staten Island</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border text-[gray] border-[#6e6c6c46] p-2 rounded-md mb-2"
              required
            />

            <button
              type="submit"
              className="py-3 bg-[#132870] w-[80%] text-white md:mx-auto rounded-md flex items-center justify-center gap-1"
            >
              <IoIosCheckmarkCircle /> Make an Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
