import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.9-.7-2.6-1.8-2.6-1.15 0-1.9.85-1.9 2.6V20H11.3V9.5h2.45v1.15c.55-.85 1.55-1.4 2.85-1.4 2.2 0 3.4 1.4 3.4 4.3V20Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.8 10.5 20.4 3h-1.6l-5.7 6.5L8.6 3H3.5l7 10.1L3.5 21h1.6l6.1-7 5.2 7h5.1L13.8 10.5Zm-2.1 2.5-.7-1-5.7-8h2.5l4.6 6.6.7 1 6 8.6h-2.5l-4.9-7.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
