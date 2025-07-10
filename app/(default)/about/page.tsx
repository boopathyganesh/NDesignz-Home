import Connect from "@/components/Connect";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leading Interior Design Company in Coimbatore – LivStyle Homes",
  description: "Learn more about LivStyle Homes, a top interior design firm in Coimbatore. With years of expertise, we create functional and beautiful spaces across Saravanampatty, Cheranmanagar, and beyond.",
  alternates: {
    canonical: "https://livstylehomes.com/about",
  },
};
export default function Home() {
  return (
    <main className="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto w-full flex flex-col items-center justify-center px-5 xl:px-0">
      <section className="flex flex-col items-center justify-center mt-28">
        <div className="max-w-96 w-full flex items-center justify-center">
          <Image src={"/images/Brand/brand.svg"} alt={"Livstyle Homes"} height={500} width={500} className="w-full" priority />
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium">Your Trusted Interior Design Company in Coimbatore</h1>
          <h4>At Livstyle Homes, we blend creativity with functionality to craft stunning living and working
            spaces that reflect your personality.</h4>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 my-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-700">Who We Are</h1>
        <p className="text-base md:text-lg">Livstyle Homes is a leading interior design company in Coimbatore, committed to turning spaces into
          inspiring environments. Whether it’s a cozy 2BHK home or a large commercial project, our expert
          team of designers, craftsmen, and project managers bring vision, style, and functionality together.</p>
        <ul className="max-w-lg w-full list-inside list-disc text-left">
          <p>We specialize in:</p>
          <li>Modular Kitchens</li>
          <li>Wardrobe Designs</li>
          <li>False Ceilings</li>
          <li>Full Home & Commercial Interiors</li>
          <li>Living Room Interior</li>
        </ul>
        <h3>Every project is personalized — no templates, no shortcuts</h3>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 mb-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-700">Our Mission</h1>
        <p className="text-base md:text-lg">At <span className="text-teal font-medium">Livstyle Homes</span>, our mission is simple yet profound: to create timeless, inspiring spaces that reflect the personality and lifestyle of each client. We believe that great design has the power to improve lives, and we approach every project with the goal of enhancing both form and function in the environments we shape. Whether it's a luxurious residential haven or a sleek commercial workspace, our designs are meant to enhance quality of life and bring joy to all who experience them.</p>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 mb-10">
        <h1 className="text-3xl font-semibold text-teal-700 text-center">Our Core Values</h1>
        <ul className="list-decimal list-inside flex flex-col items-start justify-center gap-5 text-base md:text-lg px-5">
          <li>
            <span className="text-xl font-semibold text-teal-700">Creativity and Innovation</span>
            <p>We constantly explore new ideas, styles, and materials to deliver fresh, elegant designs. </p>
          </li>
          <li>
            <span className="text-xl font-semibold text-teal-700">Client-Centric Approach</span>
            <p>Every design begins with your vision, needs, and lifestyle.</p>
          </li>
          <li>
            <span className="text-xl font-semibold text-teal-700">Quality and Attention to Detail</span>
            <p>We ensure excellence from concept to final installation.</p>
          </li>
          <li>
            <span className="text-xl font-semibold text-teal-700">Sustainability and Responsibility</span>
            <p>We promote eco-friendly design and ethical sourcing wherever possible.</p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col h-full items-center justify-center gap-5 my-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-700">Get in Touch</h1>
        <p className="text-lg">We invite you to embark on this journey with us and experience the transformative power of great design. Whether you’re looking to redesign a single room or develop an entire commercial space, <span className="text-teal font-medium">Livstyle Homes</span> is here to bring your vision to life. Reach out to us today to schedule a consultation, and let’s start crafting the space of your dreams!</p>
        <Connect />
        <div className="flex flex-row items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 md:gap-4">
            <div className="text-teal font-medium md:text-xl">Call us</div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-teal-500 rounded-2xl">
              <Link href={"tel:+918610933642"}>
                <Image src={"/images/assets/phone.png"} alt={"Contact"} height={500} width={500} className="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 md:gap-4">
            <div className="text-teal font-medium md:text-xl">Mail us</div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-teal-500 rounded-2xl">
              <Link href={"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=livstylehomescbe@gmail.com"}>
                <Image src={"/images/assets/mail.png"} alt={"Contact"} height={500} width={500} className="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 md:gap-4">
            <div className="text-teal font-medium md:text-xl">Visit us</div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-teal-500 rounded-2xl">
              <Link href={"https://maps.app.goo.gl/46bENTHdTdZ9UAsh6"}>
                <Image src={"/images/assets/address.png"} alt={"Contact"} height={500} width={500} className="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
