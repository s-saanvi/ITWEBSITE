import type { FooterConfig } from "../types";

export const footerConfig: FooterConfig = {
  tagline: "Enterprise IT solutions with a human touch.",
  columns: [
    {
      heading: "Services",
      links: [
        { label: "IT Support", href: "/services#it-support" },
        { label: "Network Management", href: "/services#network" },
        { label: "Cybersecurity", href: "/services#cybersecurity" },
        { label: "Cloud Services", href: "/services#cloud" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
      ],
    },
  ],
  newsletter: {
    heading: "Stay in the loop",
    placeholder: "your@email.com",
    cta: "Subscribe",
  },
  socials: [
    { platform: "LinkedIn", href: "#", icon: "linkedin" },
    { platform: "Twitter", href: "#", icon: "twitter" },
    { platform: "GitHub", href: "#", icon: "github" },
  ],
  copyright: "© 2025 NexCore IT Solutions. All rights reserved.",
};
