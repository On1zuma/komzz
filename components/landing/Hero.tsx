import React from "react";
import { ArrowRight, Phone, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-6 pt-8 md:pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
              {/* Personal Intro */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Available Worldwide
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                  Hi, I&apos;m Joe 👋
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Ready to Go Global?
                  </span>
                </h1>
              </div>

              {/* Value Proposition */}
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                  I help businesses{" "}
                  <span className="font-bold text-slate-900">
                    break into international markets
                  </span>{" "}
                  without the usual headaches.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  If you&apos;re struggling with language barriers, cultural
                  differences, or just don&apos;t know where to start with
                  global expansion —
                  <span className="font-semibold text-orange-600">
                    {" "}
                    let&apos;s talk.
                  </span>
                </p>
              </div>

              {/* Social Proof Stats */}
              <div className="flex flex-wrap gap-6 py-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900">
                    50+
                  </div>
                  <div className="text-sm text-slate-600">Markets Entered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600">
                    3x
                  </div>
                  <div className="text-sm text-slate-600">
                    Avg Revenue Growth
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600">
                    15
                  </div>
                  <div className="text-sm text-slate-600">Languages</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/booking-call">
                  <button className="group cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Call Me Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <button className="border-2 border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                  <Users className="w-5 h-5" />
                  Case Studies
                </button>
              </div>

              {/* Trust Line */}
              <p className="text-sm text-slate-500 pt-4">
                💬{" "}
                <span className="font-medium">
                  &quot;Finally, someone who gets international business AND
                  speaks human.&quot;
                </span>{" "}
                — Sarah K., CEO
              </p>
            </div>

            {/* Right Side - Photo Section */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Photo Container */}
              <div className="relative">
                {/* Photo Placeholder - Will be Joe's professional photo */}
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Background Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"></div>

                  {/* Photo Frame */}
                  <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-slate-200">
                    {/* Actual Photo Space */}
                    <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center text-slate-600 font-medium text-lg relative overflow-hidden">
                      {/* Photo Placeholder */}
                      <div className="text-center space-y-2">
                        <div className="w-20 h-20 bg-slate-400 rounded-full mx-auto mb-4"></div>
                        <div>Professional Photo of Joe</div>
                        <div className="text-sm text-slate-500">
                          Confident, approachable
                        </div>
                        <div className="text-sm text-slate-500">
                          High-quality headshot
                        </div>
                      </div>

                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Available Now
                      </div>
                    </div>

                    {/* Quote Under Photo */}
                    <div className="mt-6 text-center">
                      <p className="text-slate-700 font-medium text-lg">
                        &quot;I don&apos;t do corporate fluff.&quot;
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Real strategies. Real results. Real conversations.
                      </p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -left-6 top-1/4 bg-white shadow-lg rounded-xl p-4 border border-slate-200 hidden md:block">
                    <div className="text-orange-600 font-bold text-xl">
                      €2.3M
                    </div>
                    <div className="text-slate-600 text-sm">Added Revenue</div>
                    <div className="text-xs text-slate-500">Last Quarter</div>
                  </div>

                  <div className="absolute -right-6 bottom-1/4 bg-white shadow-lg rounded-xl p-4 border border-slate-200 hidden md:block">
                    <div className="text-emerald-600 font-bold text-xl">
                      94%
                    </div>
                    <div className="text-slate-600 text-sm">Success Rate</div>
                    <div className="text-xs text-slate-500">Market Entry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}

      {/* Bottom Section */}
      <div className="relative z-10 px-4 md:px-6 pt-16 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 text-sm mb-6">
            Companies I&apos;ve helped expand globally:
          </p>

          {/* Logos Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll items-center justify-center gap-12 md:gap-16">
              {/* First set of logos */}
              <Image
                src="/logo/logo-4.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                priority
              />
              <Image
                src="/logo/logo-5.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-6.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-07.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-08.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-09.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />

              {/* Duplicate set for seamless loop */}
              <Image
                src="/logo/logo-10.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-11.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-12.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-4.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-5.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              <Image
                src="/logo/logo-6.webp"
                alt="Client logo"
                width={96}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Hero;
