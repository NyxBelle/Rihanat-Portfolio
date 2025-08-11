export const Experience = () => {
  const experiences = [
    {
      title: "Freelance AI/ML Developer",
      company: "Independent",
      period: "April 2025 – Present",
      description: "• Developed an AI-powered news summarizer fetching articles from 5+ global sources using NewsAPI and OpenAI APIs.\n• Deployed fully functional app on Render, ensuring 99.9% uptime and independent cloud-based operation.\n• Designed and deployed an AI-powered mobile app, achieving 95% response accuracy in conversational AI interactions.\n• Developed a fully functional Tic Tac Toe game with an unbeatable AI opponent using the Minimax algorithm, achieving 100% optimal move accuracy.\n• Applied advanced debugging and optimization techniques, reducing frame lag and improving game loop efficiency by 25%.",
      technologies: ["Python", "TensorFlow", "Hugging Face", "Pandas", "NumPy"]
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-ai mb-8">
            Experience
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            My journey in AI and machine learning.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="section-reveal card-ai">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-muted-foreground mb-4">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="skill-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};