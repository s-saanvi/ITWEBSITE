export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  favicon: string;
  defaultOgImage: string;
  themeColor: string;
  founded: string;
  email: string;
  phone: string;
  address: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface NavConfig {
  links: NavLink[];
  cta: CTA;
}

export interface HomeConfig {
  hero: {
    badge: string;
    headlineStatic: string;
    headlineTypewriter: string[];
    subheading: string;
    primaryCTA: CTA;
    secondaryCTA: CTA;
    heroImage: string;
  };
  trustedBy: {
    heading: string;
    logos: { name: string; logo: string }[];
  };
  services: {
    sectionLabel: string;
    heading: string;
    subheading: string;
  };
  stats: { value: number; suffix: string; label: string }[];
  caseStudies: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      category: string;
      description: string;
      image: string;
      result: string;
      href: string;
    }[];
  };
  testimonials: {
    sectionLabel: string;
    heading: string;
    subheading: string;
  };
  ctaBanner: {
    heading: string;
    subheading: string;
    cta: CTA;
    secondaryCta?: CTA;
  };
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  category: string;
}

export interface ServicesConfig {
  hero: {
    heading: string;
    subheading: string;
    breadcrumb: { label: string; href?: string }[];
  };
  items: Service[];
  cta: {
    heading: string;
    subheading: string;
    cta: CTA;
  };
}

export interface AboutConfig {
  hero: {
    heading: string;
    subheading: string;
    breadcrumb: { label: string; href?: string }[];
  };
  story: {
    heading: string;
    paragraphs: string[];
    image: string;
  };
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
  team: {
    name: string;
    role: string;
    image: string;
    linkedin: string;
  }[];
  cta: {
    heading: string;
    subheading: string;
    cta: CTA;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  category: string;
}

export interface TestimonialsConfig {
  hero: {
    heading: string;
    subheading: string;
  };
  stats: { value: string; label: string }[];
  categories: string[];
  items: Testimonial[];
}

export interface ContactConfig {
  hero: {
    heading: string;
    subheading: string;
  };
  details: {
    address: string;
    email: string;
    phone: string;
    hours: string;
  };
  socials: {
    platform: string;
    href: string;
    icon: string;
  }[];
  form: {
    services: string[];
    submitLabel: string;
    successMessage: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface FooterConfig {
  tagline: string;
  columns: {
    heading: string;
    links: NavLink[];
  }[];
  newsletter: {
    heading: string;
    placeholder: string;
    cta: string;
  };
  socials: {
    platform: string;
    href: string;
    icon: string;
  }[];
  copyright: string;
}

export interface PrivacyConfig {
  meta: {
    title: string;
    description: string;
  };
  lastUpdated: string;
  intro: string;
  sections: {
    id: string;
    heading: string;
    content: string;
    subsections?: { heading: string; content: string }[];
  }[];
}

export interface TermsConfig {
  meta: {
    title: string;
    description: string;
  };
  lastUpdated: string;
  intro: string;
  sections: {
    id: string;
    heading: string;
    content: string;
  }[];
}

export interface BlogConfig {
  hero: {
    heading: string;
    subheading: string;
  };
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
  }[];
}
