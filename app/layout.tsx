import "./globals.css";
import type { Metadata } from "next";

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
    "Taha Al-jamri",
    "Software Engineer Bahrain",
    "Next.js Developer",
    "AI Engineer",
    "Full Stack Developer",
    "React Devloper",
    "Software Developer"
  ],
  authors: [{ name: "Taha Almohamed" }],
  alternates: {
    canonical: "https://taljamri.com",
  },
  openGraph: {
    title: "Taha Almohamed — Software Engineer",
    description: "Building scalable systems, AI experiments, and modern web products.",
    url: "https://taljamri.com",
    siteName: "Taha Almohamed",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Taha" />
      <body>
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Taha Almohamed",
              "alternateName": ["Taha Al-Mohamed", "Taha Aljamri", "Taha Al-Jamri"],
              url: "https://taljamri.com",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/taljamri",
                "https://linkedin.com/in/taljamri",
              ],
              "description": "Software engineer based in Bahrain, known as Taha Aljamri and Taha Almohamed.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}