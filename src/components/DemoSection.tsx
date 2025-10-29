import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Link2, FileText, Loader2, AlertCircle } from "lucide-react";
import { ResultCard } from "./ResultCard";
import { useToast } from "@/hooks/use-toast";

type AnalysisResult = {
  verdict: "safe" | "false" | "review";
  confidence: number;
  highlights: { text: string; reason: string }[];
  sources: { title: string; url: string }[];
  explanation: string;
};

export const DemoSection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const mockAnalyze = async (input: string) => {
    setIsAnalyzing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock result
    const mockResult: AnalysisResult = {
      verdict: input.toLowerCase().includes("fake") || input.toLowerCase().includes("false") ? "false" : 
               input.toLowerCase().includes("unverified") ? "review" : "safe",
      confidence: Math.floor(Math.random() * 30) + 70,
      highlights: [
        { text: "This claim appears in the first paragraph", reason: "No credible sources found supporting this statement" },
        { text: "Statistics mentioned without citation", reason: "Numbers cannot be verified against official databases" },
      ],
      sources: [
        { title: "PolitiFact - Fact Check Database", url: "https://www.politifact.com" },
        { title: "Snopes - Fact Checking Resource", url: "https://www.snopes.com" },
      ],
      explanation: "Our AI model analyzed the linguistic patterns, cross-referenced claims against verified databases, and evaluated the credibility of sources. The confidence score reflects the model's certainty based on available evidence.",
    };

    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const handleAnalyze = () => {
    const input = url || text;
    if (!input.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a URL or paste some text to analyze.",
        variant: "destructive",
      });
      return;
    }
    mockAnalyze(input);
  };

  return (
    <section id="demo" className="py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Try the Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyze any article or social media post for potential misinformation
          </p>
        </div>

        <Card className="p-8 shadow-lg border-2">
          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="url" className="flex items-center gap-2">
                <Link2 className="w-4 h-4" />
                URL
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Text
              </TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="space-y-4">
              <div>
                <label htmlFor="url-input" className="block text-sm font-semibold text-foreground mb-2">
                  Enter article or post URL
                </label>
                <Input
                  id="url-input"
                  type="url"
                  placeholder="https://example.com/article"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4">
              <div>
                <label htmlFor="text-input" className="block text-sm font-semibold text-foreground mb-2">
                  Paste text to analyze
                </label>
                <Textarea
                  id="text-input"
                  placeholder="Paste the article text or social media post here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[200px] text-base resize-none"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Maximum 10,000 characters
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button 
              size="lg" 
              variant="hero"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="min-w-[200px]"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze"
              )}
            </Button>
          </div>

          {isAnalyzing && (
            <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="flex items-center gap-3 text-accent">
                <Loader2 className="w-5 h-5 animate-spin" />
                <div>
                  <p className="font-semibold">Analysis in progress...</p>
                  <p className="text-sm text-muted-foreground">Cross-referencing sources and fact-checking databases</p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {result && !isAnalyzing && (
          <div className="mt-8 animate-fade-in">
            <ResultCard result={result} />
          </div>
        )}

        <div className="mt-8 p-6 bg-warning-light border border-warning/30 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div className="text-sm text-foreground">
              <p className="font-semibold text-warning mb-1">Demo Notice</p>
              <p>This is a demonstration using mock data. The actual system uses advanced NLP models trained on verified datasets. Results shown here are for illustrative purposes only.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
