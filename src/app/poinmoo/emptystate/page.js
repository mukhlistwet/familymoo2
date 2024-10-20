"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Herobg from "./herosec";
import Footer from "@/components/Footer";
import Content from "./componen/content";
import RiwayatKupon from "./componen/riwayatkupon/RiwayatKupon";
//

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Herobg />
      <div className="container mx-auto max-w-7xl p-4">
        <main>
          <Content />
          <RiwayatKupon />
        </main>
      </div>
      <Footer />
    </div>
  );
}
