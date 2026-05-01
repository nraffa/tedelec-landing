// Single source of truth for site content. Edit here and the page updates.
// Nothing in this file is sensitive — phone/email are intentionally public.
// Do NOT add API keys, tokens, or anything secret here. This repo is public.

export const site = {
  brand: {
    name: "Tedelec",
    descriptor: "Electrician",
    owner: "Ted Hall",
    tagline: "Northern Beaches & North Shore electricians",
    longTagline:
      "Sydney electricians servicing the Northern Beaches and North Shore — residential, commercial and 24/7 emergency.",
    license: "NSW Lic. ##### ###",
    serviceArea: "Northern Beaches & North Shore",
    years: 20,
  },
  contact: {
    phone: "0450 322 918",
    phoneIntl: "+61450322918",
    email: "info@tedelec.com.au",
    instagram: "https://www.instagram.com/tedelec_sydney",
    instagramHandle: "@tedelec_sydney",
  },
  hours: {
    standard: "Mon–Fri · 7:00am – 5:00pm",
    emergency: "24/7 emergency callouts",
  },
  areas: [
    "Manly",
    "Mosman",
    "Dee Why",
    "Brookvale",
    "Freshwater",
    "Curl Curl",
    "Narrabeen",
    "Avalon",
    "Bilgola",
    "Newport",
    "Mona Vale",
    "Palm Beach",
    "Neutral Bay",
    "Cremorne",
    "Chatswood",
    "Lane Cove",
    "Willoughby",
    "Northbridge",
  ],
  services: [
    {
      title: "Residential electrical",
      blurb:
        "Power points, lighting, ceiling fans, smoke alarms, safety switches and full home rewires done cleanly and to AS/NZS 3000.",
      icon: "power",
    },
    {
      title: "Commercial fitouts",
      blurb:
        "Shop, office and hospitality fitouts — from Manly delis to corporate refits. We coordinate with builders and shopfitters end-to-end.",
      icon: "switchboard",
    },
    {
      title: "Lighting design",
      blurb:
        "Considered residential and architectural lighting — pendants, downlights, garden and feature lighting that suits the space.",
      icon: "light",
    },
    {
      title: "LED upgrades",
      blurb:
        "Whole-site fluorescent-to-LED retrofits. Lower energy bills, better light, less heat. We've swapped 200+ troffers in two days.",
      icon: "bolt",
    },
    {
      title: "Switchboard upgrades",
      blurb:
        "Old fuse boxes replaced with modern, compliant switchboards with safety switches on every circuit.",
      icon: "safety",
    },
    {
      title: "Smart homes",
      blurb:
        "C-Bus, Hager and Legrand systems. Lighting scenes, blinds, climate and security tied into one tidy interface.",
      icon: "shield",
    },
    {
      title: "Renovations & new builds",
      blurb:
        "Full electrical for kitchens, bathrooms, extensions and new builds — from rough-in through to final fit-off and certification.",
      icon: "fault",
    },
    {
      title: "Temporary power",
      blurb:
        "Site temp power for builders, remedial crews and trades — safe, compliant, ready when the crew arrives.",
      icon: "temp",
    },
  ],
  // Real project highlights from the @tedelec_sydney feed.
  // Drop matching photos into /public/images/work/ with the filenames below.
  work: [
    {
      slug: "bilgola-pendants",
      title: "Bilgola Beach pendants",
      caption:
        "Hung beach pendants overlooking Bilgola Beach. Custom woven fixtures with the right beam spread for an open dining room.",
      tags: ["Lighting", "Residential"],
      image: "/images/work/bilgola-pendants.jpg",
      featured: true,
    },
    {
      slug: "smart-home-cbus",
      title: "C-Bus smart home, Northern Beaches",
      caption:
        "Full smart-home build — C-Bus, Hager and Legrand integration with garden and feature lighting on a multi-level beachfront house.",
      tags: ["Smart home", "C-Bus", "Hager", "Legrand"],
      image: "/images/work/smart-home-cbus.jpg",
    },
    {
      slug: "midcentury-lighting",
      title: "Mid-century home, North Shore",
      caption:
        "Considered relighting and electrical for a mid-century restoration with @etchrealestate × @midcenturyhome — preserving the architecture, bringing the wiring up to current code.",
      tags: ["Heritage", "Lighting"],
      image: "/images/work/midcentury-lighting.jpg",
    },
    {
      slug: "kitchen-reno",
      title: "Northern Beaches kitchen reno",
      caption:
        "Final-stage rough-in and fit-off on a kitchen renovation — power points, downlights, range-hood circuit, the lot.",
      tags: ["Renovation", "Kitchen"],
      image: "/images/work/kitchen-reno.jpg",
    },
    {
      slug: "wilburs-deli",
      title: "Wilbur's Deli, Manly",
      caption:
        "Full electrical fit-out for a new deli/sandwich bar in Manly — refrigeration circuits, feature lighting and tidy data runs.",
      tags: ["Commercial", "Fitout"],
      image: "/images/work/wilburs-manly.jpg",
    },
    {
      slug: "led-retrofit",
      title: "208 troffers, two days",
      caption:
        "Two-day commercial LED retrofit — 208 fluorescent troffers swapped over for energy-efficient LED panels. Lower bills, better light, less heat.",
      tags: ["Commercial", "LED", "Energy"],
      image: "/images/work/led-retrofit.jpg",
    },
  ],
  stats: [
    { num: "20+", lbl: "Years on the tools" },
    { num: "24/7", lbl: "Emergency response", accent: true },
    { num: "100%", lbl: "Licensed & insured" },
    { num: "5.0★", lbl: "Local reputation" },
  ],
  process: [
    {
      n: "01",
      title: "Call or message",
      blurb:
        "Ring direct or send through email. We pick up — including after hours for emergencies.",
    },
    {
      n: "02",
      title: "Fixed quote",
      blurb:
        "Site visit or photos, then an itemised quote. You sign it before any spanner moves.",
    },
    {
      n: "03",
      title: "Job done",
      blurb:
        "Tidy work, certificate of compliance, area cleaner than we found it.",
    },
  ],
  marqueeWords: [
    "Switchboards",
    "Temp Power",
    "Smart Homes",
    "Lighting",
    "Fault Finding",
    "24/7 Callouts",
    "LED Upgrades",
    "Renovations",
  ],
  testimonials: [
    {
      name: "Sarah K.",
      suburb: "Manly",
      quote:
        "Ted came out the same afternoon when half our power went out. Found the fault in 10 minutes, explained everything, fair price. Saved us a weekend without lights.",
    },
    {
      name: "James W.",
      suburb: "Mosman",
      quote:
        "Replaced an ancient switchboard and added safety switches. Tidy work, no mess left behind, and he sent the compliance certificate the same day.",
    },
    {
      name: "Priya R.",
      suburb: "Chatswood",
      quote:
        "Used Tedelec for our café fitout — power points, lighting, the lot. On time, on budget, and the inspector loved the work.",
    },
  ],
  faqs: [
    {
      q: "Do you offer free quotes?",
      a: "Yes — for any job over $300, quotes are free. For small fixes we'll give you a price over the phone before we head out.",
    },
    {
      q: "Are you really available 24/7?",
      a: "Yes. Ted or one of the crew picks up day or night. After-hours rates apply for non-emergency work.",
    },
    {
      q: "Which suburbs do you cover?",
      a: "All of the Northern Beaches and North Shore — from Manly up to Palm Beach, and across to Hornsby, Chatswood and Mosman. Outside that, ask us.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Fully licensed in NSW and covered by $20M public liability insurance. Compliance certificates issued for every job.",
    },
    {
      q: "How quickly can you get to me?",
      a: "Same-day for most callouts on the Northern Beaches and North Shore. True emergencies — within the hour, day or night.",
    },
  ],
  trust: [
    {
      title: "Fully licensed NSW electricians",
      blurb: "Compliant work, certified on completion. Licence details on every quote and invoice.",
    },
    {
      title: "Northern Beaches local",
      blurb: "Based on the Beaches — quick onsite, knows the area, knows the buildings.",
    },
    {
      title: "24/7 emergency crew",
      blurb: "Lost power, tripping switchboard, exposed wiring? Call us any hour.",
    },
    {
      title: "Clean, considered work",
      blurb: "Tidy cable runs, neat finishes, work you'd be happy to leave the cover off.",
    },
  ],
  seo: {
    title: "Tedelec — Northern Beaches & North Shore Electricians | Sydney",
    description:
      "Tedelec is a licensed Sydney electrician servicing the Northern Beaches and North Shore. Residential, commercial fitouts, lighting design, smart homes and 24/7 emergency callouts. Call 0450 322 918.",
    siteUrl: "https://tedelec.com.au",
  },
} as const;

export type Site = typeof site;
export type IconName =
  | "switchboard"
  | "temp"
  | "light"
  | "power"
  | "fault"
  | "safety"
  | "ev"
  | "bolt"
  | "phone"
  | "mail"
  | "clock"
  | "shield"
  | "star"
  | "arrow"
  | "instagram";
