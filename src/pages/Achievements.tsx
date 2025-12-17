import { Trophy, Star, Award, Target, Rocket } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: "Class 10 (SSLC)",
      description: "Full A+ Grade",
      highlight: "Perfect Score",
      color: "primary",
    },
    {
      icon: Award,
      title: "Class 12",
      description: "99.6% Marks",
      highlight: "Outstanding Performance",
      color: "secondary",
    },
    {
      icon: Target,
      title: "JEE Main",
      description: "99.1 Percentile",
      highlight: "Top 1%",
      color: "primary",
    },
    {
      icon: Trophy,
      title: "JEE Advanced",
      description: "OBC-NCL Rank 1659",
      highlight: "Elite Achievement",
      color: "secondary",
    },
    {
      icon: Rocket,
      title: "IIST Admission",
      description: "B.Tech Aerospace Engineering",
      highlight: "Dream Realized",
      color: "primary",
    },
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={Trophy}
            title="Achievements"
            subtitle="Milestones and accomplishments throughout my academic journey"
          />

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 hidden md:block" />

              <div className="space-y-8 md:space-y-12">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="glass-card p-6 card-hover inline-block w-full">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-display mb-3 ${
                          achievement.color === "primary" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-secondary/10 text-secondary"
                        }`}>
                          {achievement.highlight}
                        </span>
                        <h3 className="font-display text-lg font-bold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      achievement.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    } animate-glow`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>

                    {/* Empty space for alternating */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
