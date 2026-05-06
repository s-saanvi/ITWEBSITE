import type { HomeConfig } from "../types";

export const homeConfig: HomeConfig = {
  hero: {
    badge: "🚀 Trusted by 500+ companies worldwide",
    headlineStatic: "We ",
    headlineTypewriter: ["Fix IT.", "Build IT.", "Secure IT.", "Scale IT."],
    subheading: "End-to-end IT solutions tailored for startups, SMBs, and enterprises. Stop worrying about your infrastructure and start focusing on growth.",
    primaryCTA: { label: "Get Started", href: "/contact" },
    secondaryCTA: { label: "See Our Services", href: "/services" },
    heroImage: "/images/hero-illustration.svg",
  },
  trustedBy: {
    heading: "Trusted by industry leaders",
    logos: [
      { name: "Acme Corp", logo: "/images/clients/acme.svg" },
      { name: "Globex", logo: "/images/clients/globex.svg" },
      { name: "Soylent", logo: "/images/clients/soylent.svg" },
      { name: "Initech", logo: "/images/clients/initech.svg" },
      { name: "Umbrella", logo: "/images/clients/umbrella.svg" },
      { name: "Stark Ind", logo: "/images/clients/stark.svg" },
    ],
  },
  services: {
    sectionLabel: "What We Do",
    heading: "Comprehensive IT Services",
    subheading: "From helpdesk to cloud architecture — we've got every layer covered.",
  },
  stats: [
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ],
  caseStudies: {
    sectionLabel: "Our Work",
    heading: "Projects That Made a Difference",
    subheading: "Real results for real businesses.",
    items: [
      {
        title: "Cloud Migration for FinTech Startup",
        category: "Cloud Services",
        description: "Migrated 200TB of data to AWS with zero downtime, improving query speeds by 40%.",
        image: "/images/cases/fintech.jpg",
        result: "60% cost reduction",
        href: "#",
      },
      {
        title: "Zero-Trust Architecture Rollout",
        category: "Cybersecurity",
        description: "Implemented comprehensive zero-trust security framework for a healthcare provider.",
        image: "/images/cases/healthcare.jpg",
        result: "100% compliance",
        href: "#",
      },
      {
        title: "Global Network Overhaul",
        category: "Network Setup",
        description: "Redesigned WAN infrastructure connecting 12 international offices seamlessly.",
        image: "/images/cases/logistics.jpg",
        result: "99.99% uptime",
        href: "#",
      },
    ],
  },
  testimonials: {
    sectionLabel: "Client Love",
    heading: "Don't Just Take Our Word For It",
    subheading: "Here's what our clients say about working with NexCore.",
  },
  ctaBanner: {
    heading: "Ready to Transform Your IT Infrastructure?",
    subheading: "Let's build something reliable, scalable, and secure together.",
    cta: { label: "Start Your Free Consultation", href: "/contact" },
    secondaryCta: { label: "View All Services", href: "/services" },
  },
};
