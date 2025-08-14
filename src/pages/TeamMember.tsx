import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Linkedin, Twitter, Github, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import teamMember1 from '@/assets/photo_2025-07-19_18-55-30.jpg';
import teamMember2 from '@/assets/photo_2025-07-19_18-55-54.jpg';
import teamMember3 from '@/assets/photo_2025-07-19_18-55-59.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Parham Keyhani",
    role: "Software Engineer",
    image: teamMember1,
    location: "Tehran, Iran",
    joinDate: "October 2024",
    email: "parham.8484@gmail.com",
    description: "Backend Developer with a passion for building robust and maintainable server-side systems. With hands-on experience in Go and Django, capable for solving complex problems and optimizing backend performance",
    fullBio: "Alex Johnson is a seasoned technology executive with over 15 years of experience in driving innovation and building successful tech companies. Before co-founding TechCorp, Alex held senior leadership positions at several Fortune 500 companies, where he spearheaded digital transformation initiatives and led cross-functional teams to deliver cutting-edge solutions. His passion for emerging technologies and strategic vision has been instrumental in positioning TechCorp as a leader in the industry. Alex holds an MBA from Stanford Graduate School of Business and a Bachelor's degree in Computer Science from MIT.",
    skills: ["System design", "Software archituc", "Innovation Management", "Digital Transformation", "Team Building"],
    experience: [
      {
        company: "TechCorp",
        role: "CEO & Co-Founder",
        period: "2019 - Present",
        description: "Leading company vision and strategy, overseeing operations across all departments."
      },
      {
        company: "GlobalTech Solutions",
        role: "VP of Innovation",
        period: "2016 - 2019",
        description: "Drove digital transformation initiatives and managed strategic partnerships."
      },
      {
        company: "InnovateCorp",
        role: "Director of Product Strategy",
        period: "2012 - 2016",
        description: "Led product strategy and development for enterprise software solutions."
      }
    ],
    education: [
      {
        degree: "MBA",
        school: "Stanford Graduate School of Business",
        year: "2012"
      },
      {
        degree: "BS Computer Science",
        school: "Massachusetts Institute of Technology",
        year: "2010"
      }
    ],
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
    location: "San Francisco, CA",
    joinDate: "January 2019",
    email: "sarah.chen@techcorp.com",
    description: "Technical architect specializing in AI/ML and scalable cloud infrastructure solutions.",
    fullBio: "Sarah Chen is a distinguished technologist and entrepreneur with deep expertise in artificial intelligence, machine learning, and cloud computing. As CTO and Co-Founder of TechCorp, she oversees the technical vision and architecture of all company products. Her innovative approach to solving complex technical challenges has resulted in multiple patents and industry recognition. Sarah's previous experience includes senior engineering roles at leading tech companies where she built and scaled systems serving millions of users. She is passionate about mentoring the next generation of engineers and frequently speaks at technology conferences.",
    skills: ["AI/ML", "Cloud Architecture", "System Design", "Team Leadership", "Technical Strategy"],
    experience: [
      {
        company: "TechCorp",
        role: "CTO & Co-Founder",
        period: "2019 - Present",
        description: "Leading technical strategy and overseeing all engineering and product development."
      },
      {
        company: "CloudScale",
        role: "Principal Engineer",
        period: "2015 - 2019",
        description: "Designed and implemented large-scale distributed systems and ML pipelines."
      },
      {
        company: "DataDriven Inc",
        role: "Senior Software Engineer",
        period: "2013 - 2015",
        description: "Built analytics platforms and machine learning models for enterprise clients."
      }
    ],
    education: [
      {
        degree: "MS Computer Science",
        school: "Carnegie Mellon University",
        year: "2013"
      },
      {
        degree: "BS Electrical Engineering",
        school: "University of California, Berkeley",
        year: "2011"
      }
    ],
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
    location: "Austin, TX",
    joinDate: "March 2020",
    email: "michael.rodriguez@techcorp.com",
    description: "Full-stack developer with expertise in modern web technologies and system architecture.",
    fullBio: "Michael Rodriguez is a passionate full-stack engineer with over 10 years of experience building robust web applications and distributed systems. At TechCorp, he leads the development of our core platform and mentors junior developers. Michael's expertise spans frontend technologies like React and Vue.js, backend systems with Node.js and Python, and cloud platforms including AWS and Azure. He's known for his attention to detail, problem-solving skills, and ability to translate complex technical concepts into actionable solutions. Michael is an advocate for clean code practices and test-driven development.",
    skills: ["Full-Stack Development", "React/Vue.js", "Node.js", "Python", "AWS/Azure", "System Architecture"],
    experience: [
      {
        company: "TechCorp",
        role: "Lead Software Engineer",
        period: "2020 - Present",
        description: "Leading development of core platform features and mentoring engineering team."
      },
      {
        company: "WebTech Solutions",
        role: "Senior Full-Stack Developer",
        period: "2017 - 2020",
        description: "Developed scalable web applications for enterprise clients using modern tech stack."
      },
      {
        company: "StartupLab",
        role: "Software Engineer",
        period: "2014 - 2017",
        description: "Built full-stack applications for early-stage startups across various industries."
      }
    ],
    education: [
      {
        degree: "BS Computer Science",
        school: "University of Texas at Austin",
        year: "2014"
      }
    ],
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
    location: "New York, NY",
    joinDate: "July 2020",
    email: "emily.parker@techcorp.com",
    description: "Creative designer focused on user experience and innovative digital product design.",
    fullBio: "Emily Parker is a creative design leader with over 8 years of experience in UX/UI design and digital product strategy. As Head of Design at TechCorp, she leads the design vision for all company products and ensures exceptional user experiences across all touchpoints. Emily's design philosophy centers on human-centered design principles and data-driven decision making. She has a proven track record of transforming complex technical products into intuitive, beautiful interfaces that users love. Emily is passionate about design systems, accessibility, and mentoring emerging designers in the field.",
    skills: ["UX/UI Design", "Design Systems", "User Research", "Prototyping", "Design Strategy", "Team Leadership"],
    experience: [
      {
        company: "TechCorp",
        role: "Head of Design",
        period: "2020 - Present",
        description: "Leading design strategy and managing design team across all product initiatives."
      },
      {
        company: "DesignForward",
        role: "Senior UX Designer",
        period: "2018 - 2020",
        description: "Led UX design for B2B SaaS products serving enterprise clients."
      },
      {
        company: "Creative Agency",
        role: "UI/UX Designer",
        period: "2016 - 2018",
        description: "Designed digital experiences for various client brands and products."
      }
    ],
    education: [
      {
        degree: "MFA Design",
        school: "Parsons School of Design",
        year: "2016"
      },
      {
        degree: "BA Graphic Design",
        school: "Rhode Island School of Design",
        year: "2014"
      }
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const TeamMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find(m => m.id === parseInt(id || ''));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Member not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-primary-foreground hover:bg-primary-foreground/20 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-foreground/20"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{member.name}</h1>
              <p className="text-2xl text-secondary mb-4">{member.role}</p>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {member.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{member.email}</span>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button size="sm" variant="ghost" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Biography</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {member.fullBio}
              </p>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Experience</h2>
              <div className="space-y-6">
                {member.experience.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Education</h2>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-primary">{edu.school}</p>
                        </div>
                        <Badge variant="secondary">{edu.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>


            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in collaborating or have questions? Feel free to reach out.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;