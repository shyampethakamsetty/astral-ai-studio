import { Button } from "@/components/ui/button";

const features = [
  { icon: "🚀", title: "AI Launch", description: "Automated campaign deployment" },
  { icon: "📊", title: "Analytics", description: "Real-time performance insights" },
  { icon: "⚙️", title: "Automation", description: "Smart workflow optimization" },
  { icon: "⚡", title: "Lightning", description: "Ultra-fast processing" },
  { icon: "🛡️", title: "Security", description: "Enterprise-grade protection" },
  { icon: "🌍", title: "Global", description: "Worldwide reach capabilities" },
  { icon: "💾", title: "Database", description: "Intelligent data management" },
  { icon: "☁️", title: "Cloud", description: "Scalable cloud infrastructure" },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="cosmic-glow">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI tools designed to transform your marketing workflow
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 cursor-pointer group ${
                index % 3 === 0 ? 'float-slow' : index % 3 === 1 ? 'float-medium' : 'float-fast'
              }`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Floating particles around features */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-4 h-4 rounded-full bg-primary/30 float-slow"></div>
          <div className="absolute bottom-1/3 right-1/5 w-3 h-3 rounded-full bg-accent/40 float-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-secondary/50 float-fast"></div>
        </div>
      </div>
    </section>
  );
};