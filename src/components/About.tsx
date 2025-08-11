export const About = () => {
  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn',
    'Deep Learning', 'Hugging Face Transformers', 'MLOps',
    'Pandas', 'NumPy', 'Matplotlib', 'Render',
    'Git/GitHub', 'API Integration', 'Model Deployment', 'Research', 'Analytics'
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-ai mb-8">
            About Me
          </h2>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="section-reveal">
            <p className="text-lg leading-8 text-muted-foreground mb-6">
              I'm an AI/ML Developer passionate about creating intelligent systems that solve real-world problems. 
              With hands-on experience in machine learning, deep learning, and artificial intelligence, I enjoy transforming complex data into 
              actionable insights and building AI solutions that deliver real value.
            </p>
            
            <p className="text-lg leading-8 text-muted-foreground mb-6">
              My journey in AI began with a fascination for how machines can learn and adapt. Since then, I've worked on 
              projects involving computer vision, natural language processing, and predictive analytics always aiming to apply AI in meaningful, impactful ways.
            </p>
            
            <p className="text-lg leading-8 text-muted-foreground">
              Beyond coding and model training, I contribute to open-source projects, share knowledge through writing, and stay engaged with the latest AI research and developments.
            </p>
          </div>
          
          <div className="section-reveal">
            <h3 className="text-xl font-semibold mb-6 text-primary">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-8 card-ai">
              <h4 className="text-lg font-semibold mb-4 text-primary">Current Focus</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Large Language Models & Generative AI
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  MLOps & Model Deployment at Scale
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neural-network rounded-full mr-3" />
                  Computer Vision & Image Processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-data-science rounded-full mr-3" />
                  Reinforcement Learning Applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};