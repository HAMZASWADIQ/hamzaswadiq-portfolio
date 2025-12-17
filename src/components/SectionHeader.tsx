import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon: Icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      {Icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      )}
      <h1 className="section-title gradient-text">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
