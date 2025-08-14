import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, ExternalLink, Github, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import upcomingQuantum from '@/assets/upcoming-quantum.jpg';
import upcomingNeural from '@/assets/upcoming-neural.jpg';

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Developed a comprehensive analytics platform using machine learning algorithms to process and visualize complex data sets for enterprise clients.",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    date: "2024",
    status: "completed",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Smart IoT Ecosystem",
    description: "Created an integrated IoT solution connecting multiple smart devices with real-time monitoring and automated control systems.",
    technologies: ["Node.js", "MongoDB", "IoT", "Docker"],
    date: "2023",
    status: "completed",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Blockchain Financial Platform",
    description: "Built a secure blockchain-based financial platform enabling transparent transactions and smart contract automation.",
    technologies: ["Solidity", "Web3", "React", "Ethereum"],
    date: "2023",
    status: "completed",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Suite",
    description: "Designed and implemented scalable cloud infrastructure solutions for enterprise-level applications.",
    technologies: ["Kubernetes", "AWS", "Terraform", "Docker"],
    date: "2022",
    status: "completed",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  }
];

const upcomingProjects = [
  {
    id: 5,
    title: "Quantum Computing Interface",
    description: "Revolutionary quantum computing interface that will democratize access to quantum algorithms for businesses.",
    technologies: ["Quantum", "Python", "Cloud"],
    date: "Q2 2025",
    status: "upcoming",
    image: upcomingQuantum
  },
  {
    id: 6,
    title: "Neural Network Optimizer",
    description: "Advanced neural network optimization tool for improving machine learning model performance and efficiency.",
    technologies: ["AI/ML", "Python", "CUDA"],
    date: "Q3 2025",
    status: "upcoming",
    image: upcomingNeural
  }
];

const ProjectsTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Group projects by year
  const projectsByYear = [...projects, ...upcomingProjects.map(p => ({ ...p, status: 'upcoming', link: '#', github: '#' }))]
    .reduce((acc, project) => {
      const year = project.date.includes('Q') ? '2025' : project.date;
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    }, {} as Record<string, typeof projects>);

  const yearSlides = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Scroll-based navigation with smooth behavior
  useEffect(() => {
    let ticking = false;
    let lastWheelTime = 0;
    const wheelThrottle = 100; // Throttle wheel events

    const handleWheel = (e: WheelEvent) => {
      if (!ref.current) return;

      const now = Date.now();
      if (now - lastWheelTime < wheelThrottle) return;
      lastWheelTime = now;

      const section = ref.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (rect.top <= windowHeight * 0.1 && rect.bottom >= windowHeight * 0.1) {
        setIsScrolling(true);
        
        // Handle wheel direction for slide navigation
        if (e.deltaY > 0) { // Scrolling down
          if (currentSlide < yearSlides.length - 1) {
            e.preventDefault();
            setCurrentSlide(prev => Math.min(prev + 1, yearSlides.length - 1));
          }
        } else { // Scrolling up
          if (currentSlide > 0) {
            e.preventDefault();
            setCurrentSlide(prev => Math.max(prev - 1, 0));
          }
        }
      } else {
        setIsScrolling(false);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!ref.current) return;
          
          const section = ref.current;
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Reset scrolling state when leaving section
          if (rect.bottom < 0 || rect.top > windowHeight) {
            setIsScrolling(false);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listeners for better performance
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide, yearSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % yearSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + yearSlides.length) % yearSlides.length);
  };

  return (
    <section ref={ref} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Project Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through our journey year by year to explore the projects that shaped our expertise.
          </p>
        </motion.div>

        {/* Vertical Slideshow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Year Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="rounded-full p-2"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            
            <div className="flex flex-col items-center gap-2">
              <div className="text-6xl font-bold text-primary">
                {yearSlides[currentSlide]}
              </div>
              <div className="text-sm text-muted-foreground">
                {projectsByYear[yearSlides[currentSlide]].length} projects
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="rounded-full p-2"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Year Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {yearSlides.map((year, index) => (
              <button
                key={year}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Slide Content */}
          <div className="overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="grid gap-8"
            >
              {projectsByYear[yearSlides[currentSlide]]?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden shadow-xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-primary/20">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Project Image */}
                        <div className="relative h-48 md:h-32 rounded-lg overflow-hidden bg-muted">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <div className="text-6xl font-bold text-primary/30">
                              {project.title.charAt(0)}
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="md:col-span-2 space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="text-primary font-semibold">{project.date}</span>
                            <Badge 
                              variant={project.status === 'upcoming' ? 'secondary' : 'default'} 
                              className="ml-auto"
                            >
                              {project.status === 'upcoming' ? 'Coming Soon' : 'Completed'}
                            </Badge>
                          </div>

                          <h3 className="text-2xl font-bold text-foreground">
                            {project.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="px-3 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {project.status !== 'upcoming' && (
                            <div className="flex gap-4">
                              <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" />
                                View Project
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Github className="h-4 w-4" />
                                Source Code
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Timeline Visualization */}
          <div className="mt-16 flex justify-center">
            <div className="relative flex items-center gap-4">
              {yearSlides.map((year, index) => (
                <div key={year} className="flex items-center">
                  <div 
                    className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide 
                        ? 'bg-primary scale-150 shadow-glow' 
                        : 'bg-muted-foreground/50 hover:bg-primary/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                  {index < yearSlides.length - 1 && (
                    <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;