
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import LandingPage from "./landing_page/page";

export default function Home() {
  return (
    <>
      {/* --------------HEADER----------- */}
      <section>
          <Navbar/>
      </section>
      <section>
        <LandingPage/>

       
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}
