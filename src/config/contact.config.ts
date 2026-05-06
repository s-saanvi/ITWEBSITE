import type { ContactConfig } from "../types";

export const contactConfig: ContactConfig = {
  hero: {
    heading: "Get In Touch",
    subheading: "Tell us your IT challenges. We'll get back within 24 hours with a plan.",
  },
  details: {
    address: "123 Tech Avenue, Silicon Valley, CA 94025",
    email: "hello@nexcoreit.com",
    phone: "+1 (800) 639-2673",
    hours: "Mon–Fri: 8am–8pm PST | Emergency: 24/7",
  },
  socials: [
    { platform: "LinkedIn", href: "#", icon: "linkedin" },
    { platform: "Twitter", href: "#", icon: "twitter" },
    { platform: "GitHub", href: "#", icon: "github" },
  ],
  form: {
    services: [
      "IT Support & Helpdesk",
      "Network Setup & Management",
      "Cybersecurity Solutions",
      "Cloud Services & Migration",
      "Data Backup & Recovery",
      "IT Consulting & Strategy",
      "Other",
    ],
    submitLabel: "Send Message",
    successMessage: "Thanks! We'll be in touch within 24 hours.",
  },
  faq: [
    {
      question: "How quickly do you respond to support tickets?",
      answer: "Critical issues are responded to within 15 minutes. Standard tickets are typically addressed within 4 hours depending on your SLA tier.",
    },
    {
      question: "Do you offer on-site support?",
      answer: "Yes, we provide on-site support in the San Francisco Bay Area and remotely nationwide. For enterprise clients, we can arrange dedicated on-site personnel.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in FinTech, Healthcare, Legal, E-commerce, and SaaS. However, our solutions are adaptable to any modern data-driven business.",
    },
    {
      question: "Do you offer monthly retainer plans?",
      answer: "Yes, we have flexible managed IT retainer plans starting at $499/month, scaled based on user count and required service levels.",
    },
  ],
};
