import type { TermsConfig } from "../types";

export const termsConfig: TermsConfig = {
  meta: {
    title: "Terms & Conditions",
    description: "Terms governing your use of NexCore IT Solutions services.",
  },
  lastUpdated: "January 15, 2025",
  intro: "By accessing our website or using NexCore IT Solutions services, you agree to be bound by these Terms and Conditions. Please read them carefully.",
  sections: [
    {
      id: "acceptance",
      heading: "1. Acceptance of Terms",
      content: "By using our services, you confirm that you have read, understood, and agree to these terms. If you do not agree, please do not use our services.",
    },
    {
      id: "services",
      heading: "2. Services Provided",
      content: "NexCore IT Solutions provides managed IT, cybersecurity, cloud architecture, and consulting services as outlined in specific Service Level Agreements (SLAs) signed with clients.",
    },
    {
      id: "payment",
      heading: "3. Payment Terms",
      content: "Invoices are due within 30 days of receipt unless otherwise specified in your SLA. Late payments may incur a 1.5% monthly interest fee.",
    },
    {
      id: "ip",
      heading: "4. Intellectual Property",
      content: "All materials, software, and systems developed by NexCore IT remain our intellectual property unless explicitly transferred via a written agreement.",
    },
    {
      id: "liability",
      heading: "5. Limitation of Liability",
      content: "NexCore IT is not liable for indirect, incidental, or consequential damages arising from the use of our services, including data loss, except where gross negligence is proven.",
    },
    {
      id: "termination",
      heading: "6. Termination",
      content: "Either party may terminate monthly services with 30 days written notice. Annual contracts may have specific early termination clauses outlined in the SLA.",
    },
    {
      id: "governing-law",
      heading: "7. Governing Law",
      content: "These terms are governed by the laws of the State of California. Any disputes will be resolved in the courts of Santa Clara County.",
    },
  ],
};
