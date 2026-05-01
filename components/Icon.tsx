import type { IconName } from "@/lib/site";

type Props = { name: IconName; size?: number; className?: string };

export function Icon({ name, size = 28, className }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "switchboard":
      return (
        <svg {...props}>
          <rect x="5" y="5" width="22" height="22" rx="2" />
          <line x1="11" y1="10" x2="11" y2="14" />
          <line x1="16" y1="10" x2="16" y2="14" />
          <line x1="21" y1="10" x2="21" y2="14" />
          <line x1="11" y1="18" x2="11" y2="22" />
          <line x1="16" y1="18" x2="16" y2="22" />
          <line x1="21" y1="18" x2="21" y2="22" />
        </svg>
      );
    case "temp":
      return (
        <svg {...props}>
          <path d="M8 6h12l-2 6h4l-10 14 2-10H8z" />
        </svg>
      );
    case "light":
      return (
        <svg {...props}>
          <path d="M16 4a8 8 0 0 0-5 14.3V22h10v-3.7A8 8 0 0 0 16 4z" />
          <line x1="13" y1="26" x2="19" y2="26" />
          <line x1="14" y1="29" x2="18" y2="29" />
        </svg>
      );
    case "power":
      return (
        <svg {...props}>
          <rect x="6" y="5" width="20" height="22" rx="2" />
          <circle cx="12" cy="14" r="1.5" />
          <circle cx="20" cy="14" r="1.5" />
          <path d="M11 20h10" />
        </svg>
      );
    case "fault":
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" />
          <path d="M16 9v8M16 21v.5" />
        </svg>
      );
    case "safety":
      return (
        <svg {...props}>
          <path d="M16 4l10 4v8c0 6-4 10-10 12-6-2-10-6-10-12V8z" />
          <path d="M11 16l3.5 3.5L21 13" />
        </svg>
      );
    case "ev":
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="13" rx="2" />
          <path d="M19 15h3a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2" />
          <path d="M9 8v3M15 8v3" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...props}>
          <path d="M18 4l-9 14h7l-2 10 9-14h-7z" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M9 5h4l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v4a2 2 0 0 1-2 2A20 20 0 0 1 7 7a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="4" y="7" width="24" height="18" rx="2" />
          <path d="M4 9l12 9 12-9" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" />
          <path d="M16 9v7l5 3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M16 4l10 4v8c0 6-4 10-10 12-6-2-10-6-10-12V8z" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <path
            d="M16 4l3.7 7.5 8.3 1.2-6 5.9 1.4 8.2L16 23l-7.4 3.8L10 18.6 4 12.7l8.3-1.2z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M6 16h20M20 10l6 6-6 6" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="5" y="5" width="22" height="22" rx="6" />
          <circle cx="16" cy="16" r="5" />
          <circle cx="22.5" cy="9.5" r="1" fill="currentColor" />
        </svg>
      );
  }
}
