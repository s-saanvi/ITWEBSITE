import type { NavConfig } from "../types";

export const navConfig: NavConfig = {
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Get Free Consultation",
    href: "/contact",
  },
};
