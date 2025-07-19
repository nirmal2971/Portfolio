import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Code, Coffee, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const About = () => {
  const { personal, skills } = portfolioData;

  const getSkillColor = (colorName) => {
    const colorMap = {
      'mid-yellow': 'bg-yellow-400 text-black',
      'mid-blue': 'bg-blue-500 text-white',
      'mid-green': 'bg-green-500 text-white',
      'mid-purple': 'bg-purple-500 text-white',
      'dark-blue': 'bg-blue-800 text-white',
      'dark-green': 'bg-green-800 text-white',
      'mid-orange': 'bg-orange-500 text-white',
      'light-blue': 'bg-blue-200 text-black',
    };
    return colorMap[colorName] || 'bg-primary text-primary-foreground';
  };

  const getSkillLevel = (level) => {
    switch(level) {
      case 'Expert': return '90%';
      case 'Advanced': return '75%';
      case 'Intermediate': return '60%';
      default: return '50%';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">My Story</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {personal.bio}
                  </p>
                  <p>
                    My journey in software development started during my college years when I built my first web application. 
                    Since then, I've been passionate about creating digital solutions that make a real impact.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
                    When I'm not coding, you can find me contributing to open-source projects or mentoring aspiring developers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </Card>
            </div>
          </div>

          {/* Profile Image & Contact Info */}
          <div className="space-y-8 animate-in slide-in-from-right-5 duration-700 delay-200">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                    <Coffee className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{personal.name}</h3>
                  <p className="text-primary font-medium">{personal.title}</p>
                  <p className="text-muted-foreground">{personal.location}</p>
                </div>
                <div className="pt-4">
                  <Button asChild className="rounded-full">
                    <Link to="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-in slide-in-from-bottom-6 duration-700 delay-400">
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <p className="text-muted-foreground">
                Technologies and tools I work with on a regular basis
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="space-y-3 animate-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className={`${getSkillColor(skill.color)} border-0`}>
                        {skill.name}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-sm font-medium">
                      {getSkillLevel(skill.level)}
                    </span>
                  </div>
                  <div className="h-2 bg-accent rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: getSkillLevel(skill.level),
                        animationDelay: `${index * 150}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind or just want to chat, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="rounded-full">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;