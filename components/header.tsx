"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export function Header() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto px-4 py-4 container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gradient-to-br from-primary to-secondary rounded-full w-12 h-12">
              <Sun className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-foreground text-xl">
                Green Clean Solar Energy
              </h1>
              <p className="text-muted-foreground text-sm">
                طاقة نظيفة، مستقبل مشرق
              </p>
            </div>
          </div>
          <Button onClick={scrollToContact} size="lg" className="font-medium">
            تواصل معنا
          </Button>
        </div>
      </div>
    </header>
  );
}
