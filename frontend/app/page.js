import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import AffiliateSection from "./sections/AffiliateSection";
import EmailSection from "./sections/EmailSection";
// import AchievementsSection from "./sections/AchievementsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-backdrop flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-12">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <AffiliateSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
