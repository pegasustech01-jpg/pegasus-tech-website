import { navLinks } from "../data";
import { Logo } from "./Logo";
import { InstagramIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-cyan-400/10">
      <div className="container-pg flex flex-col gap-8 px-5 py-10 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/pegasus_tech019/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Pegasus Tech on Instagram"
            className="icon-tile hover:border-cyan-300/50"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Pegasus Tech. All rights reserved.
      </div>
    </footer>
  );
}
