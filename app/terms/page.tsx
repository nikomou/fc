import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Flex Commerce services.",
};

const lastUpdated = "13 March 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        background="yellow"
        badge={{ icon: FileText, text: "Last updated " + lastUpdated }}
        title="Terms of Service"
        description="Please read these terms carefully before engaging our services."
        shapeColors={{ topRight: "yellow" }}
      />

      <Section>
        <div className="max-w-3xl mx-auto prose-content">

          <h2>1. Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern the relationship between Flex Commerce ("we", "us", "our") and you ("the Client") when you engage us to provide Shopify development, design, or related digital services. By commissioning work with us, you agree to these Terms.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide Shopify ecommerce services including but not limited to: theme development, Shopify Plus setup, app development, integrations, SEO, speed optimisation, and ongoing support. The specific scope of work for each project is agreed in writing prior to commencement.
          </p>

          <h2>3. Proposals & Quotes</h2>
          <p>
            All quotes and proposals are valid for 30 days from the date of issue. A quote does not constitute a binding contract until both parties have agreed the scope in writing and an initial payment has been made.
          </p>

          <h2>4. Payment Terms</h2>
          <p>Our standard payment structure is as follows:</p>
          <ul>
            <li><strong>50%</strong> deposit required before work begins</li>
            <li><strong>25%</strong> due upon design/development approval</li>
            <li><strong>25%</strong> due upon project completion and launch</li>
          </ul>
          <p>
            All prices are in GBP and exclude VAT unless otherwise stated. Invoices are payable within 14 days of issue. Late payments may incur interest at 8% above the Bank of England base rate in accordance with the Late Payment of Commercial Debts Act 1998.
          </p>
          <p>
            We reserve the right to pause work on a project if payment is overdue by more than 14 days.
          </p>

          <h2>5. Project Timelines</h2>
          <p>
            Estimated timelines are provided in good faith and are dependent on timely feedback and content delivery from the Client. We are not liable for delays caused by late client responses, third-party platforms, or factors outside our reasonable control.
          </p>

          <h2>6. Client Responsibilities</h2>
          <p>The Client agrees to:</p>
          <ul>
            <li>Provide all required content, assets, and access in a timely manner</li>
            <li>Provide clear and consolidated feedback at each review stage</li>
            <li>Ensure they have the legal right to use any materials supplied to us</li>
            <li>Maintain appropriate backups of their Shopify store</li>
          </ul>

          <h2>7. Revisions & Change Requests</h2>
          <p>
            Each project includes a reasonable number of revisions as outlined in the project scope. Work outside the agreed scope will be quoted separately and is subject to our standard day rate.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            Upon receipt of full payment, all custom work created for the Client transfers to the Client. We retain the right to use the project in our portfolio unless otherwise agreed in writing. Any third-party themes, plugins, or licences remain subject to their own licensing terms.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary information shared during the course of a project. This obligation survives the termination of the working relationship.
          </p>

          <h2>10. Warranties & Liability</h2>
          <p>
            We warrant that work will be carried out with reasonable skill and care. We do not guarantee specific commercial outcomes such as revenue increases or search rankings. Our total liability to the Client shall not exceed the total fees paid for the project in question.
          </p>
          <p>
            We are not liable for any indirect, consequential, or loss-of-profit damages.
          </p>

          <h2>11. Termination</h2>
          <p>
            Either party may terminate a project with 14 days written notice. In the event of termination, the Client is liable for all work completed to date. Any deposit paid is non-refundable.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. The date at the top of this page reflects the most recent revision. Continued engagement of our services constitutes acceptance of the updated Terms.
          </p>

          <h2>14. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact us at <a href="mailto:hello@flexcommerce.co.uk" className="text-accent hover:underline">hello@flexcommerce.co.uk</a>.
          </p>

        </div>
      </Section>
    </>
  );
}
