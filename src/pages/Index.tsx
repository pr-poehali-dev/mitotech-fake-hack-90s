import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import About from "@/components/About";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Visitor counter simulation
    const count = Math.floor(Math.random() * 50000) + 100000;
    setVisitorCount(count);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 opacity-10">
        <div className="matrix-rain"></div>
      </div>

      <Navigation />
      <Hero />
      <Research />
      <About />

      {/* Visitor counter */}
      <div className="fixed bottom-4 right-4 bg-black border border-green-400 p-2 text-xs">
        <div className="glitch" data-text="VISITORS">
          VISITORS
        </div>
        <div className="text-center text-green-400">
          {visitorCount.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Index;
