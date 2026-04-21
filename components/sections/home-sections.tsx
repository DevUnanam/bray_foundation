"use client";

import type { Route } from "next";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, HeartHandshake, Mail, Sparkles } from "lucide-react";

import { SceneIllustration } from "@/components/art/scene-illustration";
import { WaveDivider } from "@/components/art/wave-divider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { impactStats, pillars, projects, stories, teamFunctions } from "@/lib/site-data";

function FloatingBadge({ label, className }: { label: string; className: string }) {
  return (
    <motion.div
      className={`organic-card absolute px-4 py-3 text-sm font-bold ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.div>
  );
}

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const slowFloat = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const reverseFloat = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -110]);

  return (
    <section className="relative isolate overflow-hidden bg-brand-teal pt-32 text-brand-white">
      <div className="noise-overlay absolute inset-0" />
      <motion.div className="absolute left-[6%] top-32 h-28 w-28 rounded-full bg-brand-pink/20 blur-3xl" style={{ y: slowFloat }} />
      <motion.div className="absolute bottom-20 right-[10%] h-36 w-36 rounded-full bg-brand-teal/25 blur-3xl" style={{ y: reverseFloat }} />
      <div className="container-shell relative z-10 grid min-h-[calc(100vh-5rem)] gap-12 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">

        <Reveal delay={0.15}>
          <div className="relative">
            <SceneIllustration theme="hero" />
            {/* <FloatingBadge label="Kindness campaigns" className="-left-2 top-10 bg-brand-white text-brand-plum" />
            <FloatingBadge label="Youth leadership" className="right-3 top-24 bg-brand-pink text-brand-plum" />
            <FloatingBadge label="Mental health advocacy" className="bottom-10 left-6 bg-brand-teal text-brand-white" /> */}
          </div>
        </Reveal>
        <Reveal>
          <div>

            <h1 className="font-display text-[3.6rem] leading-[0.88] sm:text-[5rem] lg:text-[6.9rem]">
              Growing kind
              <br />
              leaders for a
              <br />
              brighter society.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-white/85 sm:text-xl">
              Blessing Raymond Foundation helps young people flourish through academic excellence, mental health advocacy, youth leadership, social reform, and everyday acts of kindness that ripple outward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about">Learn More</Button>
              <Button href="/volunteer" variant="secondary">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </Reveal>

      </div>
      <WaveDivider topColor="#1cabb0" bottomColor="#ffffff" />
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="bg-white">
      <div className="container-shell section-padding grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SceneIllustration theme="mission" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Our mission"
            title={
              <>
                A kinder society
                <br />
                starts with young people
                <br />
                who feel seen.
              </>
            }
            description="We create welcoming opportunities for students and emerging leaders to grow in confidence, creativity, empathy, and civic imagination. Through education, wellbeing, and community-powered initiatives, we help hope become practical."
          />
        </Reveal>
      </div>
      <WaveDivider topColor="#ffffff" bottomColor="#1cabb0" />
    </section>
  );
}

export function WhatWeDoSection() {
  return (
    <section className="bg-brand-teal text-brand-white">
      <div className="container-shell section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Big-hearted programs
                <br />
                with playful energy
                <br />
                and real purpose.
              </>
            }
            description="Every initiative is designed as an illustrated pathway into care, confidence, action, and possibility."
            light
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <motion.article
                  data-cursor="active"
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                  className="organic-card relative overflow-hidden border border-white/15 bg-white px-6 py-7 text-brand-plum"
                >
                  <div className={`absolute right-4 top-4 rounded-full p-3 ${pillar.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-6 inline-flex rounded-full bg-brand-plum px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Focus area
                  </div>
                  <h3 className="font-display text-3xl leading-tight">{pillar.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-black/70">{pillar.description}</p>
                  <Link
                    href={`/what-we-do#${pillar.id}`}
                    className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-pink"
                  >
                    Learn about this work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <WaveDivider topColor="#1cabb0" bottomColor="#fdf6ff" />
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-[#fdf6ff]">
      <div className="container-shell section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title={
              <>
                Programs that turn
                <br />
                hope into practical
                <br />
                community action.
              </>
            }
            description="Each project is framed as a bright, welcoming story block that young people and supporters can step into."
          />
        </Reveal>
        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                data-cursor="active"
                whileHover={{ y: -6 }}
                className="organic-card grid gap-6 overflow-hidden border border-brand-plum/10 bg-white p-6 lg:grid-cols-[0.32fr_1fr_0.24fr] lg:items-center"
              >
                <div className={`min-h-44 rounded-[28px] ${project.accent} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-50">
                    <SceneIllustration theme={index % 2 === 0 ? "light" : "teal"} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl text-brand-plum sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-black/70">{project.summary}</p>
                </div>
                <div className="flex lg:justify-end">
                  <Link
                    href="/projects"
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-plum px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-brand-pink hover:text-brand-plum"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveDivider topColor="#fdf6ff" bottomColor="#500769" />
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="bg-brand-plum text-brand-white">
      <div className="container-shell section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Impact"
            title={
              <>
                Numbers that show
                <br />
                care in motion.
              </>
            }
            description="Our reach keeps growing because students, volunteers, educators, and partners keep showing up with courage and generosity."
            light
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="organic-card border border-white/12 bg-white/10 p-6 backdrop-blur"
              >
                <p className="font-display text-5xl text-brand-pink sm:text-6xl">{stat.value}</p>
                <p className="mt-3 text-base leading-relaxed text-white/82">{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveDivider topColor="#500769" bottomColor="#ffffff" />
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="bg-white">
      <div className="container-shell section-padding grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Thoughtful teams,
                <br />
                joyful collaboration,
                <br />
                shared responsibility.
              </>
            }
            description="Our structure keeps programs warm, accountable, and responsive to what young people really need."
          />
        </Reveal>
        <div className="grid gap-4">
          {teamFunctions.map((team, index) => (
            <Reveal key={team} delay={index * 0.08}>
              <div className="organic-card flex items-center justify-between gap-4 border border-brand-plum/10 bg-brand-sky px-6 py-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-plum">Team {index + 1}</p>
                  <h3 className="mt-2 font-display text-2xl text-brand-plum">{team}</h3>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-brand-teal shadow-bubble">
                  <HeartHandshake className="h-7 w-7" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveDivider topColor="#ffffff" bottomColor="#ffecf7" />
    </section>
  );
}

export function VolunteerSection() {
  const volunteerLinks: { label: string; href: Route }[] = [
    { label: "Code of conduct", href: "/volunteer#code-of-conduct" },
    { label: "Community channels", href: "/volunteer#communication-channels" },
    { label: "Recognition & appreciation", href: "/volunteer#recognition" },
    { label: "Ongoing support", href: "/faq" }
  ];

  return (
    <section className="bg-[#ffecf7]">
      <div className="container-shell section-padding grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="organic-card border border-brand-plum/10 bg-white p-7 sm:p-9">
            <SectionHeading
              eyebrow="Volunteer community"
              title={
                <>
                  Join a culture
                  <br />
                  of care, clarity,
                  <br />
                  and cheerful service.
                </>
              }
              description="Volunteers commit to respect, timely communication, accountability, and encouragement. We celebrate contribution, create room for learning, and stay connected through clear community channels."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {volunteerLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="focus-ring rounded-[24px] bg-brand-sky px-4 py-4 font-bold text-brand-plum transition hover:-translate-y-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/volunteer">Become a volunteer</Button>
              <Button href="/contact" variant="ghost" className="text-brand-plum">
                Partner with us
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <SceneIllustration theme="light" />
        </Reveal>
      </div>
      <WaveDivider topColor="#ffecf7" bottomColor="#c2e9ff" />
    </section>
  );
}

export function StoriesSection() {
  return (
    <section className="bg-brand-sky">
      <div className="container-shell section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Impact stories"
            title={
              <>
                Human stories
                <br />
                at the center
                <br />
                of the mission.
              </>
            }
            description="These editorial-style cards stand in for the voices, reflections, and moments that make the work feel personal."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Reveal key={story.title} delay={index * 0.08}>
              <motion.article whileHover={{ y: -8 }} className="organic-card overflow-hidden bg-white">
                <div className={`h-56 ${index === 0 ? "bg-brand-pink" : index === 1 ? "bg-brand-teal" : "bg-brand-lilac"} p-5`}>
                  <SceneIllustration theme={index === 1 ? "teal" : "light"} />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-plum">Story {index + 1}</p>
                  <h3 className="mt-3 font-display text-3xl text-brand-plum">{story.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-brand-black/72">{story.excerpt}</p>
                  <Link href="/impact-stories" className="focus-ring mt-6 inline-flex items-center gap-2 font-bold text-brand-pink">
                    Read the story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveDivider topColor="#c2e9ff" bottomColor="#500769" />
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="bg-brand-plum text-brand-white">
      <div className="container-shell section-padding">
        <div className="organic-card grid gap-8 overflow-hidden bg-brand-black/25 p-6 md:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal>
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-sky">Stay in the circle</p>
              <h2 className="display-title">
                Let’s keep
                <br />
                building hopeful
                <br />
                change together.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Join our community for updates, opportunities, stories from the field, and ways to support students and young changemakers.
              </p>
              <div className="mt-8 space-y-3 text-white/84">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-pink" />
                  hello@blessingraymondfoundation.org
                </p>
                <p>Instagram / Facebook / LinkedIn</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <form className="organic-card border border-white/10 bg-white p-6 text-brand-plum shadow-bubble">
              <label className="mb-2 block text-sm font-bold" htmlFor="name">
                Your name
              </label>
              <input id="name" className="focus-ring mb-4 w-full rounded-full border border-brand-plum/10 bg-brand-sky/40 px-5 py-4" placeholder="Enter your name" />
              <label className="mb-2 block text-sm font-bold" htmlFor="email">
                Email address
              </label>
              <input id="email" type="email" className="focus-ring mb-4 w-full rounded-full border border-brand-plum/10 bg-brand-sky/40 px-5 py-4" placeholder="you@example.com" />
              <label className="mb-2 block text-sm font-bold" htmlFor="interest">
                I care about
              </label>
              <textarea
                id="interest"
                className="focus-ring min-h-36 w-full rounded-[28px] border border-brand-plum/10 bg-brand-sky/40 px-5 py-4"
                placeholder="Youth leadership, school outreach, volunteering, partnerships..."
              />
              <div className="mt-6 flex flex-wrap gap-4">
                <Button>Join the newsletter</Button>
                <Button href="/contact" variant="ghost" className="text-brand-plum">
                  Contact us
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
