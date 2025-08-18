import React from "react";
import {
  ArrowRight,
  Users,
  MessageSquare,
  TrendingUp,
  Cog,
  Globe,
  Building,
  Phone,
} from "lucide-react";

const HowSection = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              🔥 HOW Do I Do It?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              My proven system for taking businesses from local to global
            </p>
          </div>

          {/* Partnership Statement */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <div className="max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                I partner with businesses—from{" "}
                <span className="text-orange-400">consultancies</span>,
                <span className="text-orange-400"> agencies</span> and{" "}
                <span className="text-orange-400">SMEs</span> to
                <span className="text-orange-400"> coaches</span>,{" "}
                <span className="text-orange-400">speakers</span>,
                <span className="text-orange-400"> entrepreneurs</span> and{" "}
                <span className="text-orange-400">authors</span>—who are ready
                to expand beyond borders.
              </h3>
            </div>
          </div>

          {/* KOMZZ Method */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Working through <span className="text-orange-400">KOMZZ</span>
              </h3>
              <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                I bring together strategic advisory, multilingual communication
                expertise and sales development to help you{" "}
                <span className="text-emerald-400 font-semibold">
                  build, market and monetise
                </span>{" "}
                your brand or business internationally.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Pillar 1 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Strategic Advisory
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Market research, entry strategies, and roadmaps that
                    actually work in the real world.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Multilingual Communication
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Beyond translation—cultural adaptation that makes your
                    message resonate.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Sales Development
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Systems and processes that turn international visitors into
                    paying customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Role Definition */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            {/* Left - Role Cards */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                What Am I Exactly?
              </h3>

              <div className="space-y-4">
                <div className="bg-white/5 border border-orange-500/20 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Part Language Strategist
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Making your message work across cultures
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-emerald-500/20 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Part Business Development Advisor
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Strategic guidance for market entry
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cog className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Part Market-Entry Tech Consultant
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Getting your systems ready for global scale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Mission Statement */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 md:p-10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    All Geared To:
                  </h4>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-xl text-slate-200 leading-relaxed">
                    Help you{" "}
                    <span className="text-orange-400 font-bold">
                      scale across countries
                    </span>
                  </p>

                  <div className="bg-white/5 rounded-lg p-4 text-left">
                    <p className="text-slate-300 italic">
                      "I don't just translate your stuff and hope for the best.
                      I help you think, speak, and sell like a local in every
                      market you enter."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Companies Visual */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Perfect For Companies Like:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-white font-medium text-sm">
                  Consultancies
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-white font-medium text-sm">Agencies</div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-white font-medium text-sm">SMEs</div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-white font-medium text-sm">Coaches</div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-pink-400" />
                </div>
                <div className="text-white font-medium text-sm">Speakers</div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-white font-medium text-sm">Authors</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Scale Beyond Borders?
              </h3>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Stop guessing. Stop hoping. Let's build a systematic approach to
                international growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Let's Discuss Your Expansion
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  See My Method in Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSection;
