import React from "react";
import { ArrowRight, Clock, TrendingUp, Globe, Cog } from "lucide-react";

const BlogSection = () => {
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
              📝 Latest Insights
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Fresh insights on international expansion, market entry
              strategies, and global growth
            </p>
          </div>

          {/* Blog Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Article 1 */}
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white space-y-2">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-sm font-medium">Featured Article</div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  INTERNATIONAL STRATEGY
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors">
                  How to Enter European Markets Without Breaking the Bank
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  The secret to successful European expansion isn't about having
                  a huge budget—it's about strategic planning and knowing
                  exactly where to focus your resources for maximum impact.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="text-slate-500 text-sm">March 15, 2025</div>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white space-y-2">
                  <Globe className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-sm font-medium">Most Popular</div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  LOCALIZATION
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors">
                  Why Google Translate is Killing Your International Sales
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Cultural nuances matter more than you think. Here's how
                  strategic localization can 3x your conversion rates and why
                  automated translation is sabotaging your global growth.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="text-slate-500 text-sm">March 10, 2025</div>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white space-y-2">
                  <Cog className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-sm font-medium">Tech Guide</div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  TECH STACK
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  5 Must-Have Tools for International E-commerce Success
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  From payment gateways to multi-language automation, here's my
                  complete tech stack for scaling globally. These tools can make
                  or break your international expansion.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>6 min read</span>
                  </div>
                  <div className="text-slate-500 text-sm">March 5, 2025</div>
                </div>
              </div>
            </article>
          </div>

          {/* Bottom CTA */}
          <div className="text-center ">
            <button className="cursor-pointer group border-2 border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
              📚 Read All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
