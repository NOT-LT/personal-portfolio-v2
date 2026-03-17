import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  console.warn = () => { }
}

export const metadata: Metadata = {
  metadataBase: new URL("https://taljamri.com"),
  title: {
    default: "Taha Almohamed — Software Engineer",
    template: "%s | Taha Almohamed",
  },
  description: "Software engineer based in Bahrain. Building scalable systems, AI, and modern web applications.",
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
  authors: [{ name: "Taha Almohamed" }],
  appleWebApp: {
    title: "Taha",
  },
  alternates: {
    canonical: "https://taljamri.com",
  },
  openGraph: {
    title: "Taha Almohamed — Software Engineer",
    description: "Building scalable systems, AI experiments, and modern web products.",
    url: "https://taljamri.com",
    siteName: "Taha Almohamed",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Almohamed",
    description: "Software engineer building modern systems.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Taha Almohamed",
              alternateName: ["Taha Al-Mohamed", "Taha Aljamri", "Taha Al-Jamri"],
              url: "https://taljamri.com",
              jobTitle: "Software Engineer",
              description: "Software engineer based in Bahrain, known as Taha Aljamri and Taha Almohamed.",
              sameAs: [
                "https://github.com/taljamri",
                "https://linkedin.com/in/taljamri",
              ],
            }),
          }}
        />
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}