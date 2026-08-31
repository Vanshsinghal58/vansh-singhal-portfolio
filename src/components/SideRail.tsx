import { useEffect, useState } from "react";
import { Home, User, Code2, FolderGit2, GraduationCap, Mail } from "lucide-react";

const items = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Contact", Icon: Mail },
];

export function SideRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-3 top-1/2 z-50 -translate-y-1/2 md:left-6"
    >
      <ul className="panel flex flex-col gap-1 rounded-full p-2">
        {items.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={label}
              aria-current={active === id ? "true" : undefined}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                active === id
                  ? "bg-primary/20 text-neon neon-ring"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md border border-border bg-surface-2 px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
