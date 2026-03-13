import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Team } from "@/components/about/Team";
import { teamValues } from "@/lib/constants";
import { Users, Target, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Flex Commerce - a Shopify Plus agency based in Manchester and Liverpool, helping brands build exceptional ecommerce experiences.",
};

const stats = [
  { value: "£50M+", label: "Revenue Generated" },
  { value: "127", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "2", label: "UK Offices" },
];

const valueIcons = {
  "Client First": Users,
  Excellence: Award,
  Transparency: Target,
  Innovation: Heart,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-black text-white rounded-full mb-4">
              Established 2016
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              About Flex Commerce
            </h1>
            <p className="text-xl text-foreground">
              We&apos;re a team of Shopify experts passionate about helping brands
              create exceptional ecommerce experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground-dark mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Flex Commerce was founded in 2016 with a simple mission: help ambitious
                brands build Shopify stores that truly convert. What started as a
                small team of Shopify enthusiasts has grown into a full-service
                agency with offices in Manchester and Liverpool.
              </p>
              <p>
                We&apos;ve worked with over 100 brands across industries - from fashion and
                beauty to tech and home goods. Each project has taught us
                something new, and we bring that collective experience to every
                client we work with.
              </p>
              <p>
                Today, we&apos;re proud to be an official Shopify Plus Partner, trusted by
                leading brands to deliver exceptional ecommerce solutions. Our team
                has generated over £50 million in revenue for our clients.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Team />

      {/* Our Values */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Our Values
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamValues.map((value) => {
            const Icon =
              valueIcons[value.title as keyof typeof valueIcons] || Heart;
            return (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Why Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-foreground-dark mb-2">
              Shopify Plus Experts
            </h3>
            <p className="text-foreground">
              Official Shopify Plus Partners with deep expertise in the platform and
              ecosystem.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-foreground-dark mb-2">
              Dedicated UK Team
            </h3>
            <p className="text-foreground">
              Work directly with our Manchester & Liverpool teams. No outsourcing, no
              middlemen.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-foreground-dark mb-2">
              Results Focused
            </h3>
            <p className="text-foreground">
              Every decision is made with your conversion rate and growth in
              mind.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
