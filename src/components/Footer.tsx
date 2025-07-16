import { MapPin, Phone, Mail, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-secondary-foreground bg-clip-text text-transparent">
                TechCorp
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Innovating for a better tomorrow. We create cutting-edge technology 
                solutions that transform businesses and empower communities worldwide.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full w-10 h-10 p-0"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full w-10 h-10 p-0"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full w-10 h-10 p-0"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full w-10 h-10 p-0"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>AI & Machine Learning</p>
              <p>Cloud Computing</p>
              <p>Blockchain Development</p>
              <p>IoT Solutions</p>
              <p>Web Development</p>
              <p>Mobile Applications</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    123 Tech Street<br />
                    Silicon Valley, CA 94043<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <p className="text-primary-foreground/80">contact@techcorp.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} TechCorp. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;