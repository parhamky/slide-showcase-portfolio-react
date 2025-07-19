import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsTimeline from '@/components/ProjectsTimeline';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add your video and map URLs here
  const videoSrc = ""; // Add your video URL (e.g., "/path/to/video.mp4" or "https://example.com/video.mp4")
  const mapEmbedUrl = ""; // Add your Google Maps embed URL

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection videoSrc={videoSrc} />
      <ProjectsTimeline />
      <TeamSection />
      <ContactSection mapEmbedUrl={mapEmbedUrl} />
      <Footer />
    </div>
  );
};

export default Index;
