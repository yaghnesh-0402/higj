"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import higjtoplogo from "../assets/higjtoplogo.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionHeight = homeSection.offsetHeight;
        setIsScrolled(window.scrollY > homeSectionHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md opacity-100 translate-y-0"
          : "bg-transparent opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
               <img
              src={higjtoplogo}
              alt="HIGJ Logo"
              className="h-16 w-16 rounded-full object-cover mr-3 shadow-md"
            />

            <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>HIGJ</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("courses")}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              Courses
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => {
              // Simple mobile menu toggle
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            ☰
          </Button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 z-50">
            <div className="flex flex-col space-y-2 p-4">
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("home");
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="text-gray-700 hover:text-blue-600 justify-start hover:bg-blue-50"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("about");
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="text-gray-700 hover:text-blue-600 justify-start hover:bg-blue-50"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("courses");
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="text-gray-700 hover:text-blue-600 justify-start hover:bg-blue-50"
              >
                Courses
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("contact");
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="text-gray-700 hover:text-blue-600 justify-start hover:bg-blue-50"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}