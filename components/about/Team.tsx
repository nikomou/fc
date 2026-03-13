"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "David Chen",
    role: "Founder & CEO",
    bio: "15+ years in ecommerce. Former Shopify Plus implementation lead.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Williams",
    role: "Technical Director",
    bio: "Full-stack developer specialising in Shopify Plus and headless commerce.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Roberts",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for conversion-focused UX.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emma Clarke",
    role: "Head of Strategy",
    bio: "Ecommerce strategist helping brands scale from startup to enterprise.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    bio: "Shopify expert with 100+ theme builds and custom app development.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Keeps projects on track and clients happy. Certified Scrum Master.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
];

export function Team() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A passionate team of Shopify experts dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-shadow"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="text-xl font-semibold text-foreground-dark mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-black mb-3">
                {member.role}
              </p>
              <p className="text-foreground text-sm mb-4">{member.bio}</p>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                  aria-label={`${member.name} on Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
