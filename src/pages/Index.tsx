import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsTimeline from '@/components/ProjectsTimeline';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AboutVideo from '@/assets/Screencast from 2025-02-04 19-26-30.mp4'; // Adjust the path as necessary

const Index = () => {
  // Add your video and map URLs here
  const videoSrc = AboutVideo // Add your video URL (e.g., "/path/to/video.mp4" or "https://example.com/video.mp4")
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.042794534289!2d51.3859477793457!3d35.7005645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00e27d576a35%3A0xf9bb904da914f569!2zVGVocmFuIFByb3ZpbmNlLCBUZWhyYW4sIFMgSmFtYWx6YWRlaCBTdNiMINio2LHYrCAyMDEg2KzZhdin2YTYstin2K_ZhyDYrNmG2YjYqNuMLCBJcmFu!5e0!3m2!1sen!2s!4v1752937055412!5m2!1sen!2s"; // Add your Google Maps embed URL

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

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.042794534289!2d51.3859477793457!3d35.7005645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00e27d576a35%3A0xf9bb904da914f569!2zVGVocmFuIFByb3ZpbmNlLCBUZWhyYW4sIFMgSmFtYWx6YWRlaCBTdNiMINio2LHYrCAyMDEg2KzZhdin2YTYstin2K_ZhyDYrNmG2YjYqNuMLCBJcmFu!5e0!3m2!1sen!2s!4v1752937055412!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>