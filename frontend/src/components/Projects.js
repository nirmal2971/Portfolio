import React, { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { portfolioData } from "../mock";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

  // Get all unique technologies for filtering
  const allTechnologies = [
    ...new Set(
      portfolioData.projects.flatMap((project) => project.technologies)
    ),
  ].sort();

  // Filter projects based on search and technology
  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTech === "" || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const getProjectCardClass = (bgColor, textColor) => {
    const colorMap = {
      "light-pink":
        "bg-pink-100 text-black border-pink-200 dark:bg-pink-900/30 dark:text-pink-100 dark:border-pink-800",
      "mid-purple":
        "bg-purple-500 text-white border-purple-600 dark:bg-purple-600 dark:border-purple-700",
      "light-yellow":
        "bg-yellow-100 text-black border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-100 dark:border-yellow-800",
      "mid-blue":
        "bg-blue-500 text-white border-blue-600 dark:bg-blue-600 dark:border-blue-700",
      "mid-green":
        "bg-green-500 text-white border-green-600 dark:bg-green-600 dark:border-green-700",
    };
    return colorMap[bgColor] || "bg-card text-card-foreground border-border";
  };

  const getTechBadgeClass = (tech, bgColor) => {
    if (bgColor === "light-pink" || bgColor === "light-yellow") {
      return "bg-black/10 text-black hover:bg-black/20";
    }
    return "bg-white/20 text-white hover:bg-white/30";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A collection of projects I've worked on, showcasing my skills and
            passion for development
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12 animate-in slide-in-from-top-4 duration-700 delay-200">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-full"
                />
              </div>

              {/* Technology Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTech === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTech("")}
                  className="rounded-full"
                >
                  All
                </Button>
                {allTechnologies.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTech(tech)}
                    className="rounded-full"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-6 duration-700 delay-400">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${getProjectCardClass(
                project.bgColor,
                project.textColor
              )} animate-in slide-in-from-bottom-4`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:underline transition-all">
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      project.textColor === "white"
                        ? "opacity-90"
                        : "opacity-70"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs ${getTechBadgeClass(
                        tech,
                        project.bgColor
                      )} border-0`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-auto flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className={`flex-1 rounded-full ${
                      project.textColor === "white"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`rounded-full ${
                      project.textColor === "white"
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-black/30 text-black hover:bg-black/10"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-in fade-in duration-500">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl opacity-20">🔍</div>
              <h3 className="text-xl font-semibold">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTech("");
                }}
                variant="outline"
                className="rounded-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {portfolioData.projects.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Projects
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {allTechnologies.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Completion Rate
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-in slide-in-from-bottom-4 duration-700 delay-800">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <a href="mailto:nirmalraj@example.com">Start a Project</a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="rounded-full"
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
