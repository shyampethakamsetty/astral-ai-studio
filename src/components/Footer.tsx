export const Footer = () => {
  return (
    <footer className="relative py-12 px-6">
      {/* Glass bottom panel */}
      <div className="glass-card rounded-t-3xl">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Brand */}
            <div className="flex items-center mb-6 md:mb-0">
              <div className="glass-card p-3 rounded-full mr-3 glow-effect">
                <span className="text-xl font-bold cosmic-glow">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">ADmyBRAND</h3>
                <p className="text-sm text-muted-foreground">AI Suite</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                Premium UI Suits
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </a>
              <div className="w-px h-4 bg-border"></div>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                Events
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            {/* AI Badge */}
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-sm cosmic-glow font-semibold">ai</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/50 mt-8 pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 ADmyBRAND AI Suite. All rights reserved. 
              <span className="cosmic-glow ml-2">Powered by Future Technology</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating footer elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-primary/20 float-slow"></div>
        <div className="absolute bottom-20 right-12 w-6 h-6 rounded-lg bg-accent/15 float-medium"></div>
        <div className="absolute bottom-12 left-1/3 w-3 h-3 rounded-full bg-secondary/25 float-fast"></div>
      </div>
    </footer>
  );
};