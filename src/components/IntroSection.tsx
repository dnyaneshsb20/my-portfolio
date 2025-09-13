import { Button } from '@/components/ui/button';
import profileImage from '../assets/certificates/pic1.jpg';
const IntroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-24 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">Dnyanesh Badave</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              A passionate developer creating amazing digital experiences
            </p>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
              I’m focused on building modern web applications using the latest technologies. Welcome to my portfolio, where you can explore my projects and journey as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="hover-scale"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="hover-scale"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Right side - Photo */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-96 h-96 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl">
              <img 
                src={profileImage}
                alt=""
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
