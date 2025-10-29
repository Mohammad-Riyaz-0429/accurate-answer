import { Card } from "@/components/ui/card";
import { Database, Brain, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Our system ingests content from your input and cross-references it against verified fact-checking databases and credible news sources.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced NLP models trained on millions of verified articles analyze linguistic patterns, claim structures, and rhetorical devices commonly found in misinformation.",
  },
  {
    icon: Search,
    title: "Source Verification",
    description: "We verify claims against authoritative sources, check citation validity, and evaluate the credibility of referenced materials.",
  },
  {
    icon: CheckCircle,
    title: "Confidence Scoring",
    description: "Our explainable AI assigns a confidence score based on evidence quality, source reliability, and historical accuracy of similar claims.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered pipeline combines multiple verification techniques for accurate fact-checking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-accent">Step {index + 1}</span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technical details */}
        <div className="mt-16 p-8 bg-card border-2 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-foreground mb-6">Technical Details</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Model Architecture</h4>
              <p className="text-muted-foreground">Transformer-based NLP model with attention mechanisms, fine-tuned on 10M+ fact-checked articles</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Data Sources</h4>
              <p className="text-muted-foreground">PolitiFact, Snopes, FactCheck.org, academic journals, and verified news outlets</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Update Frequency</h4>
              <p className="text-muted-foreground">Model retrained monthly with new verified data; real-time database updates</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Limitations</h4>
              <p className="text-muted-foreground">Cannot verify completely novel claims; requires English text; best for factual claims over opinions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
