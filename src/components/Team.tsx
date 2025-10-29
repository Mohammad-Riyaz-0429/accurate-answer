import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead AI Researcher",
    bio: "PhD in NLP from Stanford. 10+ years in fact-checking and misinformation research.",
  },
  {
    name: "Marcus Johnson",
    role: "ML Engineer",
    bio: "Former Google AI. Specializes in transformer models and large-scale training.",
  },
  {
    name: "Dr. Priya Patel",
    role: "Ethics & Policy Lead",
    bio: "Expert in AI ethics, algorithmic fairness, and responsible AI deployment.",
  },
  {
    name: "Alex Rivera",
    role: "Product Manager",
    bio: "Former journalist. Brings real-world fact-checking experience to product design.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experts in AI, journalism, and ethics working to combat misinformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="p-8 border-2 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ethics & Privacy */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-2 bg-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">Code of Ethics</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>We prioritize transparency in all AI decisions and provide clear explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Our models are regularly audited for bias and fairness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>We never use user-submitted content for model training without explicit consent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>We work with independent ethics boards to guide our development</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2 bg-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>URLs and text submitted are analyzed in real-time and not permanently stored</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>We collect minimal analytics data (anonymized usage patterns only)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>No personal information is required to use the demo tool</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Full GDPR and CCPA compliant data handling practices</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-6">
              Read Full Privacy Policy
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
