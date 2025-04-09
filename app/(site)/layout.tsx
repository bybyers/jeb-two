import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jacobbyers.me/'),
  title: 'Jacob Byers | Frontend Engineer',
  description: `Portfolio of Jacob Byers, a frontend engineer with a passion for building user-friendly web applications. Explore my projects and skills in React, Next.js, and more.`,
  keywords: ['Jacob Byers', 'Frontend Engineer', 'Portfolio', 'Web Development', 'React', 'Next.js'],
  openGraph: {
    title: 'Jacob Byers | Frontend Engineer',
    description: `Portfolio of Jacob Byers, a frontend engineer with a passion for building user-friendly web applications. Explore my projects and skills in React, Next.js, and more.`,
    images: [
      {
        url: 'https://cdn.sanity.io/images/w9zn3gtf/production/d9b9e38a3a52dd3cc051b0cf37e5e7e212f87e13-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Byers | Frontend Engineer',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}