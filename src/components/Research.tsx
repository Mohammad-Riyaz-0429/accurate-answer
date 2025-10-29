import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, ExternalLink } from "lucide-react";

const metrics = [
  { label: "Accuracy", value: "92.4%", description: "Overall accuracy on MultiFC benchmark" },
  { label: "Precision", value: "89.7%", description: "True positive rate for fake news detection" },
  { label: "Recall", value: "91.2%", description: "Coverage of actual misinformation cases" },
  { label: "F1 Score", value: "90.4%", description: "Harmonic mean of precision and recall" },
];

const papers = [
  {
    title: "Large-Scale Misinformation Detection Using Transformer Models",
    authors: "Johnson et al., 2025",
    venue: "NeurIPS 2025",
    link: "#",
  },
  {
    title: "Explainable AI for Fact Verification: A Multi-Source Approach",
    authors: "Chen & Smith, 2024",
    venue: "AAAI 2024",
    link: "#",
  },
  {
    title: "Cross-Lingual Fake News Detection at Scale",
    authors: "García et al., 2024",
    venue: "ACL 2024",
    link: "#",
  },
];

export const Research = () => {
  return (
    <section id="research" className="py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research & Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our model's performance on industry-standard benchmarks
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <BarChart3 className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="font-semibold text-sm text-foreground mb-1">{metric.label}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </Card>
          ))}
        </div>

        {/* Benchmark datasets */}
        <Card className="p-8 mb-12 border-2">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <FileText className="w-6 h-6 text-accent" />
            Benchmark Datasets
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">MultiFC-2024</p>
                <p className="text-sm text-muted-foreground">40,000 fact-checked claims from 26 fact-checking websites</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">LIAR-PLUS</p>
                <p className="text-sm text-muted-foreground">12,800 short statements from PolitiFact with detailed analysis</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">FakeNewsNet</p>
                <p className="text-sm text-muted-foreground">Social media posts with network context and engagement data</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Publications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Related Publications</h3>
          <div className="space-y-4">
            {papers.map((paper, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{paper.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{paper.authors}</p>
                    <p className="text-sm text-accent font-medium">{paper.venue}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4" />
                      Read
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
