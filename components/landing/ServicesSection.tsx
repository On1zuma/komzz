import React from "react";
import {
  Target,
  Globe,
  TrendingUp,
  Cog,
  Video,
  DollarSign,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              ✏️ WHAT Do I Offer?
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                <span className="font-bold text-orange-600">
                  Part Language Strategist
                </span>
                ,
                <span className="font-bold text-emerald-600">
                  {" "}
                  part Business Development Advisor
                </span>
                ,
                <span className="font-bold text-blue-600">
                  {" "}
                  part Market-Entry Tech Consultant
                </span>
              </p>
              <p className="text-lg text-slate-600">
                — all geared to help you{" "}
                <span className="font-bold text-slate-900">
                  scale across countries
                </span>
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Multilingual Brand Strategy
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Your brand message, adapted for each market. Not just
                  translation—strategic positioning that resonates with local
                  cultures and buying behaviors.
                </p>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Market-specific brand positioning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Cultural adaptation strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Local competitor analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Cultural Adaptation
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Cultural adaptation beyond literal translation—what I call
                  <span className="font-semibold text-emerald-600">
                    {" "}
                    strategic communication localisation
                  </span>
                </p>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Cultural context research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Local communication preferences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Message adaptation workshops</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Sales Strategy
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Sales strategy and infrastructure for international markets.
                  Systems that turn global visitors into paying customers.
                </p>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>International sales funnels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Local payment integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Cross-border conversion optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Cog className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Tech Stack Setup
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Tech stack set‑up: website, email systems, creative assets,
                  automation. Everything you need to operate seamlessly across
                  markets.
                </p>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Multi-language website setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>International email automation & AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>CRM & analytics integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Content Repurposing
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Podcast, YouTube and content repurposing for cross‑border
                  reach. Turn your existing content into international revenue
                  streams.
                </p>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Multi-language content strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Platform-specific adaptations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>International distribution channels</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Productisation
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Productisation and monetisation tailored to each market.
                  Different countries, different buying patterns, different
                  revenue models.
                </p>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Market-specific pricing strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Local monetization models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Revenue stream optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End-to-End Support */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-12 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                End‑to‑end support, from planning to launch—
                <span className="text-orange-400">
                  and whatever it takes next
                </span>
              </h3>

              <p className="text-lg text-slate-300 leading-relaxed">
                I don&apos;t disappear after launch. International expansion is
                an ongoing journey, and I&apos;m here for the long haul.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Planning Phase</h4>
                  <p className="text-slate-300 text-sm">
                    Strategy, research, roadmap development
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Launch Phase</h4>
                  <p className="text-slate-300 text-sm">
                    Implementation, setup, go-to-market
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Growth Phase</h4>
                  <p className="text-slate-300 text-sm">
                    Optimization, scaling, expansion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
