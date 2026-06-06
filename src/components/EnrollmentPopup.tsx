import { useEffect, useState } from "react";
import { BadgeCheck, X } from "lucide-react";

const ENROLLMENTS = [
  { name: "Aditya R.", city: "Bengaluru" },
  { name: "Priya S.", city: "Mumbai" },
  { name: "Rohan M.", city: "Pune" },
  { name: "Sneha K.", city: "Hyderabad" },
  { name: "Karan V.", city: "Delhi" },
  { name: "Ananya N.", city: "Kochi" },
  { name: "Vikram J.", city: "Jaipur" },
  { name: "Neha P.", city: "Ahmedabad" },
  { name: "Arjun D.", city: "Chennai" },
  { name: "Ishita G.", city: "Kolkata" },
  { name: "Manav T.", city: "Surat" },
  { name: "Diya R.", city: "Indore" },
  { name: "Aryan S.", city: "Lucknow" },
  { name: "Riya M.", city: "Chandigarh" },
];

const MINUTES = [1, 2, 3, 4, 5, 6, 7, 8];

export function EnrollmentPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let i = 0;
    const cycle = () => {
      setIndex(i % ENROLLMENTS.length);
      setVisible(true);
      i++;
      setTimeout(() => setVisible(false), 4000);
    };
    const initial = setTimeout(cycle, 1500);
    const interval = setInterval(cycle, 7000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const person = ENROLLMENTS[index];
  const minsAgo = MINUTES[index % MINUTES.length];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 bg-card border border-border rounded-2xl shadow-2xl pl-3 pr-8 py-3 max-w-xs relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/15 shrink-0">
          <BadgeCheck className="size-5 text-lime" />
        </div>
        <div className="text-sm">
          <p className="font-semibold text-foreground leading-tight">
            {person.name} from {person.city}
          </p>
          <p className="text-xs text-muted-foreground leading-tight mt-0.5">
            just enrolled · <span className="text-lime">Verified ✓</span>
          </p>
          <p className="text-[10px] text-muted-foreground/70 mt-0.5 uppercase tracking-wider">
            {minsAgo} min ago
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1.5 right-1.5 text-muted-foreground hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
