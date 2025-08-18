import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://komzz.com";
const defaultOgImage =
  "https://res.cloudinary.com/dapijepqg/image/upload/v1754306418/komzz-international-expansion.jpg";

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  ogImage = defaultOgImage,
  canonicalUrl,
  noIndex = false,
  structuredData,
}) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { locale = "en", locales = [], asPath } = router;

  // Dynamic defaults based on translation
  const finalTitle =
    title ||
    t(
      "site.title",
      "KOMZZ | International Expansion Expert - Break Through Global Barriers"
    );
  const finalDescription =
    description ||
    t(
      "site.description",
      "Joe helps businesses expand internationally. From multilingual strategy to sales development, break through language barriers and scale globally. Call now for free strategy session."
    );
  const finalKeywords =
    keywords ||
    "international expansion expert, global business development, multilingual strategy, market entry consulting, cultural localization, international sales strategy, cross-border business growth, global market expansion";

  // URLs
  const fullUrl = canonicalUrl || `${siteUrl}${asPath}`;
  const cleanUrl = fullUrl.split("?")[0].split("#")[0];

  // Language-specific locale mapping
  const localeMapping: Record<string, string> = {
    en: "en_US",
    es: "es_ES",
    fr: "fr_FR",
    de: "de_DE",
    it: "it_IT",
    pl: "pl_PL",
  };

  // Generate hreflang links
  const hreflangLinks = locales.map((lang) => ({
    lang,
    url: `${siteUrl}${lang === "en" ? "" : `/${lang}`}${
      asPath === "/" ? "" : asPath
    }`,
  }));

  // KOMZZ Structured Data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "KOMZZ International Expansion Consulting",
        alternateName: "KOMZZ",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 300,
          height: 100,
        },
        image: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
        },
        description:
          "International expansion expert helping businesses break through language barriers and scale globally",
        founder: {
          "@type": "Person",
          name: "Joe",
          jobTitle: "International Expansion Expert",
          description:
            "Part Language Strategist, part Business Development Advisor, part Market-Entry Tech Consultant",
        },
        telephone: "+1 (555) 123-GLOBAL",
        email: "joe@komzz.com",
        priceRange: "€€€",
        areaServed: [
          {
            "@type": "Place",
            name: "Europe",
          },
          {
            "@type": "Place",
            name: "North America",
          },
          {
            "@type": "Place",
            name: "Asia Pacific",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        serviceType: [
          "International Business Consulting",
          "Market Entry Strategy",
          "Cultural Localization",
          "Multilingual Brand Strategy",
          "International Sales Development",
          "Cross-border Business Development",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "International Expansion Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Multilingual Brand Strategy",
                description:
                  "Strategic positioning and brand adaptation for international markets",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cultural Adaptation & Localization",
                description:
                  "Beyond translation - strategic communication localization for global markets",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "International Sales Strategy",
                description:
                  "Sales infrastructure and systems for international market entry",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tech Stack Setup & Automation",
                description:
                  "Complete technical infrastructure for international business operations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Content Repurposing & Distribution",
                description:
                  "Podcast, YouTube and content adaptation for cross-border reach",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Productisation & Monetization",
                description:
                  "Market-specific product development and revenue optimization",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "200",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            author: {
              "@type": "Person",
              name: "Sarah Kowalski",
            },
            reviewBody:
              "Finally, someone who gets international business AND speaks human. Joe didn't just translate our content—he transformed how we think about global markets.",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KOMZZ International Expansion",
        alternateName: "KOMZZ",
        inLanguage: locale,
        description:
          "International expansion expert helping businesses scale globally",
        publisher: {
          "@type": "Organization",
          name: "KOMZZ",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`,
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#founder`,
        name: "Joe",
        jobTitle: "International Expansion Expert",
        worksFor: {
          "@type": "Organization",
          name: "KOMZZ",
        },
        description:
          "Part Language Strategist, part Business Development Advisor, part Market-Entry Tech Consultant. Helping businesses scale across countries.",
        url: siteUrl,
        sameAs: [
          "https://linkedin.com/in/joe-komzz",
          "https://twitter.com/joe_komzz",
        ],
      },
    ],
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{finalTitle}</title>
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
        <meta
          name="author"
          content="Joe - KOMZZ International Expansion Expert"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#f97316" />
        <meta name="color-scheme" content="light" />

        {/* Robots */}
        <meta
          name="robots"
          content={
            noIndex
              ? "noindex,nofollow"
              : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
          }
        />

        {/* Canonical URL */}
        <link rel="canonical" href={cleanUrl} />

        {/* Hreflang Links */}
        {hreflangLinks.map(({ lang, url }) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteUrl}${asPath}`}
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />

        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={cleanUrl} />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="KOMZZ - International Expansion Expert"
        />
        <meta property="og:site_name" content="KOMZZ" />
        <meta property="og:locale" content={localeMapping[locale] || "en_US"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joe_komzz" />
        <meta name="twitter:creator" content="@joe_komzz" />
        <meta name="twitter:url" content={cleanUrl} />
        <meta name="twitter:title" content={finalTitle} />
        <meta name="twitter:description" content={finalDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:image:alt"
          content="KOMZZ - International Expansion Expert"
        />

        {/* Additional Meta for Business */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KOMZZ" />

        {/* Business-specific meta */}
        <meta name="geo.region" content="Worldwide" />
        <meta name="geo.placename" content="International" />
        <meta name="ICBM" content="Global" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(finalStructuredData),
          }}
        />

        {/* Security Headers (if not handled by server) */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Additional SEO for B2B Services */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
      </Head>

      <div
        className={`${inter.className} min-h-screen antialiased bg-slate-50`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-orange-600 text-white px-4 py-2 z-50 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
