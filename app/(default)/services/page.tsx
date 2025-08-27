
import Image from "next/image";
import EnquiryForm from "@/components/Forms/Enquiry";
import { Metadata } from "next";
import ServiceComponent from "@/components/ServiceComponent";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaCalendarDays, FaEnvelope, FaPhone } from "react-icons/fa6";
import { ServiceData } from "@/context/data";
import ServiceCards from "@/components/ServiceCards";
import Achievements from "@/components/Achievements";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Design Services in Coimbatore | LivStyle Homes – Residential & Commercial",
  description: "Transform your space with LivStyle Homes, the leading interior designers in Coimbatore. Offering expert residential, office, and commercial designs in Saravanampatty, RS Puram, and more. Get a free consultation today!",
  alternates: {
    canonical: "https://livstylehomes.com/services",
  },
};

export default function Services() {
  return (
    // <main className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full overflow-hidden mt-40">
    //   <h1 className="text-3xl md:text-4xl font-bold text-teal-700">Services We Offer</h1>
    //   <section className="flex flex-col items-center justify-center w-full my-5 text-center gap-5 px-4">
    //     <div className="flex items-center justify-center w-64">
    //       <Image src={"/images/Brand/brand.svg"} alt={"Livstyle Homes Logo"} height={500} width={500} className="w-full" priority />
    //     </div>
    //     <h1 className="text-xl md:text-2xl font-semibold text-teal-700">Bringing Your Dream Spaces to Life</h1>
    //     <p className="font-medium md:text-lg">At Livstyle Homes, we specialize in creating stunning interiors and exteriors that blend functionality, aesthetics, and modern Indian sensibilities. Our diverse range of services caters to residential, commercial, and outdoor spaces, ensuring that every corner of your dream space reflects your unique personality and style.</p>
    //   </section>
    //   <h2 className="text-4xl font-bold text-teal-700 text-center">Our Signature Services</h2>
    //   <ServiceComponent />
    //   <section className="flex flex-col md:flex-row items-center justify-center gap-5 my-5 w-full px-4">
    //     <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-2/3">
    //       <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center">Ready to Redefine Your Space?</h2>
    //       <p className="md:text-lg text-center">Get started with Livstyle Homes today. Whether you’re building your dream home, upgrading your office, or redesigning your kitchen, we’re here to make your vision a reality. Contact us for a consultation and take the first step toward your dream interiors.</p>
    //     </div>
    //     <div className="w-full lg:w-1/3 flex items-center justify-center">
    //       <EnquiryForm />
    //     </div>
    //   </section>
    // </main>
    <main className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full overflow-hidden">
      <section className="flex flex-col items-center justify-center max-w-2xl text-center gap-3 min-h-screen">
        <h1 className="text-3xl md:text-6xl font-bold leading-none text-teal">Interior Design Services</h1>
        <p className="text-gray-800 text-sm md:text-lg">Creating stunning interiors that blend functionality, aesthetics, and modern sensibles. From residential to commercial spaces, we bring your vision to life.</p>
        <div className="w-full flex items-center justify-center gap-5">
          <Button className="bg-black">Explore Services</Button>
          <Button>Free Consultation</Button>
        </div>

        <Link href={"#services"} className="mt-14 flex flex-col items-center justify-center gap-3 text-gray-700 group hover:text-teal-600 smooth">
          <span className="text-sm">Discover Our Services</span>
          <FaArrowDown className="animate-bounce" />
        </Link>
      </section>

      <section id="services" className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center max-w-xs md:max-w-3xl gap-5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-none text-teal">Our Signature Services</h2>
          <p className="text-gray-800 text-sm md:text-lg">From the concept to completion, we deliver exceptional interior design solutions tailored to your unique needs and lifestyle.</p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-5 mb-10 p-2">
          {ServiceData.map((service, index) => (
            <ServiceCards key={index} img={service.images[0]} title={service.title} description={service.description} feat={service.offer} />
          ))}
        </div>
      </section>

      <Achievements />

      <section className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full mb-5 p-3">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-2 px-4 p-2">
          <h2 className="text-xl md:text-4xl font-bold leading-tight text-teal">Ready to Transform Your Space?</h2>
          <p className="text-gray-700 text-xs md:text-lg">Let's bring your vision to life. Our expert team is ready to create something beautiful together.</p>
          <ul className="list-inside">
            <li className="indent-8 relative flex flex-col items-start justify-center">
              <span className="text-sm md:text-lg font-semibold">Free Consultation</span>
              <span className="text-gray-700 text-xs md:text-base">Get expert advice and project assessment at no cost</span>
              <span className="bg-black rounded-full w-3 h-3 absolute transform top-1.5 left-1.5"></span>
            </li>
            <li className="indent-8 relative flex flex-col items-start justify-center my-3">
              <span className="text-sm md:text-lg font-semibold">Personalized Design</span>
              <span className="text-gray-700 text-xs md:text-base">Tailored solutions that reflect your unique style</span>
              <span className="bg-black rounded-full w-3 h-3 absolute transform top-1.5 left-1.5"></span>
            </li>
            <li className="indent-8 relative flex flex-col items-start justify-center">
              <span className="text-sm md:text-lg font-semibold">Full Project Management</span>
              <span className="text-gray-700 text-xs md:text-base">End-to-end service from concept to completion</span>
              <span className="bg-black rounded-full w-3 h-3 absolute transform top-1.5 left-1.5"></span>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center justify-start w-full gap-3 md:gap-5 my-8">
            <div className="flex items-center justify-center gap-2">
              <FaPhone className="text-teal-600 text-lg md:text-xl" />
              <span>+91 8610933642</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-teal-600 text-lg md:text-xl" />
              <span>livstylehomescbe@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-2">
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
