import { usePageMeta } from "../hooks/usePageMeta";
import LegalPageLayout from "../components/LegalPageLayout";
import { COMPANY, PAGE_META } from "../data/company";
import {
  RiFileTextLine,
  RiCheckboxCircleLine,
  RiGlobalLine,
  RiBriefcaseLine,
  RiErrorWarningLine,
  RiScales3Line,
  RiMailLine,
} from "react-icons/ri";

const SECTIONS = [
  {
    id: "agreement",
    title: "Agreement",
    icon: RiCheckboxCircleLine,
    body: (
      <p>
        By using the {COMPANY.name} website, you agree to these terms. If you disagree, please
        do not use the site.
      </p>
    ),
  },
  {
    id: "content",
    title: "Website content",
    icon: RiGlobalLine,
    body: (
      <p>
        Site content describes our IT services in general. It is <strong>not</strong> a binding
        offer until confirmed in a signed agreement or statement of work.
      </p>
    ),
  },
  {
    id: "projects",
    title: "Project work",
    icon: RiBriefcaseLine,
    body: (
      <p>
        Websites, applications, and related delivery are governed by separate contracts—scope,
        fees, timelines, intellectual property, and confidentiality. Pricing on the site is
        indicative only.
      </p>
    ),
  },
  {
    id: "use-rules",
    title: "Acceptable use",
    icon: RiErrorWarningLine,
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for unlawful purposes</li>
          <li>Attempt unauthorized access to our systems</li>
          <li>Send malware or abusive content via forms</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    icon: RiErrorWarningLine,
    body: (
      <p>
        The site is provided &ldquo;as is.&rdquo; We do not guarantee uninterrupted or
        error-free operation. Where permitted by law, we are not liable for indirect damages
        from use of the site.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    icon: RiScales3Line,
    body: (
      <p>
        These terms are governed by the laws of <strong>India</strong>. Courts in Madhya Pradesh
        have jurisdiction, subject to mandatory consumer protections where applicable.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    icon: RiMailLine,
    body: (
      <p>
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> · {COMPANY.legalName} ·{" "}
        {COMPANY.address}
      </p>
    ),
  },
];

export default function Terms() {
  usePageMeta(PAGE_META.terms);

  return (
    <LegalPageLayout
      title="Terms of Use"
      tagline="Simple rules for browsing our site and understanding how real project work is agreed."
      icon={RiFileTextLine}
      updated="May 2025"
      sections={SECTIONS}
      siblingLink={{ label: "Privacy Policy", to: "/privacy" }}
    />
  );
}
