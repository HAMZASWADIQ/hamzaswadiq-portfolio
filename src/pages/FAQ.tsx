import { HelpCircle, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why did you choose Aerospace Engineering?",
      answer: "Fascinated by space, rockets, and physics; wanted a field where curiosity and engineering meet. Aerospace is my purpose and allows contribution to human space exploration. The idea of designing systems that venture beyond Earth's atmosphere and contribute to humanity's understanding of the universe deeply resonates with me.",
    },
    {
      question: "Why did you choose IIST even though you had opportunities in IITs?",
      answer: "IIST is India's premier space institute, directly linked with ISRO. It provides labs, curriculum, and opportunities aligned with my dream to work in India's space missions. The unique advantage of IIST is its direct pipeline to ISRO and the specialized aerospace focus that no other institute in India can offer.",
    },
    {
      question: "What are your long-term goals?",
      answer: "Contribute to ISRO missions in propulsion, telemetry, shielding, and spacecraft systems. Develop impactful technologies and grow as an engineer. I aspire to be part of India's manned space missions and potentially contribute to interplanetary exploration projects.",
    },
    {
      question: "What motivates you the most?",
      answer: "Growth through consistent effort, contributing to space exploration, and balancing engineering with Islamic studies. The convergence of scientific pursuit and spiritual understanding creates a unique perspective that drives my work. I believe in purposeful learning that benefits both personal development and society.",
    },
    {
      question: "What subjects or topics are you most passionate about?",
      answer: "Rocket propulsion, spacecraft systems, telemetry, plasma physics, orbital mechanics, Islamic science, and Modern Arabic. These subjects represent the intersection of my technical interests and personal values. I find the mathematical elegance of orbital mechanics particularly fascinating.",
    },
    {
      question: "What kind of projects do you want to build in the future?",
      answer: "Experimental rockets, telemetry modules, propulsion analysis tools, flight simulations, campus e-commerce websites, and plasma shielding concepts. I'm particularly interested in projects that bridge theoretical knowledge with practical implementation, allowing hands-on learning and real-world impact.",
    },
    {
      question: "How do you balance engineering studies and Islamic studies?",
      answer: "I treat both as essential; engineering for scientific understanding, Islamic studies for meaning and purpose. Proper time management and clear intention ensures progress in both domains. I view them as complementary rather than competing — both seek truth and understanding in their respective domains.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={HelpCircle}
            title="Frequently Asked Questions"
            subtitle="Common questions about my journey, choices, and aspirations"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card border border-border/30 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
                    <span className="font-display text-sm sm:text-base text-left text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
