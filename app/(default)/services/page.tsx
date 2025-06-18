
import Image from "next/image";
import EnquiryForm from "@/components/Forms/Enquiry";
import { Metadata } from "next";
import ServiceComponent from "@/components/ServiceComponent";

export const metadata: Metadata = {
  title: "Interior Design Services in Coimbatore | LivStyle Homes – Residential & Commercial",
  description: "Transform your space with LivStyle Homes, the leading interior designers in Coimbatore. Offering expert residential, office, and commercial designs in Saravanampatty, RS Puram, and more. Get a free consultation today!",
  alternates: {
    canonical: "https://livstylehomes.com/services",
  },
};

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full overflow-hidden mt-40">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-700">Services We Offer</h1>
      <section className="flex flex-col items-center justify-center w-full my-5 text-center gap-5 px-4">
        <div className="flex items-center justify-center w-64">
          <Image src={"/images/Brand/brand.svg"} alt={"Livstyle Homes Logo"} height={500} width={500} className="w-full" priority />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-teal-700">Bringing Your Dream Spaces to Life</h1>
        <p className="font-medium md:text-lg">At Livstyle Homes, we specialize in creating stunning interiors and exteriors that blend functionality, aesthetics, and modern Indian sensibilities. Our diverse range of services caters to residential, commercial, and outdoor spaces, ensuring that every corner of your dream space reflects your unique personality and style.</p>
      </section>
      <h1 className="text-4xl font-bold text-teal-700 text-center">Our Signature Services</h1>
      <ServiceComponent />
      <section className="flex flex-col md:flex-row items-center justify-center gap-5 my-5 w-full px-4">
        <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-700 text-center">Ready to Redefine Your Space?</h1>
          <p className="md:text-lg text-center">Get started with Livstyle Homes today. Whether you’re building your dream home, upgrading your office, or redesigning your kitchen, we’re here to make your vision a reality. Contact us for a consultation and take the first step toward your dream interiors.</p>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
