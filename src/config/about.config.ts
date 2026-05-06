import type { AboutConfig } from "../types";

export const aboutConfig: AboutConfig = {
  hero: {
    heading: "About NexCore IT",
    subheading: "A decade of engineering reliable IT infrastructure.",
    breadcrumb: [{ label: "Home", href: "/" }, { label: "About" }],
  },
  story: {
    heading: "Our Story",
    paragraphs: [
      "Founded in 2014, NexCore IT Solutions started as a two-person helpdesk operation in a small San Francisco office. Our mission was simple: provide enterprise-grade IT support to small businesses that couldn't afford internal IT teams.",
      "Today, we serve 500+ clients across North America and Europe, offering a full spectrum of IT services from cloud migration to cybersecurity. Despite our growth, we remain committed to our founding principle: delivering technology solutions with a deeply human touch."
    ],
    image: "/images/about/team-office.jpg",
  },
  values: [
    { icon: "⚡", title: "Speed", description: "We resolve critical issues in under 2 hours because downtime means lost revenue." },
    { icon: "🔒", title: "Security-First", description: "Every solution we architect is built from the ground up with zero-trust principles." },
    { icon: "🤝", title: "Partnership", description: "We act as your dedicated internal IT team, not just another faceless vendor." },
    { icon: "📈", title: "Scalability", description: "We design solutions that don't just work for today, but scale seamlessly as your business grows." },
  ],
  timeline: [
    { year: "2014", title: "Founded", description: "Started as a 2-person IT helpdesk in San Francisco." },
    { year: "2016", title: "First Enterprise Client", description: "Landed our first Fortune 500 contract and expanded our team." },
    { year: "2018", title: "Expanded to Cloud", description: "Launched our dedicated Cloud Architecture and Migration practice." },
    { year: "2020", title: "Remote-First Pivot", description: "Helped over 100 clients securely transition to remote operations in weeks." },
    { year: "2023", title: "500+ Clients", description: "Crossed the 500 active client milestone across two continents." },
  ],
  team: [
    { name: "Alex Rivera", role: "CEO & Co-Founder", image: "/images/team/alex.jpg", linkedin: "#" },
    { name: "Priya Nair", role: "CTO", image: "/images/team/priya.jpg", linkedin: "#" },
    { name: "Jordan Wu", role: "Head of Cybersecurity", image: "/images/team/jordan.jpg", linkedin: "#" },
    { name: "Sam Okafor", role: "Cloud Architect", image: "/images/team/sam.jpg", linkedin: "#" },
    { name: "Lily Chen", role: "Head of Support", image: "/images/team/lily.jpg", linkedin: "#" },
    { name: "Marcus Bell", role: "IT Consultant", image: "/images/team/marcus.jpg", linkedin: "#" },
  ],
  cta: {
    heading: "Want to Join Our Team?",
    subheading: "We're always looking for sharp minds who love solving hard IT problems.",
    cta: { label: "View Open Roles", href: "/contact" },
  },
};
