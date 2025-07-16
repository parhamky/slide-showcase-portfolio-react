import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { icon: Users, label: 'Team Members', value: '50+' },
  { icon: Award, label: 'Projects Completed', value: '200+' },
  { icon: Globe, label: 'Countries Served', value: '25+' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Company
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            that transform businesses and empower communities worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Video Player Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-large">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                <Button 
                  size="lg"
                  className="bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 border-2 border-primary-foreground/50 text-primary-foreground rounded-full w-20 h-20 p-0 transition-all duration-300 hover:scale-110"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Button>
              </div>
              
              {/* Video Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-primary-foreground font-semibold text-lg">
                    Company Teaser Video
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Discover our journey and vision
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Innovating for a Better Tomorrow
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with the vision to bridge the gap between cutting-edge technology 
                and real-world applications, we have been at the forefront of digital 
                transformation for over a decade.
              </p>
              
              <p>
                Our team of passionate engineers, designers, and strategists work 
                collaboratively to deliver solutions that not only meet current needs 
                but anticipate future challenges.
              </p>
              
              <p>
                From AI-powered analytics to blockchain innovations, we consistently 
                push the boundaries of what's possible, ensuring our clients stay 
                ahead in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-glow"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </h4>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;