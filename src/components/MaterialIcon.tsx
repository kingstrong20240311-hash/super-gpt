import type { ReactNode, SVGProps } from "react";

type MaterialIconName =
  | "auto_awesome"
  | "notifications"
  | "grid_view"
  | "settings"
  | "person"
  | "translate"
  | "check_circle"
  | "forum"
  | "psychology"
  | "cloud_download"
  | "vpn_key"
  | "rocket_launch"
  | "check"
  | "verified"
  | "location_on"
  | "schedule"
  | "contact_support"
  | "send"
  | "bolt"
  | "security"
  | "gavel"
  | "update"
  | "history"
  | "arrow_upward";

type MaterialIconProps = {
  name: MaterialIconName;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "children">;

const ICON_PATHS: Record<MaterialIconName, ReactNode> = {
  auto_awesome: (
    <>
      <path d="M12 2l1.76 4.24L18 8l-4.24 1.76L12 14l-1.76-4.24L6 8l4.24-1.76L12 2z" />
      <path d="M5 13l.9 2.1L8 16l-2.1.9L5 19l-.9-2.1L2 16l2.1-.9L5 13z" />
      <path d="M19 13l.9 2.1L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.9L19 13z" />
    </>
  ),
  notifications: <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" />,
  grid_view: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  settings: <path d="M19.14 12.94a7.8 7.8 0 0 0 .05-.94 7.8 7.8 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.3 7.3 0 0 0-1.63-.94L14.4 2.8a.5.5 0 0 0-.49-.4h-3.82a.5.5 0 0 0-.49.4l-.36 2.52a7.3 7.3 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.8 7.8 0 0 0-.05.94c0 .32.02.63.05.94L2.82 14.52a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.39 1.05.7 1.63.94l.36 2.52c.04.24.25.4.49.4h3.82c.24 0 .45-.16.49-.4l.36-2.52c.58-.24 1.13-.55 1.63-.94l2.39.96c.22.09.48 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />,
  person: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.01-8 4.5V21h16v-2.5c0-2.49-3.58-4.5-8-4.5z" />,
  translate: <path d="M12.87 15.07 10.33 8.5h1.65l1.72 4.77 1.73-4.77h1.62l-2.54 6.57h-1.64zM5 5h6V3H3v8h2V8h4V6H5V5zm14 14h-4v2h6v-6h-2v4zM8 15H6v4H2v2h6v-6z" />,
  check_circle: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.41-1.41L11 13.17l5.59-5.58L18 9l-7 7z" />,
  forum: <path d="M21 6h-2v9H7v2a1 1 0 0 0 1 1h9l4 4V7a1 1 0 0 0-1-1zM17 2H3a1 1 0 0 0-1 1v14l4-4h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />,
  psychology: <path d="M13 3a6 6 0 0 0-6 6v2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a3 3 0 0 0 3 3h2v-6H9V9a4 4 0 1 1 8 0v1h2V9a6 6 0 0 0-6-6z" />,
  cloud_download: <path d="M19.35 10.04A7 7 0 0 0 5.6 8.65 5 5 0 0 0 6 18h4v-5H8l4-4 4 4h-2v5h5a4 4 0 0 0 .35-7.96z" />,
  vpn_key: <path d="M7 14a5 5 0 1 1 4.9-6H22v4h-2v2h-2v2h-3.1A5 5 0 0 1 7 14zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  rocket_launch: <path d="M14 3c3.5 0 7 3.5 7 7-2.5.5-4.5 1.5-6.5 3.5S11.5 17 11 19c-3.5 0-7-3.5-7-7 2.5-.5 4.5-1.5 6.5-3.5S13 3.5 14 3zm-8 15 3-3 1 1-3 3H6v-1zm9-10 3-3 1 1-3 3-1-1z" />,
  check: <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />,
  verified: <path d="M12 1.5 15 3l3.35-.15.15 3.35L20 9l-1.5 3 1.5 3-1.5 2.8-.15 3.35L15 21l-3 1.5L9 21l-3.35.15-.15-3.35L4 15l1.5-3L4 9l1.5-2.8.15-3.35L9 3l3-1.5zm-1 15 6-6-1.4-1.4-4.6 4.6-2.6-2.6L7 12.5l4 4z" />,
  location_on: <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />,
  schedule: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5h-2v6l5.25 3.15 1-1.65-4.25-2.5V7z" />,
  contact_support: <path d="M12 2a10 10 0 0 0-10 10v4h4a2 2 0 0 0 2-2v-4h3V8H8.13A4 4 0 1 1 16 10h-3v2h3a2 2 0 0 0 2 2v2h2v-4A10 10 0 0 0 12 2zm-1 13h2v2h-2v-2zm1-9a3 3 0 0 0-3 3h2a1 1 0 1 1 2 0c0 1-1.5 1.4-1.5 3h2c0-.8 1.5-1.3 1.5-3a3 3 0 0 0-3-3z" />,
  send: <path d="M2 21 23 12 2 3v7l15 2-15 2v7z" />,
  bolt: <path d="M11 21h-1l1-7H7.5a1 1 0 0 1-.8-1.6l5.8-8.1A1 1 0 0 1 14.3 5L13 11h3.5a1 1 0 0 1 .8 1.6l-5.5 7.8A1 1 0 0 1 11 21z" />,
  security: <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm0 10.99h6c-.46 3.59-2.86 6.79-6 7.94-3.14-1.15-5.54-4.35-6-7.94h6V4.26L12 4v8.99z" />,
  gavel: <path d="M1 21h12v2H1v-2zm4.24-3.76 5.66-5.66 1.41 1.41-5.66 5.66-1.41-1.41zM11.6 4.59l2.83-2.83 7.78 7.78-2.83 2.83-7.78-7.78zM8.07 8.12 10.9 5.3l7.78 7.78-2.83 2.83-7.78-7.78z" />,
  update: <path d="M21 12a9 9 0 1 1-2.64-6.36L16 8h6V2l-2.23 2.23A11 11 0 1 0 23 12h-2z" />,
  history: <path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6a7 7 0 1 1 2.05 4.95l-1.42 1.42A9 9 0 1 0 13 3zm-1 5h2v5l4.25 2.52-.75 1.23L12 14V8z" />,
  arrow_upward: <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />,
};

export default function MaterialIcon({ name, className = "", ...rest }: MaterialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] align-middle ${className}`.trim()}
      {...rest}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
