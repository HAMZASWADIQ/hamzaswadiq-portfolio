import { useState } from "react";
import { Image, X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ["All", "Academics", "Internships", "Projects", "Events", "Islamic Science", "Personal"];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: "Academics", title: "IIST Campus", placeholder: true },
    { id: 2, category: "Academics", title: "Class 12 Certificate", placeholder: true },
    { id: 3, category: "Internships", title: "IIT Palakkad Lab", placeholder: true },
    { id: 4, category: "Internships", title: "Research Team", placeholder: true },
    { id: 5, category: "Projects", title: "Plasma Shielding Presentation", placeholder: true },
    { id: 6, category: "Projects", title: "Portfolio Development", placeholder: true },
    { id: 7, category: "Events", title: "Science Fair", placeholder: true },
    { id: 8, category: "Events", title: "Conference Participation", placeholder: true },
    { id: 9, category: "Islamic Science", title: "Jamia Graduation", placeholder: true },
    { id: 10, category: "Islamic Science", title: "Arabic Studies", placeholder: true },
    { id: 11, category: "Personal", title: "Home - Kodinji", placeholder: true },
    { id: 12, category: "Personal", title: "Achievement Celebration", placeholder: true },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxImage(index);
  const closeLightbox = () => setLightboxImage(null);
  const nextImage = () =>
    setLightboxImage((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  const prevImage = () =>
    setLightboxImage((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={Image}
            title="Gallery"
            subtitle="Visual moments from my academic journey, projects, and personal life"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-display text-xs transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="glass-card aspect-square overflow-hidden cursor-pointer card-hover group"
              >
                <div className="w-full h-full bg-gradient-to-br from-muted to-space-blue flex flex-col items-center justify-center p-4">
                  <Image className="w-10 h-10 text-muted-foreground mb-2 group-hover:text-primary transition-colors" />
                  <p className="text-muted-foreground text-xs text-center font-display">
                    {item.title}
                  </p>
                  <span className="text-primary/60 text-[10px] mt-1">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-2 text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="glass-card w-full max-w-2xl aspect-video flex flex-col items-center justify-center p-8">
            <Image className="w-20 h-20 text-muted-foreground mb-4" />
            <p className="text-foreground font-display text-lg mb-2">
              {filteredItems[lightboxImage].title}
            </p>
            <span className="text-primary text-sm">{filteredItems[lightboxImage].category}</span>
            <p className="text-muted-foreground text-xs mt-4">Image placeholder</p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 text-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
