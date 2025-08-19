import React, { useEffect } from "react";
import Layout from "@/components/layout/MainLayout";
import {
  Phone,
  Clock,
  Globe,
  CheckCircle,
  TrendingUp,
  Star,
} from "lucide-react";

const BookCallPage = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout
      title="Book Free Strategy Call | KOMZZ International Expansion Expert"
      description="Book a free 30-minute strategy call with Joe. Discuss your international expansion goals and get actionable advice. Available worldwide."
      keywords="book strategy call, international expansion consultation, free business call, global growth advice"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Header Section */}

        {/* Main Content */}
        <div className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Sidebar - What to Expect */}
              <div className="lg:col-span-1 space-y-8">
                {/* Call Details */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Phone className="w-6 h-6 text-orange-600" />
                    What to Expect
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          30 Minutes, Focused
                        </h3>
                        <p className="text-sm text-slate-600">
                          Quick, actionable conversation about your expansion
                          goals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          No Sales Pitch
                        </h3>
                        <p className="text-sm text-slate-600">
                          Just honest advice about your international growth
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Clear Next Steps
                        </h3>
                        <p className="text-sm text-slate-600">
                          Leave with a real plan, whether we work together or
                          not
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Global Availability
                        </h3>
                        <p className="text-sm text-slate-600">
                          Timezone-friendly calls for international teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Success */}
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                    <span className="font-bold text-emerald-900">
                      Recent Success
                    </span>
                  </div>
                  <blockquote className="text-emerald-800 italic mb-3">
                    &quot;In one 30-minute call, Joe identified exactly why our
                    German expansion was failing. Implemented his advice and saw
                    200% growth in 3 months.&quot;
                  </blockquote>
                  <div className="text-sm text-emerald-700 font-medium">
                    — Marcus R., SaaS Founder
                  </div>
                </div>
              </div>

              {/* Center - Calendly Widget */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      Choose Your Time
                    </h2>
                    <p className="text-slate-600">
                      Select a time that works for you. I&apos;ll send you a
                      calendar invite with call details.
                    </p>
                  </div>

                  {/* Calendly Embed */}
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/komzz/one-to-one-call?embed_domain=komzz.com&embed_type=Inline"
                    style={{ minWidth: "320px", height: "700px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-50 py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Is this really free?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    Yes, completely free. No hidden agenda, just a genuine
                    conversation about your expansion goals.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    What if I&apos;m not ready to hire anyone?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    Perfect! I&apos;ll give you actionable advice you can
                    implement yourself. Sometimes that&apos;s exactly what you
                    need.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Do you work with small companies?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    Absolutely. From solo entrepreneurs to enterprise clients.
                    If you&apos;re serious about international growth,
                    let&apos;s talk.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    What should I prepare?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    Just bring your questions and challenges. I&apos;ll ask
                    about your current market, goals, and biggest obstacles.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    What timezone are you in?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    UK-based but I work with global clients. The calendar shows
                    times in your timezone automatically.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Can I reschedule if needed?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    Of course! Life happens. Just use the link in your
                    confirmation email to reschedule easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Don&apos;t let uncertainty hold back your international growth.
              Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@komzz.com"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+447890110249"
                className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookCallPage;
