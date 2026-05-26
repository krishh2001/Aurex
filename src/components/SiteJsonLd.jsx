import { useEffect } from "react";
import { COMPANY, SITE } from "../data/company";
import { upsertJsonLd } from "../lib/seo";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: SITE.url,
  logo: SITE.ogImage,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    addressCountry: "IN",
  },
  sameAs: [
    COMPANY.linkedin,
    COMPANY.twitter,
    COMPANY.instagram,
    COMPANY.github,
  ].filter(Boolean),
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: COMPANY.description,
  publisher: { "@type": "Organization", name: COMPANY.legalName },
};

export default function SiteJsonLd() {
  useEffect(() => {
    const cleanOrg = upsertJsonLd("jsonld-organization", ORG_SCHEMA);
    const cleanSite = upsertJsonLd("jsonld-website", WEBSITE_SCHEMA);
    return () => {
      cleanOrg();
      cleanSite();
    };
  }, []);

  return null;
}
