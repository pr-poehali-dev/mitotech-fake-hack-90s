import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("ru-RU", {
          hour12: false,
          timeZone: "Europe/Moscow",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 border-b border-green-400">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-green-400 glitch"
          data-text="MITOTECH"
        >
          MITOTECH
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-300 transition-colors">
            HOME
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-300 transition-colors"
          >
            CONTACTS
          </Link>
          <Link to="/database" className="hover:text-red-400 transition-colors">
            DATABASE
          </Link>
        </div>

        <div className="text-sm">
          <div>MSK {currentTime}</div>
          <div className="text-xs text-green-600">SYSTEM ACTIVE</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
