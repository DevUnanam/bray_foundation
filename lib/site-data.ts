import { BookHeart, Brain, HandHeart, Megaphone, Sparkles, Users } from "lucide-react";

export const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Mission & Purpose", href: "/about#mission" },
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Our Team", href: "/team" },
      { label: "Reports", href: "/about#reports" }
    ]
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Promoting Kindness", href: "/what-we-do#kindness" },
      { label: "Academic Excellence & Creativity", href: "/what-we-do#academic-excellence" },
      { label: "Youth Leadership", href: "/what-we-do#youth-leadership" },
      { label: "Mental Health Advocacy", href: "/what-we-do#mental-health-advocacy" },
      { label: "Social Reform", href: "/what-we-do#social-reform" }
    ]
  },
  { label: "Our Projects", href: "/projects" },
  { label: "Impact Stories", href: "/impact-stories" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" }
];

export const impactStats = [
  { value: "80+", label: "secondary schools reached" },
  { value: "60+", label: "scholarship beneficiaries" },
  { value: "1,000+", label: "students supported with materials" },
  { value: "1,000+", label: "students reached with lunch support" },
  { value: "500+", label: "affirmation tote bags distributed" }
];

export const pillars = [
  {
    id: "kindness",
    title: "Promoting Kindness",
    description:
      "We design campaigns, school outreach, and community moments that make empathy visible, practical, and contagious.",
    icon: HandHeart,
    accent: "bg-brand-pink"
  },
  {
    id: "academic-excellence",
    title: "Nurturing Creativity and Academic Excellence",
    description:
      "From materials support to scholarship pathways, we help young people imagine bigger futures and build the confidence to pursue them.",
    icon: BookHeart,
    accent: "bg-brand-sky"
  },
  {
    id: "youth-leadership",
    title: "Promoting Youth Leadership",
    description:
      "We equip students and young changemakers with the voice, courage, and practical tools to lead in their schools and communities.",
    icon: Users,
    accent: "bg-brand-lilac"
  },
  {
    id: "mental-health-advocacy",
    title: "Mental Health Advocacy",
    description:
      "We open up safe conversations around emotional wellbeing and create hopeful support systems that young people can trust.",
    icon: Brain,
    accent: "bg-brand-teal"
  },
  {
    id: "social-reform",
    title: "Driving Social Reform",
    description:
      "We champion ideas, programs, and partnerships that shift culture toward fairness, dignity, and opportunity for all.",
    icon: Megaphone,
    accent: "bg-brand-orchid"
  }
];

export const projects = [
  {
    title: "The Kindness Project",
    summary:
      "A campaign-led program helping students practice everyday compassion through school activations, mentorship, and practical giving.",
    accent: "bg-brand-sky"
  },
  {
    title: "Dream Makers Project",
    summary:
      "A future-facing education initiative that supports ambition with supplies, scholarships, coaching, and creative confidence.",
    accent: "bg-brand-pink"
  },
  {
    title: "The Leadership Revolution Project",
    summary:
      "Workshops, leadership circles, and youth-led community actions that turn potential into visible influence.",
    accent: "bg-brand-lilac"
  },
  {
    title: "The Sound Mind Project",
    summary:
      "A warm, stigma-free mental health initiative encouraging self-awareness, emotional resilience, and access to support.",
    accent: "bg-brand-teal"
  },
  {
    title: "Social Impact Accelerator Project",
    summary:
      "A collaborative engine for civic imagination, helping communities prototype reforms that create real social change.",
    accent: "bg-brand-orchid"
  }
];

export const teamFunctions = [
  "Programs Development / Management",
  "Fundraising and Partnerships",
  "Communications and Publicity",
  "Outreach and Youth Community Engagement",
  "Legal Advocacy"
];

export const stories = [
  {
    title: "A lunch break turned into a confidence boost",
    excerpt:
      "Students in partner schools shared how a simple act of care reminded them that their dreams were worth investing in."
  },
  {
    title: "Young leaders finding their voice",
    excerpt:
      "Through guided workshops and peer support, volunteers watched quiet participants step forward to lead school initiatives."
  },
  {
    title: "Mental health conversations that felt safe",
    excerpt:
      "The foundation's warm, youth-centered sessions created room for honesty, encouragement, and practical support."
  }
];

export const footerLinks = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Impact Stories", href: "/impact-stories" },
    { label: "Volunteer", href: "/volunteer" }
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
    { label: "FAQ", href: "/faq" },
    { label: "Team", href: "/team" }
  ]
};

export const pageBlurb = {
  about:
    "Blessing Raymond Foundation is building a kinder and more empowered society by investing in young people, shared responsibility, and hopeful social change.",
  whatWeDo:
    "Our work connects kindness, learning, leadership, wellbeing, and reform into one youth-centered ecosystem.",
  projects:
    "Every project translates empathy into practical action that students, volunteers, and communities can feel.",
  stories:
    "The heart of our impact lives in people whose confidence, creativity, and sense of possibility continue to grow.",
  volunteer:
    "Volunteers help turn care into consistency through respectful service, community, and joyful collaboration.",
  contact:
    "Whether you want to partner, volunteer, donate, or ask a question, we would love to hear from you."
};
