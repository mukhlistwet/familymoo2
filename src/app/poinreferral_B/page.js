"use Client";
import Navbar from "@/components/Navbar";
import Herobg from "./herosec";
import Footer from "@/components/Footer";
import MyComponent from "./pointcard/Mycomponent";

import ArticleList from "./pointcard/ArticleList";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Herobg />
      <div className="container mx-auto max-w-7xl p-4">
        <main>
          <MyComponent />
          <ArticleList />
        </main>
      </div>
      <Footer />
    </div>
  );
}
