import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            <span className="glitch" data-text="CONTACTS">
              CONTACTS
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-green-400 p-8 bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold mb-6 text-green-400">
                HEAD OFFICE
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="text-green-600 text-sm">ADDRESS:</div>
                  <div>Moscow, Skolkovo, Nobel St., 7</div>
                </div>

                <div>
                  <div className="text-green-600 text-sm">PHONE:</div>
                  <div>+7 (495) 123-45-67</div>
                </div>

                <div>
                  <div className="text-green-600 text-sm">EMAIL:</div>
                  <div>info@mitotech.corp</div>
                </div>

                <div>
                  <div className="text-green-600 text-sm">WORKING HOURS:</div>
                  <div>24/7 - Research never stops</div>
                </div>
              </div>

              <div className="mt-8 p-4 border border-red-400 bg-red-900 bg-opacity-20">
                <div className="text-red-400 text-sm font-mono">
                  ⚠️ WARNING: Laboratory access requires level 5+ clearance
                </div>
              </div>
            </div>

            <div className="border border-blue-400 p-8 bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">
                DEPARTMENTS
              </h2>

              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-3">
                  <div className="text-blue-400 font-bold">
                    Research & Development
                  </div>
                  <div className="text-sm text-blue-300">rd@mitotech.corp</div>
                </div>

                <div className="border-b border-gray-700 pb-3">
                  <div className="text-blue-400 font-bold">Security</div>
                  <div className="text-sm text-blue-300">
                    security@mitotech.corp
                  </div>
                </div>

                <div className="border-b border-gray-700 pb-3">
                  <div className="text-blue-400 font-bold">Press Service</div>
                  <div className="text-sm text-blue-300">
                    press@mitotech.corp
                  </div>
                </div>

                <div className="border-b border-gray-700 pb-3">
                  <div className="text-red-400 font-bold">
                    Internal Security
                  </div>
                  <div className="text-sm text-red-300">[CLASSIFIED]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
