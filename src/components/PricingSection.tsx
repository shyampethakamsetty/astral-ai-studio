import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams",
    icon: "🎯",
    features: ["5 AI Tools", "Basic Analytics", "Email Support"],
    popular: false,
    glowColor: "from-primary/20 to-accent/10"
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing businesses", 
    icon: "🚀",
    features: ["Unlimited AI Tools", "Advanced Analytics", "Priority Support", "Custom Integrations"],
    popular: true,
    glowColor: "from-accent/30 to-secondary/20"
  },
  {
    name: "Enterprise", 
    price: "$199",
    description: "For large organizations",
    icon: "⭐",
    features: ["Everything in Pro", "Dedicated Manager", "Custom Development", "SLA"],
    popular: false,
    glowColor: "from-secondary/20 to-primary/10"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="cosmic-glow">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to supercharge your marketing
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group ${
                plan.popular ? 'scale-105' : ''
              } ${
                index === 0 ? 'float-slow' : index === 1 ? 'float-medium' : 'float-fast'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="glass-card px-4 py-2 rounded-full text-sm font-semibold cosmic-glow">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {plan.icon}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-4xl font-bold cosmic-glow">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "hero" : "cosmic"} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/8 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 float-slow"></div>
          <div className="absolute bottom-1/4 right-1/8 w-4 h-4 rounded-lg bg-gradient-to-r from-secondary to-primary opacity-40 float-medium"></div>
        </div>
      </div>
    </section>
  );
};