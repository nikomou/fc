"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/constants";

interface Office {
  name: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
}

interface OfficeAccordionProps {
  offices: Office[];
}

export function OfficeAccordion({ offices }: OfficeAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {offices.map((office, index) => (
        <div key={office.name} className="bg-black rounded-2xl text-white overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <h3 className="text-lg font-semibold">{office.name}</h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <address className="not-italic space-y-3 text-sm px-6 pb-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300">
                    {office.streetAddress}, {office.addressLocality}, {office.postalCode}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-300 hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300">Mon-Fri: 9am - 5:30pm</p>
                </div>
              </address>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
