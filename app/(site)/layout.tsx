'use client'

import type { Metadata } from "next";
import "./globals.css";
import Template from "./template";
import Header from "@/components/header";
import Script from 'next/script';
import PlausibleProvider from 'next-plausible';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PlausibleProvider domain="jacobbyers.me" trackOutboundLinks={true}>
          <Template>
            <Header />
            {children}

            {/* Fallback Plausible script for extra safety (optional if using PlausibleProvider) */}
            <Script
              defer
              data-domain="jacobbyers.me"
              src="https://plausible.io/js/script.hash.outbound-links.js"
              strategy="afterInteractive"
            />

            {/* Init custom events */}
            <Script id="plausible-init" strategy="afterInteractive">
              {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
          </Template>
        </PlausibleProvider>
      </body>
    </html>
  );
}