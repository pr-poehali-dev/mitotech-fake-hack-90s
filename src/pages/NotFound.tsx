import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [glitchText, setGlitchText] = useState("ACCESS DENIED");

  useEffect(() => {
    console.error(
      "SECURITY BREACH: Unauthorized access attempt detected:",
      location.pathname,
    );

    // Glitch effect for text
    const glitchWords = [
      "ACCESS DENIED",
      "ДОСТУП ЗАПРЕЩЕН",
      "ERROR 404",
      "НАРУШЕНИЕ",
      "BREACH",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setGlitchText(glitchWords[index % glitchWords.length]);
      index++;
    }, 200);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-red-400 font-mono flex items-center justify-center relative overflow-hidden">
      {/* Background static */}
      <div className="fixed inset-0 opacity-10">
        <div className="static-noise"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 text-red-500">
            <span className="glitch terminal-glitch" data-text="404">
              404
            </span>
          </h1>
          <div className="text-2xl font-bold text-red-400 mb-2">
            <span className="glitch" data-text={glitchText}>
              {glitchText}
            </span>
          </div>
        </div>

        <div className="border border-red-400 p-6 bg-black bg-opacity-80 max-w-md mx-auto">
          <div className="text-red-400 text-sm mb-4">
            СИСТЕМА БЕЗОПАСНОСТИ MITOTECH
          </div>
          <div className="text-red-300 mb-4">
            Попытка доступа к защищенному ресурсу
          </div>
          <div className="text-red-600 text-xs font-mono mb-4">
            IP: 192.168.1.███
            <br />
            TIME: {new Date().toLocaleString("ru-RU")}
            <br />
            STATUS: ЗАБЛОКИРОВАН
          </div>

          <a
            href="/"
            className="inline-block bg-red-900 hover:bg-red-800 border border-red-400 px-6 py-2 text-red-400 transition-colors"
          >
            ВЕРНУТЬСЯ В СИСТЕМУ
          </a>

          <div className="mt-4 text-red-600 text-xs animate-pulse">
            ⚠️ Администрация уведомлена о нарушении
          </div>
        </div>

        {/* Terminal scanlines */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="scan-lines"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
