import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import teamMember1 from '@/assets/photo_2025-07-19_18-55-30.jpg';
import teamMember2 from '@/assets/photo_2025-07-19_19-33-32.jpg';
import teamMember3 from '@/assets/photo_2025-07-19_18-55-59.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const teamMembers = [
  {
    id: 1,
    name:"Parham Keyhani",
    role: "BackEnd Developer",
    image: teamMember1,
    description: "Backend Developer with a passion for building robust and maintainable server-side systems. With hands-on experience in Go and Django, capable for solving complex problems and optimizing backend performance",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Nadia HamedSalman",
    role: "CEO & Co-Founder",
    image: teamMember2,
    description: "Agile runs smooth when she’s in the loop — with real experience leading big projects, scaling teams, and keeping things human. Sprints flow with Jira, syncs land on Slack, and strategy lives in Notion.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Avesta Safarian",
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
    name: "Mobin Ghorbani",
    role: "Head of Design",
    image: teamMember4,
    description: "Code gets written, teams get led, and web apps get built — all with a mix of Go, Spring, Django, JS and its family and just the right amount of caffeine. Full-stack focus with a backend twist, and always aiming for clean code and a solid user experience.",
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
              className="h-full"
            >
              <Card className="overflow-hidden shadow-large hover:shadow-extra transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
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
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
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
      </div>
    </section>
  );
};

export default TeamSection;