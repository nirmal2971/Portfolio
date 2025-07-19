import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import { portfolioData } from "../mock";

const Home = () => {
  const { personal, socialLinks } = portfolioData;

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    <MapPin className="h-3 w-3 mr-2" />
                    {personal.location}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  {personal.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {personal.bio}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a href="/Resume.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-in slide-in-from-right-5 duration-700 delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-96
                     object-cover rounded-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                    <div className="text-2xl font-bold">1+</div>
                    <div className="text-sm opacity-90">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-2 animate-in slide-in-from-bottom-4 duration-700">
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                3+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center space-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                1+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center space-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                8+
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            {/* <div className="text-center space-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="text-3xl lg:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to work together?
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
