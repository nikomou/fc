"use client";

import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Settings,
  CreditCard,
  Truck,
  FileText,
  Search,
  Shield,
  TestTube,
  Rocket,
  List,
  ShoppingCart,
  Zap,
  BarChart,
  Globe,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  CreditCard,
  Truck,
  FileText,
  Search,
  Shield,
  TestTube,
  Rocket,
  List,
  ShoppingCart,
  Zap,
  BarChart,
  Globe,
  CheckCircle2,
};

interface ChecklistItemProps {
  id: string;
  label: string;
  color: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

function ChecklistItem({ id, label, color, checked, onChange }: ChecklistItemProps) {
  return (
    <label
      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 cursor-pointer transition-colors group"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
          checked ? "bg-current" : "group-hover:border-gray-400"
        }`}
        style={{
          borderColor: color,
          backgroundColor: checked ? color : "transparent"
        }}
      >
        {checked && (
          <CheckCircle2 className="w-4 h-4 text-white" />
        )}
      </div>
      <span className={`${checked ? "line-through text-foreground" : "text-foreground-dark"} transition-colors`}>
        {label}
      </span>
    </label>
  );
}

interface ChecklistSection {
  title: string;
  icon: string;
  color: string;
  items: string[];
}

interface ChecklistProps {
  storageKey: string;
  sections: ChecklistSection[];
  sectionBackground?: (index: number) => "white" | "alt";
}

export function Checklist({ storageKey, sections, sectionBackground }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const hasShownConfetti = useRef(false);
  const prevProgressRef = useRef(0);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
    setMounted(true);
  }, [storageKey]);

  // Save to localStorage when checkedItems changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey, JSON.stringify(checkedItems));
    }
  }, [checkedItems, storageKey, mounted]);

  const handleChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [id]: checked }));
  };

  const handleCheckAllSection = (sectionIndex: number, itemCount: number) => {
    const updates: Record<string, boolean> = {};
    for (let i = 0; i < itemCount; i++) {
      updates[`${sectionIndex}-${i}`] = true;
    }
    setCheckedItems((prev) => ({ ...prev, ...updates }));
  };

  const handleResetChecklist = () => {
    setCheckedItems({});
    hasShownConfetti.current = false;
    localStorage.removeItem(storageKey);
  };

  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  // Trigger confetti when reaching 100%
  useEffect(() => {
    if (mounted && progressPercent === 100 && prevProgressRef.current < 100 && !hasShownConfetti.current) {
      hasShownConfetti.current = true;

      // Fire confetti from both sides
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ["#ef436b", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ["#ef436b", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
    prevProgressRef.current = progressPercent;
  }, [progressPercent, mounted]);

  const getBackground = sectionBackground || ((index: number) => index % 2 === 0 ? "white" : "alt");

  return (
    <>
      {/* Progress Bar */}
      <div className={`sticky top-20 z-40 shadow-sm transition-colors duration-500 ${progressPercent === 100 ? "bg-[#10b981]" : "bg-[#1a1a1a]"}`}>
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">
              {progressPercent === 100 ? "Checklist complete!" : `${completedItems} of ${totalItems} completed`}
            </span>
            <div className="flex items-center gap-4">
              {completedItems > 0 && (
                <button
                  onClick={handleResetChecklist}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Reset
                </button>
              )}
              <span className="text-sm font-medium text-white">
                {progressPercent}%
              </span>
            </div>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${progressPercent === 100 ? "bg-white" : "bg-[#ef436b]"}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, sectionIndex) => {
        const Icon = iconMap[section.icon] || List;
        const bgClass = getBackground(sectionIndex) === "alt" ? "bg-[#f5f5f5]" : "bg-white";

        const sectionCompleted = section.items.filter((_, itemIndex) =>
          checkedItems[`${sectionIndex}-${itemIndex}`]
        ).length;

        return (
          <section key={section.title} className={`${bgClass} py-16`}>
            <div className="max-w-3xl mx-auto px-4">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${section.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: section.color }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground-dark">
                    {section.title}
                  </h2>
                  <p className="text-sm text-foreground">
                    {sectionCompleted} of {section.items.length} completed
                  </p>
                </div>
                {sectionCompleted === section.items.length ? (
                  <div className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium">
                    Complete
                  </div>
                ) : (
                  <button
                    onClick={() => handleCheckAllSection(sectionIndex, section.items.length)}
                    className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    Check all
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <ChecklistItem
                    key={itemIndex}
                    id={`${sectionIndex}-${itemIndex}`}
                    label={item}
                    color={section.color}
                    checked={checkedItems[`${sectionIndex}-${itemIndex}`] || false}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export function ChecklistProgress({ storageKey, totalItems }: { storageKey: string; totalItems: number }) {
  const [completedItems, setCompletedItems] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setCompletedItems(Object.values(parsed).filter(Boolean).length);
    }
    setMounted(true);
  }, [storageKey]);

  if (!mounted) {
    return (
      <span className="px-3 py-1 bg-[#ef436b]/10 text-[#ef436b] rounded-full font-medium">
        {totalItems} items
      </span>
    );
  }

  return (
    <span className="px-3 py-1 bg-[#ef436b]/10 text-[#ef436b] rounded-full font-medium">
      {completedItems}/{totalItems} completed
    </span>
  );
}
