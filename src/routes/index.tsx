import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import type { CSSProperties } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/config/profile";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Agus Setiawan | Apparel Producer, Website Creator & Creative Agency" },
      {
        name: "description",
        content:
          "Discover Agus Setiawan's digital ecosystem. Explore Inclowd Apparel, Vektora Digital, digital products, and social media platforms.",
      },
      {
        property: "og:title",
        content: "Agus Setiawan | Apparel Producer, Website Creator & Creative Agency",
      },
      {
        property: "og:description",
        content:
          "Discover Agus Setiawan's digital ecosystem. Explore Inclowd Apparel, Vektora Digital, digital products, and social media platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const socialIcons = {
    instagram: InstagramMark,
    tiktok: TikTokMark,
    whatsapp: WhatsAppMark,
  };

  return (
    <main className="link-page relative flex min-h-screen flex-col items-center px-5 pb-8 pt-12 sm:px-8 sm:pt-16">
      <ThemeToggle />

      <div className="relative z-10 mx-auto flex w-full max-w-[560px] flex-1 flex-col items-center">
        <header className="profile-intro animate-enter flex w-full flex-col items-center text-center">
          <div className="profile-portrait" aria-label="Agus Setiawan profile photo">
            {profile.avatarImage ? (
              <img
                className="h-full w-full rounded-full object-cover"
                src={profile.avatarImage}
                alt="Agus Setiawan"
              />
            ) : (
              <span className="profile-portrait__initials" aria-hidden="true">
                AS
              </span>
            )}
          </div>
          <p className="profile-kicker mt-6">PERSONAL DIGITAL ECOSYSTEM</p>
          <h1 className="profile-name mt-3">{profile.name}</h1>
          <p className="profile-tagline mt-3">{profile.tagline}</p>
          <p className="profile-bio mt-5">{profile.bio}</p>
          <div className="profile-divider mt-7" aria-hidden="true">
            <span />
          </div>
        </header>

        <section className="mt-9 w-full" aria-label="Agus Setiawan's websites">
          <div className="flex flex-col gap-3">
            {profile.websites.map((site, index) => {
              return (
                <a
                  className="website-link animate-enter group"
                  href={site.href}
                  key={site.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--stagger": `${index * 110}ms` } as CSSProperties}
                >
                  <span className="website-link__copy">
                    <span className="website-link__category">{site.category}</span>
                    <span className="website-link__title">{site.title}</span>
                    <span className="website-link__description">{site.description}</span>
                  </span>
                  <span className="website-link__logo">
                    <img
                      src={site.logo}
                      alt={`Logo ${site.title}`}
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section
          className="animate-enter mt-10 flex w-full flex-col items-center text-center"
          aria-labelledby="connect-heading"
        >
          <p className="connect-eyebrow">A LITTLE MORE, A LITTLE CLOSER</p>
          <h2 className="connect-heading mt-2" id="connect-heading">
            LET’S CONNECT
          </h2>
          <p className="connect-subtitle mt-2">Find me on social media or get in touch.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  className="social-link"
                  href={social.href}
                  key={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  title={social.platform}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </section>

        <a className="scroll-cue mt-8" href="#footer" aria-label="Scroll to footer">
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>

      <footer
        className="relative z-10 mt-4 flex w-full max-w-[560px] flex-col items-center gap-2 text-center"
        id="footer"
      >
        <p className="footer-made">MADE WITH CREATIVITY.</p>
        <p className="footer-copyright">© 2026 Agus Setiawan. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="social-mark__dot" cx="17.5" cy="6.8" r="1" />
    </svg>
  );
}

function TikTokMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.2 4v10.3a4.3 4.3 0 1 1-3.8-4.27M14.2 4c.45 2.3 1.83 3.8 4.3 4.23" />
    </svg>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 11.65a8 8 0 0 1-11.83 7.03L4 20l1.34-4.01A8 8 0 1 1 20 11.65Z" />
      <path d="M9 8.8c.17-.4.36-.42.57-.43h.48c.14 0 .35.05.43.32l.68 1.65c.08.2.06.36-.07.52l-.49.58c-.15.16-.1.32-.01.46.4.66 1 1.23 1.68 1.6.2.1.35.1.49-.07l.68-.8c.16-.19.33-.2.54-.12l1.56.75c.23.11.31.18.32.31.03.3-.08.9-.61 1.38-.4.37-1.04.57-1.7.45-.5-.1-1.15-.32-1.98-.78-1.23-.67-2.12-1.8-2.38-2.18-.27-.38-.64-1.02-.66-1.72-.02-.68.26-1.39.47-1.92Z" />
    </svg>
  );
}
