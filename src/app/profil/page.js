"use Client";
import Navbar from "@/components/Navbar";
import Herobg from "./herosec";
// import NavTabs from "./TabTukarreward";
import Footer from "@/components/Footer";
//import Sidenavbar from "./sidebar/Sidebar;";
import Sidenavbar from "./sidenavbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Herobg />
      <div className="container mx-auto max-w-7xl p-4">
        <main>
          <Sidenavbar />
        </main>
      </div>
      <Footer />
    </div>
  );
}
