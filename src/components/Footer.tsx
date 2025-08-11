export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-gradient-ai">RI</span>
            <span className="text-muted-foreground">AI/ML Developer</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2025 Rihanat Idowu. Built with passion for AI and innovation.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Designed and developed with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};