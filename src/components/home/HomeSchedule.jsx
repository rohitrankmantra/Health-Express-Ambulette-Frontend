import React, { useEffect, useState } from 'react'
import image from "../../assets/Home/rescue-3735206_1920.jpg"
import { LuBus } from 'react-icons/lu'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdArrowDropDown } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from "@emailjs/browser";

const HomeSchedule = () => {
    const [formData, setFormData] = useState({
        service: '',
        phone: ''
    });

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_fz071h8",        // ✅ your service ID
            "template_zd0t72q", // ✅ template ID (below)
            {
                service: formData.service,
                phone: formData.phone,
            },
            "qo6SLdXEADDbP3U52"       // ✅ public key
        ).then(
            () => {
                alert("✅ Appointment request sent!");
                setFormData({
                    service: '',
                    phone: ''
                });
            },
            (error) => {
                console.error("EmailJS Error:", error);
                alert("❌ Failed to send request");
            }
        );
    };

    return (
        <div
            className="relative w-full py-20 px-4 md:px-0 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            data-aos="fade-zoom-in"
            data-aos-delay="100"
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div
                className="relative z-10 md:w-[35%] w-full bg-white/30 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg text-[#132870]"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="text-[2.8rem] text-[#2E3192]">
                        <LuBus />
                    </div>
                    <h1 className="text-[1.3rem] md:text-[1.8rem] font-semibold leading-snug text-[#2E3192]">
                        Schedule Your Appointment <br />
                        <span className="text-[#132870] font-bold">Online Now</span>
                    </h1>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Service */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Select transportation service
                        </label>
                        <div className="relative">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full appearance-none bg-white text-[#132870] px-4 py-3 rounded-lg shadow-md font-semibold"
                            >
                                <option value="">Choose a service</option>
                                <option value="Livery">Livery</option>
                                <option value="Ambulette">Ambulette</option>
                                <option value="Wheelchair">Wheelchair</option>
                                <option value="2 Man Assist">2 Man Assist</option>
                            </select>
                            <MdArrowDropDown className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#132870]" />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Contact number
                        </label>
                        <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md gap-3">
                            <FaPhoneAlt className="text-[#2B5A8D] text-xl" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter phone number"
                                className="w-full text-[#132870] font-semibold focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#132870] hover:bg-[#0f1e4d] text-white font-semibold py-3 rounded-lg transition"
                    >
                        Book An Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HomeSchedule;
