import { Button } from "@/components/ui/button";
import aiBrainIcon from "@/assets/ai-brain-icon.png";
import phone3d from "@/assets/phone-3d.png";
import crystals3d from "@/assets/crystals-3d.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-particles overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={aiBrainIcon} 
          alt="AI Brain" 
          className="absolute top-1/4 left-1/4 w-16 h-16 float-slow opacity-80"
        />
        <img 
          src={phone3d} 
          alt="3D Phone" 
          className="absolute top-1/3 right-1/4 w-24 h-24 float-medium opacity-70"
        />
        <img 
          src={crystals3d} 
          alt="3D Crystals" 
          className="absolute bottom-1/3 left-1/6 w-20 h-20 float-fast opacity-60"
        />
        
        {/* Additional floating geometric shapes */}
        <div className="absolute top-1/2 right-1/6 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent opacity-40 float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-lg bg-gradient-to-r from-secondary to-primary opacity-50 float-medium"></div>
        <div className="absolute top-1/6 left-1/2 w-6 h-6 rounded-full bg-accent opacity-60 float-fast"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Brand Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="glass-card p-3 rounded-full mr-3">
              <span className="text-2xl font-bold cosmic-glow">A</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">ADmyBRAND</h3>
              <p className="text-sm text-muted-foreground">AI Suite</p>
            </div>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="cosmic-glow">Supercharge Your</span>
            <br />
            <span className="text-foreground">Marketing with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your marketing strategy with cutting-edge AI tools designed for the future. 
            Create, optimize, and scale like never before.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="shadow-2xl">
              Start Free Trial
            </Button>
            <Button variant="cosmic" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats or Social Proof */}
          <div className="flex justify-center items-center gap-8 mt-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>10,000+ Marketers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span>500% ROI Increase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span>24/7 AI Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Button (Top Right) */}
      <div className="absolute top-8 right-8">
        <Button variant="cosmic" size="sm" className="rounded-full">
          🔍 Search
        </Button>
      </div>
    </section>
  );
};