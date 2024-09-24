
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* --------------HEADER----------- */}
      <section>
          <Navbar/>
      </section>
      <section>
        <div className="h-screen">

        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}
