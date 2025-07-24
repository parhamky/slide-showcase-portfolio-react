import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroAI from '@/assets/hero-ai-analytics.jpg';
import heroIoT from '@/assets/hero-iot-ecosystem.jpg';
import heroBlockchain from '@/assets/hero-blockchain.jpg';
import heroCloud from '@/assets/hero-cloud-infrastructure.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Revolutionary data analytics platform that transforms complex datasets into actionable insights using advanced machine learning algorithms.",
    image: heroAI,
    category: "AI & Machine Learning"
  },
  {
    id: 2,
    title: "Smart IoT Ecosystem",
    description: "Comprehensive IoT solution connecting smart devices and sensors to create intelligent, automated environments for businesses.",
    image: heroIoT,
    category: "IoT Solutions"
  },
  {
    id: 3,
    title: "Blockchain Financial Platform",
    description: "Secure, decentralized financial platform enabling transparent transactions and smart contract automation for enterprises.",
    image: heroBlockchain,
    category: "Blockchain"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Suite",
    description: "Scalable cloud infrastructure solutions providing robust, secure, and efficient computing resources for growing businesses.",
    image: heroCloud,
    category: "Cloud Computing"
  }
];

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/40" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="space-y-6"
                    >
                      <div className="inline-block">
                        <span className="px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground font-medium">
                          {project.category}
                        </span>
                      </div>
                      
                      <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
                        {project.title}
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button 
                          size="lg" 
                          onClick={() => scrollToSection('projects')}
                          className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-glow"
                        >
                          Explore Projects
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-primary-foreground/80 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-foreground/80 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;