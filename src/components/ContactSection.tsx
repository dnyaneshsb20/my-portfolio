import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github } from 'lucide-react';
import { SiInstagram, SiHackerrank, SiX, SiLinkedin, SiGmail  } from 'react-icons/si';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = "dnyaneshsb20@gmail.com";
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open Gmail in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");

    // Clear all fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dnyaneshsb20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-primary/10 rounded-lg dark:bg-white">
                  <SiGmail className="w-6 h-6 text-[#EA4335]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">dnyaneshsb20@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/dnyanesh-badave-0b0649263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-primary/10 rounded-lg dark:bg-white">
                  <SiLinkedin className="w-6 h-6 text-[#0A66DF]" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com/in/dnyanesh-badave-0b0649263</p>
                </div>
              </a>

              <a
                href="https://www.hackerrank.com/dnyaneshsb20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-primary/10 rounded-lg dark:bg-white">
                  <SiHackerrank className="w-6 h-6 text-[#32C766]" />
                </div>
                <div>
                  <h4 className="font-medium">HackerRank</h4>
                  <p className="text-muted-foreground">hackerrank.com/profile/dnyaneshsb20</p>
                </div>
              </a>

              <a
                href="https://github.com/dnyaneshsb20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-primary/10 rounded-lg dark:bg-white">
                  <Github className="w-6 h-6 text-[#181717]" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-muted-foreground">github.com/dnyaneshsb20</p>
                </div>
              </a>

              <a
                href="https://instagram.com/dnyanesh.sb_12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-primary/10 rounded-lg dark:bg-white">
                  <SiInstagram className="w-6 h-6 text-[#E4405F]" />
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-muted-foreground">instagram.com/dnyanesh.sb_12</p>
                </div>
              </a>

              <a
                href="https://x.com/DnyaneshBadave3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-primary/10 rounded-lg dark:bg-white">
                  <SiX className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-medium">X (Twitter)</h4>
                  <p className="text-muted-foreground">x.com/DnyaneshBadave3</p>
                </div>
              </a>
            </div>
          </div>

          <Card className="hover-scale bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'd love to hear from you</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGmailSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
