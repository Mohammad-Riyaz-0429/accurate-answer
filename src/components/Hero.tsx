import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-primary px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent-foreground">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Fact Verification</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Detect misinformation —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">
              instantly
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            AI that highlights questionable claims, explains why, and points to sources.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToDemo}
              className="group"
            >
              Try Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToHowItWorks}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Sparkles className="w-5 h-5" />
              Read Research
            </Button>
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold text-accent mb-2">92%</div>
              <div className="text-sm text-white/70">Accuracy on benchmark datasets</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-white/70">Articles analyzed daily</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold text-accent mb-2">2.5M+</div>
              <div className="text-sm text-white/70">Users trust our analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
