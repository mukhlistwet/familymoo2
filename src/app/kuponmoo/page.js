"use Client";
import Navbar from "@/components/Navbar";
import Herobg from "./herosec";
import Konten from "./konten";
import Footer from "@/components/Footer";
import MyComponent from "./kupon/mycomponent";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Herobg />
      <div className="container mx-auto max-w-7xl p-4">
        <main>
          <MyComponent />
          <Konten />
        </main>
      </div>
      <Footer />
    </div>
  );
}
