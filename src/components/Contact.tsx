import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setEmail("");
    setMessage("");
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You'll receive monthly updates about our research and model improvements.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our mission to combat misinformation through research, collaboration, and education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold text-foreground mb-2">Contact Us</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Questions, bug reports, or collaboration inquiries
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us how we can help..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Newsletter & links */}
          <div className="space-y-8">
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold text-foreground mb-2">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Monthly updates on research, model improvements, and new features
              </p>
              <form onSubmit={handleNewsletter} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
                <Button type="submit" variant="outline" className="w-full">
                  Subscribe
                </Button>
              </form>
            </Card>

            <Card className="p-8 border-2 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@fakenewsdetection.ai"
                  className="flex items-center gap-3 p-4 bg-muted hover:bg-accent/10 rounded-lg transition-colors group"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent">Email</p>
                    <p className="text-sm text-muted-foreground">contact@fakenewsdetection.ai</p>
                  </div>
                </a>
                <a
                  href="https://github.com/fakenewsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-muted hover:bg-accent/10 rounded-lg transition-colors group"
                >
                  <Github className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent">GitHub</p>
                    <p className="text-sm text-muted-foreground">View our open-source code</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-muted hover:bg-accent/10 rounded-lg transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent">Community Forum</p>
                    <p className="text-sm text-muted-foreground">Join discussions with researchers</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
