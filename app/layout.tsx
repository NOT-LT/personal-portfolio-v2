import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getSiteContent } from "@/lib/content";

const site = getSiteContent();
const siteUrl = new URL(site.siteUrl);
const themeInitScript = `
(() => {
  try {
    const savedTheme = localStorage.getItem("theme-mode");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const resolvedTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  } catch {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${site.siteName} — ${site.jobTitle}`,
    template: `%s | ${site.siteName}`,
  },
  description: site.description,
  keywords: [
    "Taha Almohamed",
    "Taha Al-Mohamed",
    "Taha Aljamri",
    "Taha Al-Jamri",
    "Software Engineer Bahrain",
    "Next.js Developer",
    "AI Engineer",
    "Full Stack Developer",
    "React Developer",
    "Software Developer",
  ],
  authors: [{ name: site.siteName }],
  appleWebApp: {
    title: site.siteName,
  },
  alternates: {
    canonical: site.siteUrl,
  },
  openGraph: {
    title: `${site.siteName} — ${site.jobTitle}`,
    description: site.description,
    url: site.siteUrl,
    siteName: site.siteName,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.siteName,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.siteName,
              alternateName: ["Taha Al-Mohamed", "Taha Aljamri", "Taha Al-Jamri"],
              url: site.siteUrl,
              jobTitle: site.jobTitle,
              description: site.description,
              sameAs: site.sameAs,
            }),
          }}
        />
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
