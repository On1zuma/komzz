import React from "react";
import { Target, Globe, TrendingUp, Zap } from "lucide-react";

const WhatSection = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              🎯 WHAT Do I Want?
            </h2>
          </div>

          {/* Main Content with Joe's Photo */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side - Joe's Photo */}
            <div className="order-2 lg:order-1 relative">
              {/* Photo Container */}
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Background Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>

                {/* Main Photo Frame */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-200">
                  {/* Joe's Professional Photo */}
                  <div className="w-full h-80 md:h-96 relative overflow-hidden rounded-2xl">
                    <img
                      src="/joe.webp"
                      alt="Joe - International Expansion Expert at KOMZZ"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      width={400}
                      height={500}
                    />

                    {/* Photo Badge */}
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      YOUR GROWTH PARTNER
                    </div>

                    {/* Subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>

                  {/* Quote Under Photo */}
                  <div className="mt-6 text-center space-y-2">
                    <p className="text-slate-800 font-bold text-lg">
                      &quot;That&apos;s not just business talk—
                    </p>
                    <p className="text-orange-600 font-bold text-xl">
                      that&apos;s my mission.&quot;
                    </p>
                  </div>
                </div>

                {/* Floating Achievement Cards */}
                <div className="absolute -left-8 top-1/4 bg-white shadow-xl rounded-xl p-4 border border-slate-200 hidden md:block rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-emerald-600 font-bold text-lg">
                    €5.2M
                  </div>
                  <div className="text-slate-700 text-sm font-medium">
                    Client Revenue
                  </div>
                  <div className="text-xs text-slate-500">Added This Year</div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white shadow-xl rounded-xl p-4 border border-slate-200 hidden md:block -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-orange-600 font-bold text-lg">127</div>
                  <div className="text-slate-700 text-sm font-medium">
                    Markets
                  </div>
                  <div className="text-xs text-slate-500">
                    Successfully Entered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Personal Message */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
                    <p>
                      I want{" "}
                      <span className="font-bold text-slate-900">YOU</span> to
                      grow your business globally, and see new territories and
                      languages as
                      <span className="font-bold text-orange-600">
                        {" "}
                        exciting challenges, not barriers
                      </span>
                      .
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 border-l-4 border-orange-500 p-6 rounded-lg">
                  <p className="text-lg text-slate-700 italic">
                    &quot;That&apos;s not just business talk—that&apos;s my
                    mission. I&apos;ve seen too many great companies stay small
                    because international expansion feels impossible.&quot;
                  </p>
                </div>
              </div>

              {/* Vision Points */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-slate-900">
                  Here&apos;s What I Envision For You:
                </h4>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-2">
                        Global Mindset Shift
                      </h5>
                      <p className="text-slate-700">
                        Instead of seeing international markets as scary
                        unknowns, you&apos;ll view them as your next big revenue
                        opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-2">
                        Predictable International Growth
                      </h5>
                      <p className="text-slate-700">
                        You&apos;ll have a repeatable system for entering new
                        markets, not just &quot;hoping it works&quot; every
                        time.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-2">
                        Cultural Confidence
                      </h5>
                      <p className="text-slate-700">
                        You&apos;ll stop worrying about &quot;saying the wrong
                        thing&quot; and start connecting authentically with
                        international customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-2">
                        Revenue Diversification
                      </h5>
                      <p className="text-slate-700">
                        Multiple income streams from different countries, so
                        you&apos;re never dependent on just one market again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6 md:p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Bottom Line:
                </h4>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I want you to wake up excited about your international
                  opportunities, not stressed about them.
                  <span className="font-bold text-orange-600">
                    {" "}
                    That&apos;s success to me.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSection;
