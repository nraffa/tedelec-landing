import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: { default: site.seo.title, template: "%s — Tedelec" },
  description: site.seo.description,
  applicationName: "Tedelec",
  authors: [{ name: site.brand.owner }],
  keywords: [
    "electrician sydney",
    "northern beaches electrician",
    "north shore electrician",
    "manly electrician",
    "emergency electrician sydney",
    "smart home installer sydney",
    "C-Bus electrician",
    "switchboard upgrade sydney",
    "lighting design sydney",
  ],
  openGraph: {
    type: "website",
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.siteUrl,
    siteName: "Tedelec",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
  alternates: { canonical: site.seo.siteUrl },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Tedelec",
  image: `${site.seo.siteUrl}/og.jpg`,
  url: site.seo.siteUrl,
  telephone: site.contact.phoneIntl,
  email: site.contact.email,
  areaServed: ["Northern Beaches, Sydney", "North Shore, Sydney"],
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  sameAs: [site.contact.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-white text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          // Static JSON, no user input — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
