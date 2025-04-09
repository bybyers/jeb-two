'use client'

import Template from "./template";
import Header from "@/components/header";
import Script from 'next/script';
import PlausibleProvider from 'next-plausible';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="jacobbyers.me" trackOutboundLinks={true}>
      <Template>
        <Header />
        {children}
        <Script
          defer
          data-domain="jacobbyers.me"
          src="https://plausible.io/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
        </Script>
      </Template>
    </PlausibleProvider>
  );
}