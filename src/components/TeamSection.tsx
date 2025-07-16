import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    image: teamMember1,
    description: "Visionary leader with 15+ years in tech innovation and strategic business development.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    image: teamMember2,
    description: "Technical architect specializing in AI/ML and scalable cloud infrastructure solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Lead Software Engineer",
    image: teamMember3,
    description: "Full-stack developer with expertise in modern web technologies and system architecture.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Head of Design",
    image: teamMember4,
    description: "Creative designer focused on user experience and innovative digital product design.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const handleViewProfile = (memberId: number) => {
    navigate(`/team/${memberId}`);
  };

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate professionals behind our innovative solutions. 
            Each team member brings unique expertise and creativity to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden shadow-large hover:shadow-extra transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="ghost" className="bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 text-primary-foreground rounded-full w-10 h-10 p-0">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 text-primary-foreground rounded-full w-10 h-10 p-0">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 text-primary-foreground rounded-full w-10 h-10 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <Button
                      onClick={() => handleViewProfile(member.id)}
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-medium group/btn"
                    >
                      View Full Profile
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation 
              and want to make a difference in the tech world.
            </p>
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;