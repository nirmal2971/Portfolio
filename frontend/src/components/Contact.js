import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { portfolioData, formSubmission } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { personal, socialLinks } = portfolioData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await formSubmission.submitContactForm(formData);
      setSubmitStatus({ type: 'success', message: response.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (iconName) => {
    switch(iconName) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      case 'mail': return <Mail className="h-5 w-5" />;
      default: return <Mail className="h-5 w-5" />;
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-in slide-in-from-left-5 duration-700">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Send Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {submitStatus.type === 'success' && <CheckCircle className="h-5 w-5" />}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="rounded-lg resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                  className="w-full rounded-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-in slide-in-from-right-5 duration-700 delay-200">
            {/* Contact Details */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a 
                      href={`tel:${personal.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{personal.location}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <p className="text-muted-foreground mb-6">
                Connect with me on social media for updates and tech insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {getSocialIcon(social.icon)}
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">
                        @{social.name.toLowerCase()}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                  Available for Projects
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and interesting full-time opportunities.
              </p>
              <div className="text-sm text-muted-foreground">
                <div>⏰ Response time: Within 24 hours</div>
                <div>💼 Project types: Web apps, APIs, consultations</div>
                <div>🌍 Remote friendly worldwide</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;