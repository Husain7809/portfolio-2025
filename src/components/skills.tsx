"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API",
      "GraphQL",
      "Microservices",
      "TCP",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Elasticsearch",
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "Docker",
      "CI/CD",
      "SNS",
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "E-Commerce Solutions",
      "Data Structures & Algorithms",
      "Problem Solving",
      "RBAC",
      "API Integration",
      "Bull Queue",
    ],
  },
];

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const categories = skillsRef.current?.querySelectorAll(".skill-category");

    if (categories) {
      gsap.fromTo(
        categories,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    const badges = skillsRef.current?.querySelectorAll(".skill-badge");

    if (badges) {
      gsap.fromTo(
        badges,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="section py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            Technical Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            A comprehensive toolkit for building modern, scalable applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-category bg-card p-8 rounded-xl border-2 border-border shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary group-hover:scale-105 transition-transform">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="skill-badge bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-card border-2 border-primary/20 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I continuously expand my skill set to stay current with industry trends and emerging technologies, ensuring I deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
