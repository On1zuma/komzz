import React from "react";
import { Phone, ArrowRight, Clock, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Break Through
              <br />
              Global Barriers?
            </h2>

            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed max-w-3xl mx-auto">
              Let&apos;s discuss how I can help you expand internationally
            </p>
          </div>

          {/* Simple Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Free Strategy Call</h3>
              <p className="text-orange-100 text-sm">
                No pitch, just honest advice
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">30 Minutes</h3>
              <p className="text-orange-100 text-sm">
                Quick, focused conversation
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ArrowRight className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Clear Next Steps</h3>
              <p className="text-orange-100 text-sm">Leave with a real plan</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <button className="group bg-white hover:bg-slate-50 text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-4 mx-auto">
              <Phone className="w-6 h-6 md:w-7 md:h-7" />
              Book Your Call Now
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
