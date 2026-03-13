import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Flex Commerce collects, uses, and protects your personal data.",
};

const lastUpdated = "13 March 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge={{ icon: Shield, text: "Last updated " + lastUpdated }}
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        shapeColors={{ topRight: "blue" }}
      />

      <Section>
        <div className="max-w-3xl mx-auto prose-content">

          <h2>1. Who We Are</h2>
          <p>
            Flex Commerce is a Shopify Plus agency based in Manchester and Liverpool, United Kingdom. We provide ecommerce design, development, and growth services. When we refer to "we", "us", or "our" in this policy, we mean Flex Commerce.
          </p>
          <p>
            If you have any questions about this policy or how we handle your data, please contact us at <a href="mailto:hello@flexcommerce.co.uk" className="text-accent hover:underline">hello@flexcommerce.co.uk</a>.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li><strong>Contact information</strong> — name, email address, phone number, and company name when you submit an enquiry or quote request.</li>
            <li><strong>Usage data</strong> — pages visited, time on site, browser type, and IP address, collected via analytics tools.</li>
            <li><strong>Communications</strong> — any messages you send us via our contact or quote forms.</li>
            <li><strong>Cookies</strong> — small files stored on your device to improve your experience. See section 6 for more detail.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Respond to your enquiries and provide our services</li>
            <li>Send you a proposal or quote when requested</li>
            <li>Improve our website and understand how visitors use it</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We will never sell your personal data to third parties.</p>

          <h2>4. Legal Basis for Processing</h2>
          <p>Under UK GDPR, we process your data on the following legal bases:</p>
          <ul>
            <li><strong>Legitimate interests</strong> — responding to enquiries and improving our services</li>
            <li><strong>Consent</strong> — for marketing communications, where you have opted in</li>
            <li><strong>Contract</strong> — to deliver services you have engaged us for</li>
            <li><strong>Legal obligation</strong> — where we are required by law</li>
          </ul>

          <h2>5. How Long We Keep Your Data</h2>
          <p>We retain enquiry data for up to 2 years. Client project data is retained for 6 years in line with UK accounting and legal requirements. You may request deletion at any time (subject to legal obligations).</p>

          <h2>6. Cookies</h2>
          <p>Our website uses cookies for:</p>
          <ul>
            <li><strong>Analytics</strong> — to understand how visitors use our site (e.g. Google Analytics)</li>
            <li><strong>Functionality</strong> — to remember your preferences</li>
          </ul>
          <p>You can control cookies through your browser settings. Disabling cookies may affect some functionality of this site.</p>

          <h2>7. Third-Party Services</h2>
          <p>We use a small number of trusted third-party tools that may process your data, including:</p>
          <ul>
            <li>Google Analytics (website analytics)</li>
            <li>Email service providers (for responding to enquiries)</li>
          </ul>
          <p>All third parties are required to handle your data securely and in accordance with applicable data protection law.</p>

          <h2>8. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:hello@flexcommerce.co.uk" className="text-accent hover:underline">hello@flexcommerce.co.uk</a>. You also have the right to lodge a complaint with the <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Information Commissioner's Office (ICO)</a>.</p>

          <h2>9. Data Security</h2>
          <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our website uses HTTPS encryption.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

        </div>
      </Section>
    </>
  );
}
