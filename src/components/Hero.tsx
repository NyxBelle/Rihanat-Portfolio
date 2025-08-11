import { Button } from '@/components/ui/button';
import aiNeuralBg from '@/assets/ai-neural-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with neural network */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${aiNeuralBg})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="neural-dot absolute top-1/4 left-1/4 animate-pulse-glow" />
        <div className="neural-dot absolute top-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="neural-dot absolute bottom-1/3 left-1/3 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="neural-dot absolute bottom-1/4 right-1/3 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/lovable-uploads/c2631cee-0faf-4a41-9902-aed4c61b507d.png"
              alt="Rihanat Idowu"
              className="h-32 w-32 rounded-full border-4 border-primary/20 shadow-glow animate-fade-in object-cover"
            />
          </div>
          
          <h1 className="hero-text text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm{' '}
            <span className="text-gradient-ai">Rihanat Idowu</span>
          </h1>
          
          <h2 className="hero-subtitle mt-6 text-2xl font-semibold text-muted-foreground sm:text-3xl">
            AI/ML Developer
          </h2>
          
          <p className="hero-description mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            I build intelligent systems that solve complex problems. Specializing in machine learning, 
            deep learning, and artificial intelligence solutions that drive innovation and create impact.
          </p>
          
          <div className="hero-cta mt-10 flex items-center justify-center gap-x-6">
            <a href="#experience" className="btn-ai">
              View My Work
            </a>
            <a href="https://www.linkedin.com/in/rihanat-idowu" target="_blank" rel="noopener noreferrer" className="btn-outline-ai">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};