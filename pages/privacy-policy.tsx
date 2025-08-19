import React from "react";
import Layout from "@/components/layout/MainLayout";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  FileText,
  Clock,
  Users,
} from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <Layout
      title="Privacy Policy | KOMZZ International Expansion Expert"
      description="KOMZZ privacy policy and GDPR compliance for international expansion consulting services. Learn how we protect your personal data."
      keywords="privacy policy, GDPR compliance, data protection, international consulting privacy"
      noIndex={true}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Header Section */}
        <div className="bg-slate-900 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How KOMZZ protects and handles your personal data in compliance
              with GDPR and data protection regulations.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          {/* Quick Nav */}
          <div className="bg-slate-100 rounded-2xl p-6 mb-12">
            <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-600" />
              Quick Navigation
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a
                href="#scope"
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                → Scope & Overview
              </a>
              <a
                href="#who-we-are"
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                → Who We Are
              </a>
              <a
                href="#personal-data"
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                → Personal Data Usage
              </a>
              <a
                href="#legal-basis"
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                → Legal Basis
              </a>
              <a
                href="#your-rights"
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                → Your Rights
              </a>
              <a
                href="#contact"
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                → Contact Information
              </a>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {/* Scope */}
            <section id="scope" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-orange-500/30 pb-3">
                Scope
              </h2>
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  This document refers to personal data, defined as information
                  concerning any living person (a natural person who hereafter
                  will be called the Data Subject) that is not already in the
                  public domain.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The Privacy and Electronic Communications Regulations (PECR)
                  and The General Data Protection Regulation (GDPR) which is EU
                  wide and far more extensive, seek to protect and enhance the
                  rights of data subjects. These rights cover the safeguarding
                  of personal data, protection against the unlawful processing
                  of personal data and the unrestricted movement of personal
                  data within the EU.
                </p>
              </div>
            </section>

            {/* Who We Are */}
            <section id="who-we-are" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-orange-500/30 pb-3">
                Who We Are
              </h2>
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      KOMZZ International Expansion Expert
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      KOMZZ specializes in international expansion consulting
                      and offers a wide range of services including multilingual
                      strategy, cultural localization, market entry consulting,
                      and international sales development to help businesses
                      scale globally.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Data */}
            <section id="personal-data" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-orange-500/30 pb-3">
                Personal Data Usage
              </h2>
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    How We Use Your Information
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    KOMZZ uses the information collected from you to provide
                    quotations, make telephone contact and to email you
                    marketing information which we believe may be of interest to
                    you and your business. In making initial contact you consent
                    to KOMZZ maintaining a promotional dialogue with you until
                    you either opt-out (which you can do at any stage) or we
                    decide to desist in promoting our services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Data Collection Sources
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Some personal data may be collected about you from:
                  </p>
                  <ul className="text-slate-700 space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Consultations, workshops, seminars, webinars and
                        business events
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Forms and surveys you complete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Records of our correspondence and phone calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Details of your visits to our website, including IP
                        addresses
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Cookie Policy
                  </h4>
                  <p className="text-blue-800 text-sm">
                    The KOMZZ website uses cookies to help identify and track
                    visitors and their website access preferences. Visitors who
                    do not wish to have cookies placed on their computers should
                    set their browsers to refuse cookies before using our
                    website.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section id="legal-basis" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-orange-500/30 pb-3">
                Legal Basis & Legitimate Interests
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Legal Basis for Processing
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    To meet KOMZZ contractual obligations to clients and to
                    respond to international expansion consulting inquiries.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Legitimate Interests
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    To promote international expansion services including
                    multilingual strategy, cultural localization, market entry
                    consulting, and global business development through
                    www.komzz.com
                  </p>
                </div>
              </div>
            </section>

            {/* Consent & Data Policies */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    Consent
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    Through agreeing to this privacy statement, you consent to
                    KOMZZ processing your personal data for the purposes
                    outlined. You can withdraw consent at any time by emailing
                    hello@komzz.com or writing to us.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Retention Policy
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    KOMZZ will process personal data during any contract
                    duration and continue to store only necessary personal data
                    for six years after contract expiration to meet legal
                    obligations. After six years, unnecessary personal data will
                    be deleted.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-orange-500/30 pb-3">
                Your Rights as a Data Subject
              </h2>
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <p className="text-slate-700 leading-relaxed mb-6">
                  At any point whilst KOMZZ is in possession of or processing
                  your personal data, you have the following rights:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right of access
                        </strong>
                        <p className="text-sm text-slate-600">
                          Request a copy of information we hold about you
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right of rectification
                        </strong>
                        <p className="text-sm text-slate-600">
                          Correct inaccurate or incomplete data
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right to be forgotten
                        </strong>
                        <p className="text-sm text-slate-600">
                          Request data erasure in certain circumstances
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right to restriction
                        </strong>
                        <p className="text-sm text-slate-600">
                          Restrict processing where conditions apply
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right of portability
                        </strong>
                        <p className="text-sm text-slate-600">
                          Transfer data to another organisation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right to object
                        </strong>
                        <p className="text-sm text-slate-600">
                          Object to certain types of processing
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900">
                          Right to object to automation
                        </strong>
                        <p className="text-sm text-slate-600">
                          Object to automated processing and profiling
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-orange-500/30 pb-3">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    KOMZZ Data Protection Officer
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                      <div className="text-sm text-slate-700">
                        <div className="font-medium">Registered Office:</div>
                        <div>Beechwood, Northfield Lane</div>
                        <div>Huddersfield, HD8 0QT</div>
                        <div>United Kingdom</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <a
                        href="mailto:hello@komzz.com"
                        className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        hello@komzz.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <a
                        href="tel:+447890110249"
                        className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        +44 789 011 0249
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    ICO (Information Commissioner&apos;s Office)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                      <div className="text-sm text-slate-700">
                        <div>Wycliffe House, Water Lane</div>
                        <div>Wilmslow, SK9 5AF</div>
                        <div>United Kingdom</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-700">
                        +44 (0) 303 123 1113
                      </span>
                    </div>

                    <div className="text-sm text-slate-700">
                      Website:{" "}
                      <a
                        href="https://ico.org.uk/global/contact-us/email/"
                        className="text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        ico.org.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3">
                Questions About Your Data?
              </h3>
              <p className="text-slate-300 mb-6">
                If you have any questions about how we handle your personal data
                or want to exercise your rights, don&apos;t hesitate to contact
                us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@komzz.com"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="tel:+447890110249"
                  className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
