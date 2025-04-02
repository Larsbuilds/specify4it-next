export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  role?: string;
  cta: {
    primary: {
      text: string;
      link: string;
    };
    secondary: {
      text: string;
      link: string;
    };
  };
}

export interface FeaturesContent {
  title: string;
  subtitle: string;
  features: Section[];
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  projects: Section[];
}

export interface AboutContent extends Section {
  skills?: string[];
  experience?: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  email: string;
  socials: SocialLink[];
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    submitText: string;
  };
}

export interface PageContent {
  hero: HeroContent;
  features: FeaturesContent;
  portfolio: PortfolioContent;
  about: AboutContent;
  contact: ContactContent;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
