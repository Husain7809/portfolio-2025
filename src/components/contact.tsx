"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = contactRef.current?.querySelectorAll(".animate-item");

    if (elements) {
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate social icons
    gsap.fromTo(
      ".social-icon",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="section py-24 mb-16 md:mb-0 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="animate-item text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="animate-item text-center text-muted-foreground mb-16 text-lg">
            Open to new opportunities and collaborations. Let's discuss how I can contribute to your team.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="animate-item border-2 border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-b border-border">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-base">
                  Reach out through any of these channels. I typically respond within 24 hours.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <a href="tel:+919724073530" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        +91 9724073530
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <a href="mailto:mh.varaliya@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
                        mh.varaliya@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">Professional Networks</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/mohammad-husain-b23167206/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-6 w-6 text-primary" />
                    </a>
                    <a
                      href="https://github.com/husain7809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-6 w-6 text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-item border-2 border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-b border-border">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
