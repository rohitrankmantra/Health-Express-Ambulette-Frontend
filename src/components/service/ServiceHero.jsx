import React, { useEffect, useMemo, useState } from "react";
import {
    FaHospitalSymbol,
    FaUserMd,
    FaStethoscope,
    FaWheelchair,
    FaAmbulance,
} from "react-icons/fa";
import ambulatteService from "../../assets/Home/ambulanceService.jpeg"
import ambulatteService2 from "../../assets/Home/ambulanceService2.jpeg"
import ambulatteService3 from "../../assets/Home/ambulanceService3.jpeg"
import MedicalTransportation1 from "../../assets/Home/PrivateMedicalTransportation.jpg"
import MedicalTransportation2 from "../../assets/Home/PrivateMedicalTransportation2.jpg"
import MedicalTransportation3 from "../../assets/Home/PrivateMedicalTransportation3.jpg"
import TwoMenAssistStairs from "../../assets/Home/TwoMenAssistStairs.jpg"
import TwoMenAssistStairs2 from "../../assets/Home/TwoMenAssistStairs.jpeg"
import TwoMenAssistStairs3 from "../../assets/Home/TwoMenAssistOverStairs.jpg"
import MedicaidAmbuletteService from "../../assets/Home/MedicaidAmbuletteService.jpg"
import MedicaidAmbuletteService2 from "../../assets/Home/MedicaidAmbuletteService2.jpg"
import MedicaidAmbuletteService3 from "../../assets/Home/MedicaidAmbuletteService3.webp"
import WheelchairHandicappedTransportation from "../../assets/Home/WheelchairHandicappedTransportation.jpeg"
import WheelchairHandicappedTransportation2 from "../../assets/Home/WheelchairHandicappedTransportation2.webp"
import WheelchairHandicappedTransportation3 from "../../assets/Home/WheelchairHandicappedTransportation3.jpg"

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const servicesData = [
    {
        title: "Ambulette Services",
        icon: <FaAmbulance className="text-[#2E3192] text-xl mr-2" />,
        description: `Ambulette Services – Ambulette Service Brooklyn & Ambulette Service Brooklyn NY
 Ambulette Service near me

Are you looking for a service that can take your patients or family members safely and carefully to the doctor? You can try using our ambulette service Brooklyn for this job. We are the Health Express Ambulette All City Transportation Ambulette Company, and we want to help people who need to get around.

Visits to the doctor : Older people and physically challenged individuals usually lack the help of family members and friends, particularly when attending the physician office. Our vans are state-of-the-art and hydraulic and this means that wheelchairs can easily reach clinics where they have doctor appointments. Our ambulette service Brooklyn NY ensures comfort, safety, and professional care for every passenger.

Transportation to the clinic : Have you ever been forced to transfer a patient, relative or friend to another hospital where there are better facilities and care? It is so challenging to find how to reach there without having to spend money on another ambulance. They are not able to get a personal cab or taxi since they are not wheelchair-friendly and can not be taken by an ambulance as it is only hired in an emergency situation. Health Express Ambulette also offers ambullette service Brooklyn to offer convenient yet reliable and affordable transfer.

Cities we serve
• Brooklyn
• Staten Island
• Queens
• Manhattan
• Bronx
• Nassau County

Our Ambulette Services are suitable for : 
We offer a lot more than just rides to and from the hospital and doctor’s offices. One of our strongest suits is our commitment to the passenger’s security and convenience. Our team also offers ambulette service Brooklyn NY for patients who need specialized care during transport.

The following patients are good candidates for our Wheelchair Handicapped Transportation Services:
• Cancer Patients
• Elderly
• Parkinson's Disease
• Alzheimer
• Spine or Back Injuries
• Special Needs Patients
• Rehabilitation Patients
• Extremely Weak Patients

Additionally, for quick and safe transfers across Brooklyn, we provide ambulette service Brooklyn and ambulette service Brooklyn NY for all patients needing professional transportation.`,
        images: [
            ambulatteService,
            ambulatteService2,
            ambulatteService3
        ],
    },
    {
        title: "Private Medical Transportation",
        icon: <FaUserMd className="text-[#2E3192] text-xl mr-2" />,
        description: `Private Medical Transportation Services NYC

Health Express Ambulette Inc. provides reliable and compassionate private transportation services for the disabled and non-emergency medical transportation NYC for individuals who require special assistance. Our non-emergency transportation services will serve the patients who require a comfortable ride to the medical centers, therapy centers, dialysis centers and hospital discharges.

Why Choose Us:
* Professional and trained drivers
* Clean and sanitized vehicles
* Punctual service and friendly service
* Flexible scheduling options

This Service is Ideal For:
* Post-surgical patients
* Dialysis patients
* Patients requiring regular treatment
* Family members seeking private, safe transport for loved ones

We offer private transportation services for the disabled and non-emergency medical transportation NYC across Staten Island, Brooklyn, and more. Let us handle the transportation so you can focus on care.`,
        images: [
            MedicalTransportation1,
            MedicalTransportation2,
            MedicalTransportation3,
        ],
    },
    {
        title: "Two Men Assist Over Stairs",
        icon: <FaStethoscope className="text-[#2E3192] text-xl mr-2" />,
        description: `Two Men Assist Over Stairs – Medical Transportation Services for Seniors

Seniors and patients with low mobility find it difficult to navigate staircases but Health Express Ambulette Inc. can do it safely and without stress. Medical transportation services for seniors with our company make sure that each step is taken with care, while our experienced staff also provides trusted transportation for seniors to medical appointments, so trips are smooth and comfortable.

We assist in:
• Stairs only buildings
• Complicated stair layouts
• Secure access and opening of houses.

Ideal for:
• Elderly patients
• Bariatric patients
• Patients with physical disabilities.
• Post-surgery individuals

All our transfers are based on dignity, safety, and peace of mind. By choosing our medical transportation service for seniors , you will never have to worry that every ride is not safe and comfortable.  We also offer reliable transportation for seniors to medical appointments, making sure patients arrive on time and with ease.`,
        images: [
            TwoMenAssistStairs,
            TwoMenAssistStairs2,
            TwoMenAssistStairs3
        ],
    },
    {
        title: "Medicaid Ambulette Service",
        icon: <FaHospitalSymbol className="text-[#2E3192] text-xl mr-2" />,
        description: `Medicaid Ambulette Service

We operate a Medicaid Ambulette Service, where patients are taken to medical appointments in safe, reliable and comfortable rides. Professional medicaid transportation NYC is also going to provide us with timely and stress-free transportation that will make healthcare accessible to everyone who is qualified to receive Medicaid.

We assist clients with:
• Medicaid medical appointments
• Dialysis visits
• Hospital admissions and discharges

Why trust Health Express Ambulette Inc. :
• State-approved vehicles
• Knowledgeable drivers trained in patient handling
• Seamless coordination with Medicaid facilities

We provide accessible, safe, and affordable transportation to all the trips covered by Medicaid in Staten Island, Brooklyn, and other areas. Our professional Medicaid Ambulette Service will offer patients safe and comfortable travel, and our dedicated Medicaid transportation NYC service will ensure that the patients can attend their medical appointments, therapy sessions, and other healthcare facilities without any worries.`,
        images: [
            MedicaidAmbuletteService,
            MedicaidAmbuletteService2,
            MedicaidAmbuletteService3
        ],
    },
    {
        title: "Wheelchair Handicapped Transportation",
        icon: <FaWheelchair className="text-[#2E3192] text-xl mr-2" />,
        description: `Wheelchair Handicapped Transportation services for Wheelchair patients

Our transportation services for wheelchair patients  ensure safe, comfortable, and on time by our wheelchair services to their medical appointments, hospitals or therapy sessions. Under a professional wheelchair transport service, the patients are guaranteed smooth and convenient movement and support on all their transportation requirements.

We provide:
• Safe, stress-free trips
• Assistance from door to doctor
• Friendly and respectful support

Best suited for:
• Permanent wheelchair users
• Temporary mobility-impaired patients
• Rehab attendees

Our transportation services for wheelchair patients in  Staten Island, Brooklyn, and beyond, offer safe and quality services to all mobility-impaired patients who need to have wheelchair transport services, medical visits, therapy, or even basic trips.`,
        images: [
            WheelchairHandicappedTransportation,
            WheelchairHandicappedTransportation2,
            WheelchairHandicappedTransportation3,
        ],
    },
];

const ServiceHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const index = useSelector((state) => state.index.index);
    const { slug } = useParams();
    const navigate = useNavigate();
    const slugs = useMemo(() => ([
        "ambulette-services",
        "private-medical-transportation",
        "two-men-assist-over-stairs",
        "medicaid-ambulette-service",
        "wheelchair-handicapped-transportation",
    ]), []);
    const slugToIndex = useMemo(() => ({
        "ambulette-services": 0,
        "private-medical-transportation": 1,
        "two-men-assist-over-stairs": 2,
        "medicaid-ambulette-service": 3,
        "wheelchair-handicapped-transportation": 4,
    }), []);

    useEffect(() => {
        if (!slug && Number.isInteger(index)) {
            setActiveIndex(parseInt(index));
        }
    }, [index, slug]);

    useEffect(() => {
        setSelectedImageIndex(0);
    }, [activeIndex]);
    
    useEffect(() => {
        if (slug && Object.prototype.hasOwnProperty.call(slugToIndex, slug)) {
            setActiveIndex(slugToIndex[slug]);
        } else if (slug) {
            setActiveIndex(0);
        }
    }, [slug, slugToIndex]);

    const { title, description, images } = servicesData[activeIndex];

    return (
        <section className="py-20 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Buttons */}
                <div className="lg:w-1/4 flex flex-col gap-4">
                    {servicesData.map((service, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setActiveIndex(idx);
                                localStorage.setItem("serviceIndex", idx);
                                navigate(`/services/${slugs[idx]}`);
                            }}
                            className={`flex items-center px-6 py-4 rounded-xl font-semibold text-lg transition border border-gray-300 hover:bg-[#2E3192] hover:text-white text-left ${idx === activeIndex
                                ? "bg-[#2E3192] text-white"
                                : "bg-gray-100 text-[#132870]"
                                }`}
                        >
                            {React.cloneElement(service.icon, {
                                className: `${idx === activeIndex ? "text-white" : "text-[#2E3192]"} text-xl mr-2`
                            })}
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Right Content */}
                <div className="lg:w-3/4 space-y-8">
                    {/* Large Main Image */}
                    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={images[selectedImageIndex]}
                            alt="Main"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImageIndex(i)}
                                className={`min-w-[90px] h-20 cursor-pointer rounded-xl overflow-hidden shadow-md border-2 ${selectedImageIndex === i
                                    ? "border-[#2E3192]"
                                    : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumb ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#132870]">
                        {title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
