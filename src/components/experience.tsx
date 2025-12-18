"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "AeonX Digital",
    role: "Software Engineer - MERN Stack Developer",
    location: "Ahmedabad, Gujarat, India",
    period: "September 2025 - Present",
    description:
      "Developing comprehensive enterprise solutions with intelligent automation features using MERN stack",
    responsibilities: [
      "Developing comprehensive Procure-to-Pay solution with intelligent invoice automation using MERN stack",
      "Building scalable backend APIs using Node.js and Express.js for purchase order management and invoice processing",
      "Implementing React.js frontend components for supplier management, purchase requisitions, and approval workflows",
      "Integrating AI-powered invoice automation features to streamline accounts payable processes",
      "Designing MongoDB database schemas for vendor management, purchase orders, and invoice tracking",
      "Collaborating with SAP and AWS teams to ensure seamless integration with enterprise systems",
      "Implementing role-based access control (RBAC) for multi-level approval workflows",
      "Optimizing application performance and ensuring scalability for enterprise-level operations",
    ],
    skills: [
      "MERN Stack",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "AWS",
      "SAP Integration",
      "RBAC",
      "Invoice Automation",
      "API Development",
    ],
  },
  {
    company: "Bytes Technolab",
    role: "Software Engineer - Backend Developer",
    location: "Ahmedabad, Gujarat, India",
    period: "March 2023 - September 2025",
    description:
      "Led backend development for key projects across various industries, focusing on scalable, high-performance solutions",
    responsibilities: [
      "Developed and maintained RESTful APIs and GraphQL APIs using Node.js within NestJS and Express.js frameworks",
      "Designed and implemented React.js components, collaborating with frontend teams to build dynamic user interfaces",
      "Led development of key projects across various industries, focusing on scalable, high-performance backend solutions",
      "Collaborated with frontend and DevOps teams to ensure seamless integration of backend services",
      "Contributed to system efficiency enhancement by implementing asynchronous programming techniques",
      "Managed end-to-end API development lifecycle from conceptualization to implementation and maintenance",
    ],
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "React.js",
      "GraphQL",
      "RESTful APIs",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Microservices",
      "Redis",
      "Docker",
    ],
  },
];

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const experienceCards =
      experienceRef.current?.querySelectorAll(".experience-card");

    if (experienceCards) {
      gsap.fromTo(
        experienceCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    const listItems = experienceRef.current?.querySelectorAll(
      ".responsibility-item"
    );

    if (listItems) {
      gsap.fromTo(
        listItems,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Building enterprise solutions and driving technical excellence
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="experience-card border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-b border-border">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">{exp.role}</CardTitle>
                      <CardDescription className="text-xl font-semibold text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>

                    <div className="space-y-3 bg-card/50 rounded-lg p-4 border border-border">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <CalendarDays className="h-5 w-5 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  <p className="text-lg text-foreground leading-relaxed font-medium">{exp.description}</p>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full"></span>
                      Key Achievements & Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="responsibility-item flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-primary mt-1.5 font-bold text-lg">▸</span>
                          <span className="text-foreground leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full"></span>
                      Core Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 px-4 py-2 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
