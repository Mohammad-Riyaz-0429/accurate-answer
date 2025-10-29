import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ExternalLink, 
  Copy, 
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type AnalysisResult = {
  verdict: "safe" | "false" | "review";
  confidence: number;
  highlights: { text: string; reason: string }[];
  sources: { title: string; url: string }[];
  explanation: string;
};

type ResultCardProps = {
  result: AnalysisResult;
};

export const ResultCard = ({ result }: ResultCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case "safe":
        return {
          label: "Likely True",
          variant: "success" as const,
          icon: CheckCircle2,
          color: "text-success",
          bgColor: "bg-success-light",
        };
      case "false":
        return {
          label: "Likely False",
          variant: "danger" as const,
          icon: XCircle,
          color: "text-danger",
          bgColor: "bg-danger-light",
        };
      case "review":
        return {
          label: "Needs Review",
          variant: "warning" as const,
          icon: AlertTriangle,
          color: "text-warning",
          bgColor: "bg-warning-light",
        };
      default:
        return {
          label: "Unknown",
          variant: "neutral" as const,
          icon: AlertTriangle,
          color: "text-neutral",
          bgColor: "bg-neutral-light",
        };
    }
  };

  const config = getVerdictConfig(result.verdict);
  const VerdictIcon = config.icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    toast({
      title: "Copied to clipboard",
      description: "Analysis result copied as JSON",
    });
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analysis-result-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded",
      description: "Analysis result downloaded as JSON file",
    });
  };

  return (
    <Card className="overflow-hidden shadow-xl border-2">
      {/* Header with verdict */}
      <div className={`${config.bgColor} border-b-2 p-8`}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <VerdictIcon className={`w-12 h-12 ${config.color}`} />
            <div>
              <Badge variant={config.variant} className="text-base px-4 py-1.5 mb-2">
                {config.label}
              </Badge>
              <p className="text-sm text-muted-foreground">
                Analysis complete
              </p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="w-4 h-4" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Confidence meter */}
      <div className="p-8 border-b">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-foreground">Confidence Score</span>
          <span className="text-2xl font-bold text-accent">{result.confidence}%</span>
        </div>
        
        <div className="relative h-4 bg-muted rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-glow rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${result.confidence}%` }}
          />
        </div>
        
        <p className="text-xs text-muted-foreground mt-2">
          Based on linguistic patterns, source credibility, and fact-checking databases
        </p>
      </div>

      {/* Highlighted issues */}
      {result.highlights.length > 0 && (
        <div className="p-8 border-b bg-card">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Flagged Content
          </h3>
          <div className="space-y-4">
            {result.highlights.map((highlight, index) => (
              <div key={index} className="p-4 bg-warning-light border border-warning/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">"{highlight.text}"</p>
                <p className="text-sm text-muted-foreground">{highlight.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sources */}
      {result.sources.length > 0 && (
        <div className="p-8 border-b bg-card">
          <h3 className="text-lg font-bold text-foreground mb-4">Verified Sources</h3>
          <div className="space-y-3">
            {result.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-accent/5 hover:bg-accent/10 border border-accent/20 rounded-lg transition-colors group"
              >
                <span className="font-medium text-foreground group-hover:text-accent">
                  {source.title}
                </span>
                <ExternalLink className="w-4 h-4 text-accent" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Explanation */}
      <div className="p-8">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between text-left group"
        >
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            How This Decision Was Made
          </h3>
          {showDetails ? (
            <ChevronUp className="w-5 h-5 text-accent" />
          ) : (
            <ChevronDown className="w-5 h-5 text-accent" />
          )}
        </button>
        
        {showDetails && (
          <div className="mt-4 p-4 bg-muted rounded-lg animate-fade-in">
            <p className="text-sm text-foreground leading-relaxed">{result.explanation}</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <strong>Model version:</strong> v2.5.1 | <strong>Last updated:</strong> March 2025 | <strong>Dataset:</strong> MultiFC-2024
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
