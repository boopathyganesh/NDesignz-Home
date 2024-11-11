"use client"
import Connect from "@/components/Connect";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center mt-28">
        <div className="max-w-96 w-full flex items-center justify-center">
          <Image src={"/images/Brand/brand.svg"} alt={""} height={500} width={500} className="w-full" />
        </div>
        <div className="text-center flex items-center justify-center">
          <p className="text-xl font-medium">Welcome to <span className="text-teal font-medium">Livstyle Homes</span>—where dreams take shape, and spaces come alive. Based in the vibrant city of Coimbatore, <span className="text-teal font-medium">Livstyle Homes</span> is more than just an interior design company; we are creators, innovators, and visionaries dedicated to crafting exceptional spaces for our clients. From cozy homes to dynamic commercial environments, we specialize in designing interiors that are both beautiful and functional, each one carefully tailored to the unique needs and aspirations of our clients.</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 my-10 text-center">
        <h1 className="text-4xl font-semibold text-teal-700 mb-3">Contact Info</h1>
        <div className="flex items-center justify-center gap-5">
          <div className="max-w-96 h-80 w-full flex flex-col items-center justify-start gap-4 bg-teal-200 p-3 rounded-2xl">
            <div className="w-56 h-56 flex items-center justify-center rounded-full overflow-hidden ">
              <Image src={"/images/assets/mail.png"} alt={""} height={500} width={500} className="w-full" />
            </div>
            <div className="text-center text-white my-3">
              <span className="font-semibold">Email: </span>
              <Link href={"mailto:livstylehomescbe@gmail.com"}>livstylehomescbe@gmail.com</Link>
            </div>
          </div>
          <div className="max-w-96 h-80 w-full flex flex-col items-center justify-start gap-4 bg-teal-200 p-3 rounded-2xl">
            <div className="w-56 h-56 flex items-center justify-center rounded-full overflow-hidden ">
              <Image src={"/images/assets/phone.png"} alt={""} height={500} width={500} className="w-full" />
            </div>
            <div className="text-center text-white my-3">
              <span className="font-semibold">Contact: </span>
              <Link href={"tel:+918610933642"}>+91 8610933642</Link>
            </div>
          </div>
          <div className="max-w-96 h-80 w-full flex flex-col items-center justify-start gap-4 bg-teal-200 p-3 rounded-2xl">
            <div className="w-56 h-56 flex items-center justify-center rounded-full overflow-hidden ">
              <Image src={"/images/assets/address.png"} alt={""} height={500} width={500} className="w-full" />
            </div>
            <div className="text-center text-white my-3">
              <span className="font-semibold">Address: </span>
              <Link href={"#"}>1/291, Ramasamy Gounder Street, Near RV Hospital, Chinniyampalayam, 641062</Link>
            </div>
          </div>
        </div>

      </section>
      <section className="flex flex-col items-center justify-center gap-5 my-10 text-center">
        <Connect />
      </section>
    </main>
  );
}
