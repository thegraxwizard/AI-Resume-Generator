"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const sparkleRefs = useRef([]);

  useEffect(() => {
    const imageElement = imageRef.current;
    const headingElement = headingRef.current;
    const paragraphElement = paragraphRef.current;
    const buttonContainerElement = buttonContainerRef.current;

    // Add initial animation classes after component mount
    setTimeout(() => {
      headingElement.classList.add('fade-in-up');
      paragraphElement.classList.add('fade-in-up');
      buttonContainerElement.classList.add('fade-in-up');
    }, 100);

    // Animate sparkles
    const animateSparkles = () => {
      sparkleRefs.current.forEach((sparkle, index) => {
        if (sparkle) {
          setTimeout(() => {
            sparkle.classList.add('scale-in');
          }, index * 200);
        }
      });
    };
    
    animateSparkles();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-40 pb-10 overflow-hidden">
      <div className="relative z-10">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 opacity-0" ref={el => sparkleRefs.current[0] = el}>
          <Star className="w-6 h-6 text-blue-500" fill="rgba(59, 130, 246, 0.2)" />
        </div>
        <div className="absolute top-40 right-32 opacity-0" ref={el => sparkleRefs.current[1] = el}>
          <Sparkles className="w-8 h-8 text-sky-500" />
        </div>
        <div className="absolute bottom-40 left-32 opacity-0" ref={el => sparkleRefs.current[2] = el}>
          <Zap className="w-7 h-7 text-blue-500" fill="rgba(59, 130, 246, 0.2)" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="space-y-10 text-center max-w-4xl mx-auto">
            <div className="space-y-6 mx-auto">
              <h1 
                ref={headingRef}
                className="opacity-0 text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient"
              >
                Your <span className="relative inline-block">
                  Next Gen AI
                  <span className="absolute -top-5 -right-5 hover-lift">
                    <Sparkles className="h-6 w-6 text-blue-500" />
                  </span>
                </span> Coach for Professional Success
              </h1>
              <p 
                ref={paragraphRef}
                className="opacity-0 mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed"
              >
                Accelerate your career with personalized guidance, intelligent interview prep, 
                and AI-powered tools designed for the modern professional.
              </p>
            </div>
            <div 
              ref={buttonContainerRef}
              className="opacity-0 flex flex-wrap justify-center gap-4 pt-6"
            >
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="px-8 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 rounded-full"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 rounded-full"
              >
                Take a Tour
              </Button>
            </div>
            <div className="hero-image-wrapper mt-12 md:mt-16">
              <div ref={imageRef} className="hero-image hover-glow">
                <Image
                  src="/banner.jpeg"
                  width={1280}
                  height={720}
                  alt="Dashboard Preview"
                  className="rounded-2xl border border-blue-500/20 shadow-2xl mx-auto transition-all duration-500 hover:brightness-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
