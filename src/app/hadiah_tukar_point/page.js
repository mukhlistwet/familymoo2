"use client";
import Herobg from "./herosec";
import NavTabs from "./TabTukarreward";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Herobg />
      <div className="container mx-auto max-w-7xl p-4">
        <main>
          <NavTabs />
        </main>
      </div>
      <Footer />
    </div>
  );
}
