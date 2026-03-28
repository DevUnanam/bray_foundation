import { BookHeart, Brain, HandHeart, Megaphone, Users } from "lucide-react";

export const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Introduction", href: "/about#introduction" },
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
  {
    label: "Our Projects",
    href: "/projects",
    children: [
      { label: "The Kindness Project", href: "/projects#kindness-project" },
      { label: "Dream Makers Project", href: "/projects#dream-makers-project" },
      { label: "Leadership Revolution", href: "/projects#leadership-revolution-project" },
      { label: "The Sound Mind Project", href: "/projects#sound-mind-project" },
      { label: "Social Impact Accelerator", href: "/projects#social-impact-accelerator-project" }
    ]
  },
  {
    label: "Impact Stories",
    href: "/impact-stories",
    children: [
      { label: "Impact & Achievements", href: "/impact-stories#achievements" },
      { label: "Community Stories", href: "/impact-stories#stories" }
    ]
  },
  {
    label: "Volunteer",
    href: "/volunteer",
    children: [
      { label: "Volunteer Overview", href: "/volunteer#overview" },
      { label: "Our Teams", href: "/team" },
      { label: "Code of Conduct", href: "/volunteer#code-of-conduct" },
      { label: "Communication Channels", href: "/volunteer#communication-channels" },
      { label: "Recognition & Appreciation", href: "/volunteer#recognition" },
      { label: "FAQ", href: "/faq" }
    ]
  },
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
    id: "kindness-project",
    title: "The Kindness Project",
    summary:
      "A campaign-led program helping students practice everyday compassion through school activations, mentorship, and practical giving.",
    accent: "bg-brand-sky",
    details: [
      "Kindness Ambassador Program training young advocates to represent the foundation in schools, communities, and events.",
      "Random Acts of Kindness campaigns encouraging simple, visible gestures of care that make compassion practical.",
      "Kindness workshops, seminars, and school programs that help students build habits of empathy and positive peer support.",
      "Community service projects, awareness campaigns, and kindness celebrations that turn the message into collective action."
    ]
  },
  {
    id: "dream-makers-project",
    title: "Dream Makers Project",
    summary:
      "A future-facing education initiative that supports ambition with supplies, scholarships, coaching, and creative confidence.",
    accent: "bg-brand-pink",
    details: [
      "Scholarships for academic excellence that help deserving students cover tuition, books, and core learning costs.",
      "Creative workshops and competitions spanning arts, music, writing, coding, entrepreneurship, and innovation.",
      "Academic and professional mentoring that connects students with educators and experienced professionals.",
      "Educational resources, enrichment events, and career guidance that widen access to learning and future planning."
    ]
  },
  {
    id: "leadership-revolution-project",
    title: "The Leadership Revolution Project",
    summary:
      "Workshops, leadership circles, and youth-led community actions that turn potential into visible influence.",
    accent: "bg-brand-lilac",
    details: [
      "Mentorship programs that pair emerging leaders with experienced voices who can guide their growth.",
      "Leadership camps, retreats, and conferences that build confidence through immersive, team-based learning.",
      "Public speaking, communication, and project management training to help young people lead effectively.",
      "Service-learning projects, networking platforms, and leadership recognition that sustain long-term civic engagement."
    ]
  },
  {
    id: "sound-mind-project",
    title: "The Sound Mind Project",
    summary:
      "A warm, stigma-free mental health initiative encouraging self-awareness, emotional resilience, and access to support.",
    accent: "bg-brand-teal",
    details: [
      "Awareness campaigns and workshops that reduce stigma and teach stress management, self-care, and resilience.",
      "School programs that support emotional wellbeing while training teachers and staff to recognize distress.",
      "Peer support groups, counseling pathways, and referral services that help young people access trusted care.",
      "Online resources, educator training, research, advocacy, and community medical outreach that expand support."
    ]
  },
  {
    id: "social-impact-accelerator-project",
    title: "Social Impact Accelerator Project",
    summary:
      "A collaborative engine for civic imagination, helping communities prototype reforms that create real social change.",
    accent: "bg-brand-orchid",
    details: [
      "Community engagement workshops that bring people into conversations about inclusion, justice, and reform.",
      "Advocacy campaigns, policy research, and analysis that spotlight systemic gaps and recommend practical change.",
      "Collaborative partnerships with NGOs, leaders, and institutions to multiply resources and shared action.",
      "Grassroots initiatives, dialogues, and capacity-building programs that keep reform accountable and community-led."
    ]
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
    title: "Mental health and kindness reached more than 80 secondary schools",
    excerpt:
      "Campaigns across partner schools raised awareness, encouraged empathy, and helped create more supportive spaces for students."
  },
  {
    title: "Scholarship support opened doors in more than 60 schools",
    excerpt:
      "More than 60 beneficiaries received help that strengthened their academic journey and widened what felt possible."
  },
  {
    title: "Practical care reached students in visible everyday ways",
    excerpt:
      "Writing materials, lunch support, and affirmation tote bags helped turn encouragement into something students could feel."
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
    "The guidebook highlights both the numbers and the lived experiences that show how the foundation's care reaches schools, students, and communities.",
  volunteer:
    "The volunteer journey is built around clarity, teamwork, respectful conduct, strong communication, and meaningful appreciation.",
  contact:
    "Whether you want to partner, volunteer, donate, or ask a question, we would love to hear from you."
};

export const introductionPoints = [
  "The Blessing Raymond Foundation, formerly known as Project Think Kindly, is a registered incorporated trustee organization committed to positive social change.",
  "The work began in Abeokuta, Ogun State and has expanded to active engagement in Abuja and Cross River State.",
  "The foundation emphasizes transparency, accountability, responsible governance, and lawful nonprofit practice in every initiative."
];

export const missionPoints = [
  "Create a kinder and more empowered society.",
  "Nurture academic excellence and creativity in young people.",
  "Promote youth leadership and stronger community participation.",
  "Advocate for mental health and drive social reform through community-driven initiatives."
];

export const achievementHighlights = [
  {
    title: "School outreach at scale",
    description:
      "The foundation has conducted kindness and mental health campaigns in over 80 secondary schools, helping students experience more supportive learning environments."
  },
  {
    title: "Scholarship access",
    description:
      "Scholarship programs have reached over 60 schools and supported more than 60 beneficiaries in pursuing their educational goals."
  },
  {
    title: "Learning tools in students' hands",
    description:
      "More than 1,000 students have received writing and study materials to strengthen everyday learning and classroom participation."
  },
  {
    title: "Nutrition support",
    description:
      "Lunch support has reached over 1,000 students, helping them stay focused and cared for during school activities."
  },
  {
    title: "Affirmation and confidence-building",
    description:
      "More than 500 affirmation tote bags have been distributed as reminders of students' worth, confidence, and potential."
  }
];

export const teamDetails = [
  {
    title: "Programs Development / Management Team",
    description:
      "Designs and manages mission-aligned programs, coordinates logistics, collaborates with volunteers and beneficiaries, and evaluates outcomes to improve delivery."
  },
  {
    title: "Fundraising and Partnerships Team",
    description:
      "Builds relationships with sponsors and mission-aligned partners, develops proposals, seeks new funding opportunities, and maintains partner commitments."
  },
  {
    title: "Communications and Publicity Team",
    description:
      "Shapes awareness strategy, manages digital presence, creates engaging content, and connects the foundation with media, influencers, and public audiences."
  },
  {
    title: "Outreach and PTK Youth Community Engagement Team",
    description:
      "Supports youth participation, organizes youth-led activities, provides mentorship, and creates spaces for connection, learning, and voice."
  },
  {
    title: "Legal Advocacy Team",
    description:
      "Monitors relevant legal frameworks, supports compliance, advocates for necessary reforms, and represents the foundation's interests in legal matters."
  }
];

export const conductGuidelines = [
  {
    title: "Respect and inclusivity",
    description:
      "Treat every person with dignity and kindness, honor diversity, and help create an environment where people feel heard, valued, and included."
  },
  {
    title: "Professionalism",
    description:
      "Uphold integrity in every interaction, protect confidentiality, and respect the privacy of beneficiaries, volunteers, staff, and partners."
  },
  {
    title: "Reliability and commitment",
    description:
      "Fulfill agreed responsibilities, honor schedules, and communicate quickly with the team when plans need to change."
  },
  {
    title: "Safety and well-being",
    description:
      "Prioritize safety during activities, follow provided procedures, and report concerns or incidents immediately."
  },
  {
    title: "Professional boundaries",
    description:
      "Maintain respectful boundaries with beneficiaries, staff, and volunteers and avoid behavior that could be harmful or inappropriate."
  },
  {
    title: "Collaboration and teamwork",
    description:
      "Work cooperatively, welcome constructive feedback, and contribute to a supportive culture of learning and shared responsibility."
  },
  {
    title: "Compliance with policies and procedures",
    description:
      "Follow foundation policies and seek clarification when needed so your work stays aligned with organizational expectations."
  }
];

export const communicationChannels = [
  {
    title: "Email",
    description:
      "Email is the primary channel for official announcements, important updates, and timely responses expected from volunteers."
  },
  {
    title: "WhatsApp group",
    description:
      "A dedicated WhatsApp group supports quick updates, day-to-day discussion, clarifications, and volunteer community connection."
  },
  {
    title: "Online collaboration tools",
    description:
      "Google Drive, Microsoft Teams, and project management tools are used for document sharing, tasks, and real-time collaboration."
  },
  {
    title: "Video conferencing",
    description:
      "Zoom, Google Meet, and Microsoft Teams help the foundation run virtual meetings, training sessions, and project discussions across locations."
  },
  {
    title: "Social media",
    description:
      "Volunteers are encouraged to follow the foundation's social platforms to stay current on campaigns, events, and community stories."
  },
  {
    title: "In-person meetings",
    description:
      "Where location allows, workshops and in-person meetings help strengthen collaboration, team-building, and shared learning."
  }
];

export const recognitionMoments = [
  {
    title: "Expressing gratitude",
    description:
      "The foundation intentionally thanks volunteers through personal messages, handwritten notes, and spoken appreciation."
  },
  {
    title: "Volunteer spotlights",
    description:
      "Stories and contributions are featured on the website, social media, and newsletters to celebrate visible impact."
  },
  {
    title: "Certificates and awards",
    description:
      "Exceptional volunteers may receive certificates or special awards recognizing performance, leadership, and sustained commitment."
  },
  {
    title: "Volunteer appreciation events",
    description:
      "Gatherings and celebrations create room for volunteers to connect, reflect, and be honored as an important part of the mission."
  },
  {
    title: "Ongoing communication",
    description:
      "Regular updates, success stories, and testimonials help volunteers see the difference their work is making over time."
  },
  {
    title: "Personal development opportunities",
    description:
      "Training, workshops, resources, recommendations, and visibility for global opportunities reinforce the foundation's investment in volunteer growth."
  },
  {
    title: "Feedback and inclusion",
    description:
      "Volunteer feedback is actively invited so people feel respected, heard, and empowered to shape a stronger program."
  }
];

export const volunteerFaqs = [
  {
    title: "Do volunteers receive financial compensation for their work?",
    description:
      "No. The foundation is a nonprofit organization and volunteer roles are grounded in service, mission alignment, and goodwill rather than salary."
  },
  {
    title: "Are there benefits or perks for volunteers?",
    description:
      "Yes. Volunteers receive opportunities for personal and professional development, networking, recognition, and meaningful contribution."
  },
  {
    title: "Are volunteer expenses reimbursed?",
    description:
      "Some pre-approved and authorized expenses directly related to volunteer duties may be reimbursed in line with the foundation's policy."
  },
  {
    title: "Can I volunteer remotely or do I need to be in a specific area?",
    description:
      "Both remote and location-specific opportunities exist depending on the role and the needs of a project."
  },
  {
    title: "How does the lack of financial compensation affect motivation?",
    description:
      "Volunteer motivation is rooted in passion for the cause, fulfillment, personal growth, and the desire to make a positive impact."
  },
  {
    title: "Can volunteers receive certificates or references?",
    description:
      "Yes. Volunteers who complete meaningful service or make notable contributions can request certificates or letters of recognition."
  },
  {
    title: "Can volunteering lead to paid employment?",
    description:
      "Volunteering can build experience, skills, and networks, but it does not automatically convert into paid employment within the organization."
  }
];
