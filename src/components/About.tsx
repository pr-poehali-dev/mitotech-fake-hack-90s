const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              <span className="glitch" data-text="ABOUT CORPORATION">
                ABOUT CORPORATION
              </span>
            </h2>

            <div className="space-y-6 text-green-300">
              <p>
                MitoTech Corporation is a leading biotechnology company
                specializing in advanced research in genetic engineering and
                neurotechnology.
              </p>

              <p>
                Our mission is to revolutionize understanding of human potential
                through the synthesis of biology and technology.
              </p>

              <div className="border-l-4 border-green-400 pl-4 my-6">
                <p className="text-green-400 font-mono">
                  "The future of humanity lies at the intersection of biology
                  and digital technology"
                </p>
                <cite className="text-green-600 text-sm">
                  — Dr. Alexandra Volkova, CEO
                </cite>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="border border-green-400 p-6 bg-black bg-opacity-50">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                ACHIEVEMENTS
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Patents registered:</span>
                  <span className="text-green-400">1,247</span>
                </li>
                <li className="flex justify-between">
                  <span>Research centers:</span>
                  <span className="text-green-400">23</span>
                </li>
                <li className="flex justify-between">
                  <span>Countries present:</span>
                  <span className="text-green-400">47</span>
                </li>
                <li className="flex justify-between">
                  <span>Years in operation:</span>
                  <span className="text-green-400">2015-2024</span>
                </li>
              </ul>

              <div className="mt-6 p-3 border border-red-400 bg-red-900 bg-opacity-20">
                <div className="text-red-400 text-xs font-mono animate-pulse">
                  ⚠️ WARNING: Some research is classified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
