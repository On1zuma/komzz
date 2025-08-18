import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="px-4 md:px-6 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="text-2xl font-bold mb-4">KOMZZ</div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  International expansion expert helping businesses break
                  through language barriers and scale globally. From strategy to
                  execution.
                </p>
                <div className="flex items-center gap-2 text-orange-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    50+ Markets • €12M+ Revenue Generated
                  </span>
                </div>
              </div>

              {/* Contact Quick */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">+1 (555) 123-GLOBAL</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">joe@komzz.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-orange-500/30 pb-2">
                Services
              </h3>
              <nav className="space-y-3">
                <a
                  href="#brand-strategy"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Multilingual Brand Strategy
                </a>
                <a
                  href="#cultural-adaptation"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Cultural Adaptation & Localization
                </a>
                <a
                  href="#sales-strategy"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  International Sales Strategy
                </a>
                <a
                  href="#tech-setup"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Tech Stack Setup & Automation
                </a>
                <a
                  href="#content-repurposing"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Content Repurposing & Distribution
                </a>
                <a
                  href="#productisation"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Productisation & Monetization
                </a>
                <a
                  href="#market-entry"
                  className="block text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  → Full Market Entry Consulting
                </a>
              </nav>
            </div>

            {/* Markets & Industries */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-emerald-500/30 pb-2">
                Markets & Industries
              </h3>

              {/* Top Markets */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                    Target Markets
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#europe-expansion"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      🇪🇺 European Market Entry
                    </a>
                    <a
                      href="#usa-expansion"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      🇺🇸 USA Market Expansion
                    </a>
                    <a
                      href="#uk-expansion"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      🇬🇧 UK Business Development
                    </a>
                    <a
                      href="#asia-pacific"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      🌏 Asia-Pacific Growth
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                    Industries
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#saas-international"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      SaaS & Tech Companies
                    </a>
                    <a
                      href="#ecommerce-global"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      E-commerce & Retail
                    </a>
                    <a
                      href="#consulting-agencies"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      Consultancies & Agencies
                    </a>
                    <a
                      href="#coaches-speakers"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      Coaches & Speakers
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources & Social */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-blue-500/30 pb-2">
                Resources
              </h3>

              <nav className="space-y-3">
                <a
                  href="#blog"
                  className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  International Expansion Blog
                </a>
                <a
                  href="#case-studies"
                  className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Success Stories & Case Studies
                </a>
                <a
                  href="#free-guide"
                  className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Free Market Entry Guide
                </a>
                <a
                  href="#webinars"
                  className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  International Growth Webinars
                </a>
                <a
                  href="#newsletter"
                  className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Weekly Growth Newsletter
                </a>
              </nav>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-3">
                  Follow for Daily Tips
                </h4>
                <div className="flex gap-3">
                  <a
                    href="#linkedin"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#twitter"
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#youtube"
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left - Copyright & Links */}
              <div className="space-y-3">
                <div className="text-slate-400 text-sm">
                  © 2025 KOMZZ International Expansion Consulting. All rights
                  reserved.
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                  <a
                    href="#sitemap"
                    className="hover:text-white transition-colors"
                  >
                    Sitemap
                  </a>
                </div>
              </div>

              {/* Right - Quick CTA */}
              <div className="text-right">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data (Hidden) */}
      <script type="application/ld+json" className="hidden">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "KOMZZ International Expansion Consulting",
          description:
            "International expansion expert helping businesses break through language barriers and scale globally",
          url: "https://komzz.com",
          telephone: "+1-555-123-GLOBAL",
          email: "joe@komzz.com",
          founder: {
            "@type": "Person",
            name: "Joe",
            jobTitle: "International Expansion Expert",
          },
          areaServed: ["Europe", "North America", "Asia Pacific"],
          serviceType: [
            "International Business Consulting",
            "Market Entry Strategy",
            "Cultural Localization",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200",
          },
        })}
      </script>
    </footer>
  );
};

export default Footer;
