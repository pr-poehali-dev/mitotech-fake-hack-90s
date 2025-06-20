const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              <span className="glitch" data-text="О КОРПОРАЦИИ">
                О КОРПОРАЦИИ
              </span>
            </h2>

            <div className="space-y-6 text-green-300">
              <p>
                MitoTech Corporation — ведущая биотехнологическая компания,
                специализирующаяся на передовых исследованиях в области
                генетической инженерии и нейротехнологий.
              </p>

              <p>
                Наша миссия — революционизировать понимание человеческого
                потенциала через синтез биологии и технологий.
              </p>

              <div className="border-l-4 border-green-400 pl-4 my-6">
                <p className="text-green-400 font-mono">
                  "Будущее человечества находится на пересечении биологии и
                  цифровых технологий"
                </p>
                <cite className="text-green-600 text-sm">
                  — Д-р Александра Волкова, CEO
                </cite>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="border border-green-400 p-6 bg-black bg-opacity-50">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                ДОСТИЖЕНИЯ
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Патенты зарегистрированы:</span>
                  <span className="text-green-400">1,247</span>
                </li>
                <li className="flex justify-between">
                  <span>Исследовательских центров:</span>
                  <span className="text-green-400">23</span>
                </li>
                <li className="flex justify-between">
                  <span>Странах присутствия:</span>
                  <span className="text-green-400">47</span>
                </li>
                <li className="flex justify-between">
                  <span>Годы работы:</span>
                  <span className="text-green-400">2015-2024</span>
                </li>
              </ul>

              <div className="mt-6 p-3 border border-red-400 bg-red-900 bg-opacity-20">
                <div className="text-red-400 text-xs font-mono animate-pulse">
                  ⚠️ ВНИМАНИЕ: Некоторые исследования засекречены
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
