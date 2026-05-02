import type { Metadata } from "next";
import "./globals.css";

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mohamed El Fankari Portfolio",
  url: "https://mohamedelfankari.com",
  description:
    "Portfolio site for Mohamed El Fankari, a web and mobile developer showcasing internships, full-stack projects, and software engineering experience.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedelfankari.com"),

  title: "Mohamed El Fankari | Web & Mobile Developer",
  description:
    "Portfolio of Mohamed El Fankari showcasing web and mobile apps, Android internship work, and full-stack development skills.",

  keywords: [
    "Mohamed El Fankari",
    "software engineer",
    "full-stack developer",
    "web developer",
    "mobile developer",
    "React",
    "Next.js",
    "Android development",
    "JavaScript",
    "portfolio",
    "software engineering student",
  ],

  openGraph: {
    title: "Mohamed El Fankari | Web & Mobile Developer",
    description:
      "Portfolio of Mohamed El Fankari showcasing web and mobile apps, Android internship work, and full-stack development skills.",
    type: "website",
    url: "https://mohamedelfankari.com",
    images: [
      {
        url: "/images/profile_portfolio.png",
        alt: "Mohamed El Fankari developer portfolio hero image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohamed El Fankari | Web & Mobile Developer",
    description:
      "Portfolio of Mohamed El Fankari showcasing web and mobile apps, Android internship work, and full-stack development skills.",
    images: ["/images/profile_portfolio.png"],
  },

  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
