import { useState } from "react";
import Navigation from "@/components/Navigation";

const Database = () => {
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== "HELIX2024") {
      setAttempts((prev) => prev + 1);
      if (attempts >= 2) {
        setIsBlocked(true);
      }
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation />

      <div className="pt-20 pb-16 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="border border-red-400 bg-black p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-red-400 mb-2">
                <span className="glitch" data-text="ACCESS RESTRICTED">
                  ACCESS RESTRICTED
                </span>
              </h1>
              <div className="text-red-600 text-sm">INTERNAL DATABASE</div>
            </div>

            {!isBlocked ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-red-400 mb-2">
                    ACCESS PASSWORD:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black border border-red-400 p-3 text-green-400 focus:outline-none focus:border-red-300"
                    placeholder="Enter password..."
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-900 hover:bg-red-800 border border-red-400 p-3 text-red-400 transition-colors"
                >
                  AUTHORIZATION
                </button>

                {attempts > 0 && (
                  <div className="text-red-400 text-sm text-center animate-pulse">
                    INCORRECT PASSWORD. ATTEMPTS LEFT: {3 - attempts}
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center">
                <div className="text-red-400 text-xl font-bold mb-4 animate-pulse">
                  ACCESS BLOCKED
                </div>
                <div className="text-red-600 text-sm mb-4">
                  Login attempt limit exceeded
                </div>
                <div className="text-red-400 text-xs font-mono">
                  SECURITY SYSTEM ACTIVATED
                </div>
              </div>
            )}

            <div className="mt-8 p-3 border border-yellow-400 bg-yellow-900 bg-opacity-20">
              <div className="text-yellow-400 text-xs font-mono">
                ⚠️ WARNING: All access attempts are logged
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
