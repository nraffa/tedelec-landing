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
  // Suburbs/regions Tedelec services. Edit freely.
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
    },
    {
      title: "Commercial fitouts",
      blurb:
        "Shop, office and hospitality fitouts — from Manly delis to corporate refits. We coordinate with builders and shopfitters end-to-end.",
    },
    {
      title: "Lighting design",
      blurb:
        "Considered residential and architectural lighting — pendants, downlights, garden and feature lighting that suits the space.",
    },
    {
      title: "LED upgrades",
      blurb:
        "Whole-site fluorescent-to-LED retrofits. Lower energy bills, better light, less heat. We've swapped 200+ troffers in two days.",
    },
    {
      title: "Switchboard upgrades",
      blurb:
        "Old fuse boxes replaced with modern, compliant switchboards with safety switches on every circuit.",
    },
    {
      title: "Smart homes",
      blurb:
        "C-Bus, Hager and Legrand systems. Lighting scenes, blinds, climate and security tied into one tidy interface.",
    },
    {
      title: "Renovations & new builds",
      blurb:
        "Full electrical for kitchens, bathrooms, extensions and new builds — from rough-in through to final fit-off and certification.",
    },
    {
      title: "Temporary power",
      blurb:
        "Site temp power for builders and trades — safe, compliant, ready when the crew arrives.",
    },
  ],
  // Real project highlights inferred from the @tedelec_sydney feed.
  // Drop matching photos into /public/images/work/ with these filenames.
  work: [
    {
      title: "Bilgola Beach pendants",
      caption: "Hanging woven pendants over a dining table looking out to Bilgola Beach.",
      image: "/images/work/bilgola-pendants.jpg",
    },
    {
      title: "Wilbur's Deli, Manly",
      caption: "Full electrical fit-out for a new deli/sandwich bar in Manly.",
      image: "/images/work/wilburs-manly.jpg",
    },
    {
      title: "Northern Beaches kitchen reno",
      caption: "Final-stage rough-in and fit-off on a kitchen renovation.",
      image: "/images/work/kitchen-reno.jpg",
    },
    {
      title: "208 troffers to LED",
      caption: "Two-day commercial LED retrofit — 208 fluorescent troffers swapped over.",
      image: "/images/work/led-retrofit.jpg",
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
  // SEO
  seo: {
    title: "Tedelec — Northern Beaches & North Shore Electricians | Sydney",
    description:
      "Tedelec is a licensed Sydney electrician servicing the Northern Beaches and North Shore. Residential, commercial fitouts, lighting design, smart homes and 24/7 emergency callouts. Call 0450 322 918.",
    siteUrl: "https://tedelec.com.au",
  },
} as const;

export type Site = typeof site;
