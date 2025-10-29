import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How accurate is the AI model?",
    answer: "Our model achieves 92.4% accuracy on the MultiFC benchmark dataset, which contains 40,000 fact-checked claims from 26 different fact-checking websites. Performance varies based on claim type, with highest accuracy for factual claims and lower accuracy for subjective statements.",
  },
  {
    question: "What types of content can it analyze?",
    answer: "The system works best with factual claims in English text, including news articles, social media posts, and public statements. It can analyze URLs (we fetch the content) or direct text input. Currently, it's optimized for text-based content and doesn't analyze images or videos directly.",
  },
  {
    question: "How long does it take?",
    answer: "Most analyses complete in 2-5 seconds. Complex articles with many claims or requiring extensive source verification may take up to 15 seconds. The demo uses mock data for instant results.",
  },
  {
    question: "Can I use this for research or education?",
    answer: "Yes! We encourage academic and educational use. Contact us for API access, bulk analysis tools, or to collaborate on research projects. We also provide educational materials and lesson plans for teachers.",
  },
  {
    question: "What if the AI makes a mistake?",
    answer: "Our system provides confidence scores precisely because no AI is perfect. Low confidence scores (below 70%) indicate uncertainty. Always verify important claims through multiple sources. You can report errors to help us improve the model.",
  },
  {
    question: "Is my data private?",
    answer: "Yes. Submitted URLs and text are processed in real-time and not stored permanently. We collect only anonymized usage statistics. No personal information is required to use the tool. See our Privacy Policy for full details.",
  },
  {
    question: "Can I integrate this into my application?",
    answer: "Yes! We offer API access for developers and organizations. Contact us to discuss pricing, rate limits, and integration support. Open-source researchers may qualify for free API access.",
  },
  {
    question: "How often is the model updated?",
    answer: "The model is retrained monthly with new verified data from fact-checking organizations. Our source databases are updated in real-time. Version history and model changelogs are available on our research page.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our fact-checking system
          </p>
        </div>

        <Card className="p-8 border-2 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};
