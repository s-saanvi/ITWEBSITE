import type { PrivacyConfig } from "../types";

export const privacyConfig: PrivacyConfig = {
  meta: {
    title: "Privacy Policy",
    description: "How NexCore IT collects, uses, and protects your data.",
  },
  lastUpdated: "January 15, 2025",
  intro: "Your privacy is important to us. This policy explains how NexCore IT Solutions collects, uses, and protects your personal information across our website and services.",
  sections: [
    {
      id: "data-collection",
      heading: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as your name, email address, and company details when you submit a contact form or sign up for our services.",
      subsections: [
        { heading: "1.1 Personal Information", content: "This includes data like your name, email, phone number, and billing details required to process transactions and provide support." },
        { heading: "1.2 Usage Data", content: "We automatically collect technical data such as IP addresses, browser types, and usage patterns to improve our website performance." },
      ],
    },
    {
      id: "data-usage",
      heading: "2. How We Use Your Information",
      content: "We use your data to provide and improve our IT services, communicate with you about your account, process payments, and send relevant security alerts and technical updates.",
    },
    {
      id: "cookies",
      heading: "3. Cookies & Tracking",
      content: "Our website uses cookies to enhance user experience and analyze traffic. You can control cookie preferences through your browser settings, though disabling them may limit some site functionality.",
    },
    {
      id: "third-parties",
      heading: "4. Third-Party Services",
      content: "We do not sell your data. We may share necessary information with trusted third-party service providers (like payment processors or cloud hosts) strictly for the purpose of operating our business.",
    },
    {
      id: "user-rights",
      heading: "5. Your Rights",
      content: "Depending on your location, you have rights to access, correct, or delete your personal data. You can opt out of marketing communications at any time.",
    },
    {
      id: "contact",
      heading: "6. Contact Us",
      content: "For any privacy-related questions, data requests, or concerns, please email us directly at privacy@nexcoreit.com.",
    },
  ],
};
