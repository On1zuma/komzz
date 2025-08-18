import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/MainLayout";
import Hero from "@/components/landing/Hero";
import WhoSection from "@/components/landing/WhoSection";
import WhatSection from "@/components/landing/WhatSection";
import HowSection from "@/components/landing/HowSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalCTA from "@/components/landing/FinalCTA";
import BlogSection from "@/components/landing/BlogSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <WhoSection />
        <WhatSection />
        <HowSection />
        <ServicesSection />
        <TestimonialsSection />
        <FinalCTA />
        <BlogSection />
      </Layout>
    </>
  );
}
