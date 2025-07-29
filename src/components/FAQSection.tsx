import { useState } from "react";

const faqData = [
  {
    question: "How does the AI Suite integrate with existing marketing tools?",
    answer: "Our AI Suite seamlessly integrates with 100+ popular marketing platforms including HubSpot, Salesforce, Google Analytics, and more through our robust API connections.",
    shape: "🔗"
  },
  {
    question: "What kind of ROI can I expect from using ADmyBRAND?",
    answer: "Most customers see a 300-500% increase in marketing ROI within the first 90 days, with significant time savings and improved campaign performance.",
    shape: "📈"
  },
  {
    question: "Is my data secure with your AI platform?",
    answer: "Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and follow GDPR guidelines to ensure your data is completely secure and private.",
    shape: "🔒"
  }
];

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="cosmic-glow">FAQ</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about our AI marketing suite
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ${
                index === 0 ? 'float-slow' : index === 1 ? 'float-medium' : 'float-fast'
              }`}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{faq.shape}</div>
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                </div>
                <div className={`text-2xl transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <span className="cosmic-glow">↓</span>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-12 pr-4">
                    <p className="text-muted-foreground leading-relaxed animate-fade-in">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating FAQ elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 flex space-x-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-primary/20 to-accent/10 float-slow"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-secondary/30 to-primary/15 float-medium"></div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/10 float-fast"></div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/5 float-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};