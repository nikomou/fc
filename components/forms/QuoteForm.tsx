"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(20, "Please provide more details about your project"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const projectTypes = [
  "New Shopify Store",
  "Shopify Plus Migration",
  "Theme Customization",
  "Custom Development",
  "Performance Optimization",
  "App Integration",
  "Other",
];

const budgetRanges = [
  "Under £2,500",
  "£2,500 - £5,000",
  "£5,000 - £10,000",
  "£10,000 - £25,000",
  "£25,000+",
];

const timelines = [
  "ASAP",
  "1-2 weeks",
  "2-4 weeks",
  "1-2 months",
  "3+ months",
  "Flexible",
];

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xkoqzzbv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setIsSubmitted(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-foreground-dark mb-2">
          Quote Request Received!
        </h3>
        <p className="text-foreground mb-6">
          Thanks for your interest! We&apos;ll review your project details and get
          back to you within 24 hours with a custom quote.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-foreground-dark mb-2"
        >
          Current Website (if any)
        </label>
        <input
          type="url"
          id="website"
          {...register("website")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
          placeholder="https://yourwebsite.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Project Type *
          </label>
          <select
            id="projectType"
            {...register("projectType")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors bg-white"
          >
            <option value="">Select type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.projectType.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Budget *
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors bg-white"
          >
            <option value="">Select budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-foreground-dark mb-2"
          >
            Timeline *
          </label>
          <select
            id="timeline"
            {...register("timeline")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors bg-white"
          >
            <option value="">Select timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p className="mt-1 text-sm text-red-600">
              {errors.timeline.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-foreground-dark mb-2"
        >
          Project Description *
        </label>
        <textarea
          id="description"
          rows={5}
          {...register("description")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
          placeholder="Tell us about your project goals, features you need, current challenges, etc."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" icon={false} disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get Your Free Quote
            <Send className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
