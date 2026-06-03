import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { ToolsSection } from "@/components/tools-section";
import { TipsSection } from "@/components/tips-section";
import { ResourcesSection } from "@/components/resources-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <ToolsSection />
      <TipsSection />
      <ResourcesSection />
      <Footer />
    </main>
  );
}
