import React from "react";
import { Star, Quote, TrendingUp, Globe, Users } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ❤️ WHAT MY CLIENTS ARE SAYING
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Real results from real companies that took the leap into
              international markets
            </p>
          </div>

          {/* Featured Success Story */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Quote */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <Quote className="w-12 h-12 text-orange-400" />

                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  &quot;Finally, someone who gets international business AND
                  speaks human. Joe didn&apos;t just translate our content—he
                  transformed how we think about global markets.&quot;
                </blockquote>

                <div className="space-y-2">
                  <div className="text-orange-400 font-bold text-lg">
                    Sarah Kowalski
                  </div>
                  <div className="text-slate-300">CEO, TechFlow Solutions</div>
                  <div className="text-slate-400 text-sm">
                    SaaS Company, Germany → USA + UK
                  </div>
                </div>
              </div>

              {/* Right - Results */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6">
                  Results After 6 Months:
                </h4>

                <div className="space-y-4">
                  <div className="bg-white/5 border border-emerald-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">
                          €2.1M
                        </div>
                        <div className="text-slate-300 text-sm">
                          New Revenue from International Markets
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">
                          340%
                        </div>
                        <div className="text-slate-300 text-sm">
                          Increase in International Conversions
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">
                          850+
                        </div>
                        <div className="text-slate-300 text-sm">
                          New International Customers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed">
                  &quot;We tried expanding to France for 2 years with zero
                  success. Joe figured out what we were doing wrong in 2 weeks.
                  Our French revenue is now 40% of our total business.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div>
                    <div className="text-white font-bold">Marcus Richter</div>
                    <div className="text-slate-400 text-sm">
                      Founder, GrowthLab Consulting
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed">
                  &quot;Joe doesn&apos;t just do the work—he teaches you how to
                  think internationally. Our whole team now approaches expansion
                  completely differently.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div>
                    <div className="text-white font-bold">Amanda Liu</div>
                    <div className="text-slate-400 text-sm">
                      VP Marketing, FitnessPro App
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed">
                  &quot;The ROI was insane. We spent €15K with Joe and made
                  €180K in new international revenue in the first 4 months. Best
                  investment we&apos;ve ever made.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    DP
                  </div>
                  <div>
                    <div className="text-white font-bold">David Petersen</div>
                    <div className="text-slate-400 text-sm">
                      CEO, Nordic Design Studio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed">
                  &quot;Joe saved us from a massive mistake. We were about to
                  launch in Japan with completely wrong messaging. His cultural
                  insights were spot-on.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    LM
                  </div>
                  <div>
                    <div className="text-white font-bold">Lisa Martinez</div>
                    <div className="text-slate-400 text-sm">
                      International Director, EcoTech
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed">
                  &quot;Working with Joe was like having a international
                  business co-founder. He&apos;s invested in your success, not
                  just delivering a project.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    TC
                  </div>
                  <div>
                    <div className="text-white font-bold">Thomas Chen</div>
                    <div className="text-slate-400 text-sm">
                      Founder, CreativeSpace Agency
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed">
                  &quot;We went from &apos;hoping&apos; international would work
                  to having a systematic approach. Joe turned guesswork into
                  predictable growth.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    ES
                  </div>
                  <div>
                    <div className="text-white font-bold">Emma Schmidt</div>
                    <div className="text-slate-400 text-sm">
                      CMO, HealthTech Innovations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              The Numbers Don&apos;t Lie
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  98%
                </div>
                <div className="text-slate-300 text-sm">
                  Client Satisfaction
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                  €12M+
                </div>
                <div className="text-slate-300 text-sm">Revenue Generated</div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  67
                </div>
                <div className="text-slate-300 text-sm">Markets Entered</div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  4.2x
                </div>
                <div className="text-slate-300 text-sm">Avg Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
