export type NavigationLink = {
  href: string;
  label: string;
};

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Members" },
  { href: "/research", label: "Research" },
  { href: "/join", label: "Join" },
];
