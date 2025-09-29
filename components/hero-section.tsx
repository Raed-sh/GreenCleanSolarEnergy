"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* Background Image/Video */}
      <div className="z-0 absolute inset-0">
        <img
          src="/solar-panel-field-with-blue-sky-and-sun-rays.jpg"
          alt="حقل الألواح الشمسية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="z-10 relative mx-auto px-4 text-center container">
        <h2 className="mb-6 font-bold text-white text-5xl md:text-7xl text-balance">
          حلول متطورة لتنظيف الألواح الشمسية
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-white/90 text-xl md:text-2xl text-pretty">
          نستخدم أحدث تقنيات الروبوتات لضمان أقصى كفاءة لأنظمتكم الشمسية
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="px-8 py-6 h-auto text-lg"
        >
          احصل على استشارة مجانية
          <ArrowDown className="mr-2 w-5 h-5 animate-bounce" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="bottom-8 left-1/2 z-10 absolute -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
