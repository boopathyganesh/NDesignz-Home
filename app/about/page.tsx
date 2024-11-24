import Connect from "@/components/Connect";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About LivStyle Homes",
  description: "Learn more about LivStyle Homes and our journey.",
  alternates: {
    canonical: "https://livstylehomes.com/about",
  },
};
export default function Home() {
  return (
    <main className="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto w-full flex flex-col items-center justify-center px-5 xl:px-0">
      <section className="flex flex-col items-center justify-center mt-28">
        <div className="max-w-96 w-full flex items-center justify-center">
          <Image src={"/images/Brand/brand.svg"} alt={""} height={500} width={500} className="w-full" />
        </div>
        <div className="text-center flex items-center justify-center">
          <p className="text-xl font-medium">Welcome to <span className="text-teal font-medium">Livstyle Homes</span>—where dreams take shape, and spaces come alive. Based in the vibrant city of Coimbatore, <span className="text-teal font-medium">Livstyle Homes</span> is more than just an interior design company; we are creators, innovators, and visionaries dedicated to crafting exceptional spaces for our clients. From cozy homes to dynamic commercial environments, we specialize in designing interiors that are both beautiful and functional, each one carefully tailored to the unique needs and aspirations of our clients.</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 my-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-700">Who We Are</h1>
        <p className="text-base md:text-lg">Founded on a passion for artistry, craftsmanship, and the transformative power of design, <span className="text-teal font-medium">Livstyle Homes</span> has rapidly become a trusted name in Coimbatore’s interior design industry. Our team is composed of highly skilled and experienced designers, artisans, and project managers who bring a wealth of knowledge from the ever-evolving world of interior design. With a strong commitment to excellence and innovation, we work tirelessly to create spaces that inspire and elevate.</p>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 mb-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-700">Our Mission</h1>
        <p className="text-base md:text-lgtext-lg">At <span className="text-teal font-medium">Livstyle Homes</span>, our mission is simple yet profound: to create timeless, inspiring spaces that reflect the personality and lifestyle of each client. We believe that great design has the power to improve lives, and we approach every project with the goal of enhancing both form and function in the environments we shape. Whether it's a luxurious residential haven or a sleek commercial workspace, our designs are meant to enhance quality of life and bring joy to all who experience them.</p>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 mb-10">
        <h1 className="text-3xl font-semibold text-teal-700 text-center">Our Core Values</h1>
        <ul className="list-decimal list-inside flex flex-col items-center justify-center gap-5 text-base md:text-lg px-5">
          <li>
            <span className="text-xl font-semibold text-teal-700">Creativity and Innovation</span>
            <p>We push the boundaries of design to create spaces that are unique, stylish, and in tune with the latest trends. Innovation is at the heart of everything we do, as we continuously explore new ideas, materials, and techniques to bring fresh perspectives to each project.</p>
          </li>
          <li>
            <span className="text-xl font-semibold text-teal-700">Client-Centric Approach</span>
            <p>Our clients are at the core of our design philosophy. We take the time to understand their vision, preferences, and lifestyle, ensuring that each project is a true reflection of their identity. We believe in clear, open communication and pride ourselves on delivering a smooth, enjoyable experience from start to finish.</p>
          </li>
          <li>
            <span className="text-xl font-semibold text-teal-700">Quality and Attention to Detail</span>
            <p>Excellence is in the details. From concept to execution, we maintain the highest standards of quality, ensuring that every aspect of a project is meticulously crafted. We source only the finest materials and work with skilled artisans to bring our designs to life.</p>
          </li>
          <li>
            <span className="text-xl font-semibold text-teal-700">Sustainability and Responsibility</span>
            <p>As designers, we understand our responsibility to the environment. We strive to incorporate sustainable practices and materials wherever possible, ensuring that our projects are not only beautiful but also kind to the planet.</p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 my-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-700">Get in Touch</h1>
        <p className="text-lg">We invite you to embark on this journey with us and experience the transformative power of great design. Whether you’re looking to redesign a single room or develop an entire commercial space, <span className="text-teal font-medium">Livstyle Homes</span> is here to bring your vision to life. Reach out to us today to schedule a consultation, and let’s start crafting the space of your dreams!</p>
        <Connect />
      </section>
    </main>
  );
}
