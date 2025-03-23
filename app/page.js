import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
  Zap,
  BarChart3,
  LucideFile,
  Star,
  Heart,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[60%] -right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
              Powerful Features for Your Career Growth
            </h2>
            <p className="text-muted-foreground">
              Cutting-edge tools designed to accelerate your professional journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-blue-500/10 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden group hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-8 pb-6 px-6 text-center flex flex-col items-center relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/10 to-sky-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
                    {React.cloneElement(feature.icon, { 
                      className: "h-7 w-7 text-blue-500 transition-colors duration-300 group-hover:text-sky-500"
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600/90 via-sky-500/90 to-blue-600/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-4xl md:text-5xl font-bold text-white">50+</h3>
              <p className="text-blue-100">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-4xl md:text-5xl font-bold text-white">1000+</h3>
              <p className="text-blue-100">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-4xl md:text-5xl font-bold text-white">95%</h3>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-4xl md:text-5xl font-bold text-white">24/7</h3>
              <p className="text-blue-100">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[30%] -left-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-5 relative group hover-lift"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-blue-500/20 z-0 group-hover:border-blue-500/40 transition-colors duration-300"></div>
                )}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/10 to-sky-500/10 flex items-center justify-center relative z-10 hover:scale-110 transition-transform duration-300 border border-blue-500/20 group-hover:border-blue-500/40">
                  {React.cloneElement(item.icon, { 
                    className: "h-8 w-8 text-blue-500 group-hover:text-sky-500 transition-colors duration-300"
                  })}
                </div>
                <div className="absolute -top-4 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-bold text-sm hover:scale-110 transition-transform duration-300 shadow-md">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-xl group-hover:text-blue-500 transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50/50 to-sky-50/50 relative">
        <div className="absolute inset-0 bg-grid-white/5 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-background/70 backdrop-blur-sm border border-blue-500/10 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden hover-lift group"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="relative h-16 w-16 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                        <Image
                          width={64}
                          height={64}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-blue-500/20 p-[2px] group-hover:border-blue-500/40 transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-full p-1">
                          <Heart className="h-3 w-3 fill-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-lg group-hover:text-blue-500 transition-colors duration-300">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-blue-500 font-medium group-hover:text-sky-500 transition-colors duration-300">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote className="relative">
                      <div className="absolute -top-3 -left-1 text-blue-300/20 text-5xl font-serif">"</div>
                      <p className="text-muted-foreground relative z-10 italic pl-4 group-hover:text-foreground/80 transition-colors duration-300">
                        {testimonial.quote}
                      </p>
                      <div className="absolute -bottom-6 -right-1 text-blue-300/20 text-5xl font-serif">"</div>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-blue-500/10 bg-background/70 backdrop-blur-sm rounded-lg px-6 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 hover-lift"
                >
                  <AccordionTrigger className="text-left text-lg py-5 hover:text-blue-500 transition-colors duration-300">
                    {faq.question.replace(/Sensai/g, "Next Gen AI")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer.replace(/Sensai/g, "Next Gen AI")}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mb-20">
        <div className="mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-blue-600 py-24">
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
                  backgroundSize: "100px 100px"
                }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-sky-500/90 to-blue-600/90"></div>
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto px-4">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to Accelerate Your Career?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join thousands of professionals who are advancing their careers
                  with AI-powered guidance.
                </p>
              </div>
              <Link href="/dashboard" passHref>
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 rounded-full border-none hover:scale-105"
                >
                  Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
