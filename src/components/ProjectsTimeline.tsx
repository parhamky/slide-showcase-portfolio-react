import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ExternalLink, Github } from 'lucide-react';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Project Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our journey of innovation through the projects that have defined our expertise 
            and shaped the future of technology.
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Main Timeline Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/20 via-secondary/30 to-primary/20 transform md:-translate-x-1 rounded-full"></div>
          
          {/* Animated Pulse Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-0.25 rounded-full animate-pulse shadow-glow"></div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-12`}
              >
                {/* Enhanced Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  {/* Outer Glow Ring */}
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse"></div>
                  {/* Main Node */}
                  <div className="absolute inset-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-xl">
                    {/* Inner Dot */}
                    <div className="absolute inset-2 w-4 h-4 bg-background rounded-full"></div>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {project.date}
                  </div>
                </div>

                {/* Connection Line to Card */}
                <div className={`absolute ${
                  index % 2 === 0 
                    ? 'left-20 md:left-1/2 md:right-1/2 md:w-8' 
                    : 'left-20 md:right-1/2 md:left-1/2 md:w-8'
                } top-1/2 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 hidden md:block`}></div>

                {/* Enhanced Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="relative">
                    {/* Card Arrow */}
                    <div className={`absolute top-8 ${
                      index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'
                    } hidden md:block w-6 h-6 bg-card border border-primary/20 transform rotate-45 shadow-lg`}></div>
                    
                    <Card className="overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-700 hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-card via-card/95 to-primary/5 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5"></div>
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                          <Badge variant="secondary" className="bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary border-secondary/30">
                            {project.status}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="px-3 py-1 border-primary/30 hover:bg-primary/10 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2 border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300">
                            <Github className="h-4 w-4" />
                            Source Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Upcoming Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                <Card className="h-full border-2 border-dashed border-primary/30 bg-gradient-subtle hover:shadow-large transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-5 w-5 text-secondary" />
                      <span className="text-secondary font-semibold">{project.date}</span>
                      <Badge variant="secondary" className="ml-auto bg-secondary/20 text-secondary">
                        Coming Soon
                      </Badge>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="px-3 py-1 border-secondary/50 text-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;