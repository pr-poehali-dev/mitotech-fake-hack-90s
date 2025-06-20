const Research = () => {
  const projects = [
    {
      id: "PR-001",
      name: "ПРОЕКТ ГЕЛИКС",
      status: "АКТИВЕН",
      classification: "СОВЕРШЕННО СЕКРЕТНО",
      progress: 76,
      color: "green",
    },
    {
      id: "PR-007",
      name: "НЕЙРАЛЬНАЯ СЕТЬ СИНАПС",
      status: "В РАЗРАБОТКЕ",
      classification: "ЗАСЕКРЕЧЕНО",
      progress: 45,
      color: "blue",
    },
    {
      id: "PR-013",
      name: "ПРОЕКТ ФЕНИКС",
      status: "ПРИОСТАНОВЛЕН",
      classification: "ЗАПРЕЩЕНО",
      progress: 92,
      color: "red",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="glitch" data-text="ИССЛЕДОВАНИЯ">
            ИССЛЕДОВАНИЯ
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border border-${project.color}-400 bg-black bg-opacity-70 p-6 hover:bg-opacity-90 transition-all duration-300`}
            >
              <div className="mb-4">
                <div
                  className={`text-${project.color}-400 text-sm font-mono mb-1`}
                >
                  {project.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <div className={`text-${project.color}-400 text-sm mb-2`}>
                  {project.status}
                </div>
                <div className={`text-${project.color}-600 text-xs`}>
                  {project.classification}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>ПРОГРЕСС</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className={`bg-${project.color}-400 h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div
                className={`text-${project.color}-400 text-xs font-mono animate-pulse`}
              >
                [ДОСТУП ОГРАНИЧЕН]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
