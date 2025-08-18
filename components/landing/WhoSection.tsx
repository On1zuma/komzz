import React from "react";
import {
  ArrowRight,
  Phone,
  AlertCircle,
  TrendingUp,
  Globe,
  Building,
} from "lucide-react";

const WhoSection = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              👥 WHO Can I Help?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              If any of this sounds like you, we should talk...
            </p>
          </div>

          {/* Main Problem Statement */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-8 md:p-12 mb-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                If you're trying to{" "}
                <span className="text-orange-400">grow internationally</span>,
                struggling to{" "}
                <span className="text-orange-400">break into new markets</span>,
                or feeling held back by{" "}
                <span className="text-orange-400">language barriers</span>...
              </h3>

              <div className="mt-8">
                <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto">
                  <Phone className="w-6 h-6" />
                  👉 Call Me
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Problem Scenarios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Scenario 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  You're Stuck at Home
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Your business is crushing it locally, but every time you try
                  to expand internationally, you hit walls. Language barriers,
                  cultural differences, compliance nightmares...
                </p>
              </div>
              <div className="text-orange-400 font-medium text-sm">
                "We tried Germany but gave up after 6 months"
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Growth Has Plateaued
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  You've maxed out your local market. The next level of growth
                  is international, but you don't know where to start or how to
                  do it without burning cash.
                </p>
              </div>
              <div className="text-orange-400 font-medium text-sm">
                "We need new markets but don't know how"
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Translation ≠ Conversion
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  You translated your website and marketing, but international
                  sales are still terrible. Something's not clicking, but you
                  can't figure out what.
                </p>
              </div>
              <div className="text-orange-400 font-medium text-sm">
                "Our French site gets traffic but no sales"
              </div>
            </div>
          </div>

          {/* Who I Work With */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              I Partner With Ambitious Companies Like:
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="font-bold text-white">
                  Consultancies & Agencies
                </h4>
                <p className="text-slate-300 text-sm">
                  Want to offer international services to clients
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-bold text-white">SMEs Ready to Scale</h4>
                <p className="text-slate-300 text-sm">
                  Proven locally, ready for global expansion
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="font-bold text-white">Coaches & Speakers</h4>
                <p className="text-slate-300 text-sm">
                  Want to monetize their expertise globally
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-bold text-white">SaaS Companies</h4>
                <p className="text-slate-300 text-sm">
                  Need localization that actually converts
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white">E-commerce Brands</h4>
                <p className="text-slate-300 text-sm">
                  Ready to sell in multiple markets
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-pink-400" />
                </div>
                <h4 className="font-bold text-white">Authors & Creators</h4>
                <p className="text-slate-300 text-sm">
                  Want to reach international audiences
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 md:mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Sound Like You?
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Stop spinning your wheels. Let's have a real conversation about
                your international growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Let's Talk Strategy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  See My Track Record
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoSection;
