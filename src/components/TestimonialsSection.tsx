const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    content: "ADmyBRAND's AI suite transformed our marketing ROI by 400%. The automation features save us 20 hours per week.",
    avatar: "👩‍💼",
    rating: 5
  },
  {
    name: "Marcus Rodriguez", 
    role: "CEO",
    company: "GrowthLab",
    content: "The most intuitive AI marketing platform we've used. Our team adopted it instantly and results were immediate.",
    avatar: "👨‍💻",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "CMO", 
    company: "ScaleUp Inc",
    content: "Game-changing analytics and insights. We can now predict campaign performance before launch with 95% accuracy.",
    avatar: "👩‍🚀",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="cosmic-glow">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what industry leaders are saying about our AI suite
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden ${
                index === 0 ? 'float-slow' : index === 1 ? 'float-medium' : 'float-fast'
              }`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Rating (only show for first testimonial) */}
                {index === 0 && (
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                    {testimonial.avatar}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="font-semibold cosmic-glow">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating testimonial elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/12 w-8 h-8 rounded-full bg-gradient-to-r from-accent/20 to-primary/10 float-slow"></div>
          <div className="absolute bottom-1/3 right-1/12 w-6 h-6 rounded-lg bg-gradient-to-r from-secondary/30 to-accent/15 float-medium"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-primary/20 float-fast"></div>
        </div>

        {/* Additional floating graphic element */}
        <div className="absolute bottom-8 right-8 opacity-20">
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i}
                className={`w-12 h-12 rounded-full glass-card ${
                  i % 3 === 0 ? 'float-slow' : i % 3 === 1 ? 'float-medium' : 'float-fast'
                }`}
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};