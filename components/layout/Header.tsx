import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Globe,
  TrendingUp,
  Users,
  BookOpen,
  ArrowRight,
  Star,
  Award,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Multilingual Brand Strategy",
      href: "#brand-strategy",
      icon: Globe,
      desc: "Position your brand for global markets",
    },
    {
      name: "Cultural Adaptation",
      href: "#localization",
      icon: Users,
      desc: "Beyond translation—true localization",
    },
    {
      name: "International Sales Strategy",
      href: "#sales",
      icon: TrendingUp,
      desc: "Convert global visitors to customers",
    },
    {
      name: "Tech Stack Setup",
      href: "#tech",
      icon: Award,
      desc: "Complete international infrastructure",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-none"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center gap-3 group">
                <div className="text-2xl md:text-3xl font-extrabold transition-colors text-slate-900">
                  KOMZZ
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`}
                  ></div>
                  <span className="text-xs font-medium transition-colors text-slate-600">
                    Available Now
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-slate-700 hover:text-orange-600 hover:bg-orange-50">
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Services Mega Menu */}
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-4">
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="font-bold text-slate-900 mb-1">
                          International Expansion Services
                        </h3>
                        <p className="text-sm text-slate-600">
                          End-to-end solutions for global growth
                        </p>
                      </div>

                      <div className="grid gap-3">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                              <service.icon className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-slate-900 group-hover:text-orange-600 transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1">
                                {service.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>

                      <div className="border-t border-slate-100 pt-3">
                        <a
                          href="#all-services"
                          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <a
                href="#about"
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-slate-700 hover:text-orange-600 hover:bg-orange-50"
              >
                About Joe
              </a>

              {/* Case Studies */}
              <a
                href="#case-studies"
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-slate-700 hover:text-orange-600 hover:bg-orange-50"
              >
                Success Stories
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </a>

              {/* Blog */}
              <a
                href="#blog"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-slate-700 hover:text-orange-600 hover:bg-orange-50"
              >
                <BookOpen className="w-4 h-4" />
                Insights
              </a>
            </div>

            {/* CTA & Contact */}
            <div className="flex items-center gap-3">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Me</span>
                <span className="sm:hidden">Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg transition-colors text-slate-700 hover:bg-slate-100 "
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                  Services
                </h3>
                <div className="space-y-2 pl-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="flex items-center gap-3 py-2 text-slate-700 hover:text-orange-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 space-y-3">
                <a
                  href="#about"
                  className="block py-2 text-slate-700 hover:text-orange-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Joe
                </a>
                <a
                  href="#case-studies"
                  className="block py-2 text-slate-700 hover:text-orange-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Success Stories
                </a>
                <a
                  href="#blog"
                  className="block py-2 text-slate-700 hover:text-orange-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights & Blog
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-slate-200 pt-4">
                <a
                  href="#contact"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Book Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
