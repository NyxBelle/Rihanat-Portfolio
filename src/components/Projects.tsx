import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [
    {
      title: "AI News Summarizer",
      description: "AI-powered news summarizer fetching articles from 5+ global sources using NewsAPI and OpenAI APIs, deployed on Render with 99.9% uptime.",
      technologies: ["Python", "OpenAI API", "NewsAPI", "Render"],
      highlights: ["Automated text processing", "Real-time summarization", "Multi-source aggregation"],
      links: {
        demo: "#",
        github: "https://github.com/NyxBelle"
      }
    },
    {
      title: "Skin Disease Detector",
      description: "Computer vision application for early detection and classification of skin conditions using deep learning and image analysis.",
      technologies: ["TensorFlow", "Computer Vision", "Python", "Image Processing"],
      highlights: ["High accuracy detection", "User-friendly interface", "Medical application"],
      links: {
        demo: "#",
        github: "https://github.com/NyxBelle"
      }
    },
    {
      title: "Financial Fraud Detection",
      description: "Machine learning system for identifying fraudulent transactions and patterns in financial data with real-time monitoring capabilities.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      highlights: ["Real-time fraud detection", "Pattern analysis", "Risk assessment"],
      links: {
        demo: "#",
        github: "https://github.com/NyxBelle"
      }
    },
    {
      title: "Real-Time Face Recognition System",
      description: "Advanced facial recognition system with real-time processing capabilities for security and identification applications.",
      technologies: ["OpenCV", "Python", "Deep Learning", "Computer Vision"],
      highlights: ["Real-time processing", "High accuracy", "Security applications"],
      links: {
        demo: "#",
        github: "https://github.com/NyxBelle"
      }
    },
    {
      title: "Tic Tac Toe AI",
      description: "Fully functional Tic Tac Toe game with an unbeatable AI opponent using the Minimax algorithm, achieving 100% optimal move accuracy with optimized performance.",
      technologies: ["JavaScript", "Minimax Algorithm", "Game Theory", "Performance Optimization"],
      highlights: ["Unbeatable AI opponent", "100% optimal moves", "25% performance improvement"],
      links: {
        demo: "#",
        github: "https://github.com/NyxBelle"
      }
    },
    {
      title: "Snake Game",
      description: "Classic Snake game implementation with smooth gameplay mechanics, score tracking, and responsive controls for an engaging user experience.",
      technologies: ["JavaScript", "Canvas API", "Game Development", "DOM Manipulation"],
      highlights: ["Smooth gameplay", "Score tracking", "Responsive controls"],
      links: {
        demo: "#",
        github: "https://github.com/NyxBelle"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-ai mb-8">
            Featured Projects
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            A showcase of my work in AI, machine learning, and data science.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, showAllProjects ? projects.length : 4).map((project, index) => (
            <div key={index} className="section-reveal card-ai group">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-primary mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border">
                {project.links.demo && (
                  <Button variant="outline" size="sm" className="text-xs">
                    Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="outline" size="sm" className="text-xs">
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)} 
            className="btn-ai"
          >
            {showAllProjects ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};