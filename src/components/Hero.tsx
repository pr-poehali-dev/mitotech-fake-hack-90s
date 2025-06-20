import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "WELCOME TO THE FUTURE OF BIOTECHNOLOGY";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-6xl md:text-8xl font-bold text-green-400 mb-4">
            <span className="glitch logo-glitch" data-text="MITOTECH">
              MITOTECH
            </span>
          </div>
          <div className="text-xl text-green-600">
            BIOTECHNOLOGY CORPORATION
          </div>
        </div>

        {/* Typed text */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 h-20">
            <span className="terminal-text">{typedText}</span>
            <span className="animate-pulse">_</span>
          </h1>
        </div>

        {/* Status indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-green-400 p-4 bg-black bg-opacity-50">
            <div className="text-green-400 text-sm mb-2">RESEARCH STATUS</div>
            <div className="text-2xl font-bold">ACTIVE</div>
            <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
              <div
                className="bg-green-400 h-2 rounded-full animate-pulse"
                style={{ width: "87%" }}
              ></div>
            </div>
          </div>

          <div className="border border-blue-400 p-4 bg-black bg-opacity-50">
            <div className="text-blue-400 text-sm mb-2">
              PROJECTS IN DEVELOPMENT
            </div>
            <div className="text-2xl font-bold text-blue-400">23</div>
            <div className="text-xs text-blue-600 mt-2">CLASSIFIED MODE</div>
          </div>

          <div className="border border-red-400 p-4 bg-black bg-opacity-50">
            <div className="text-red-400 text-sm mb-2">SECURITY LEVEL</div>
            <div className="text-2xl font-bold text-red-400">MAXIMUM</div>
            <div className="text-xs text-red-600 mt-2 animate-pulse">
              ACCESS RESTRICTED
            </div>
          </div>
        </div>

        {/* Scan line effect */}
        <div className="scan-line"></div>
      </div>
    </section>
  );
};

export default Hero;
