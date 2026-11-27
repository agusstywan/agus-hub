import { describe, expect, it } from "vitest";
import { profile } from "@/config/profile";

describe("personal link destinations", () => {
  it("keeps exactly the four requested business websites", () => {
    expect(profile.websites.map(({ href }) => href)).toEqual([
      "https://gawekaos.my.id",
      "https://vektoradigital.my.id",
      "https://lynk.id/aguss",
      "https://jogjasnack.netlify.app",
    ]);
  });

  it("keeps exactly the three requested social URLs", () => {
    expect(profile.socials.map(({ href }) => href)).toEqual([
      "https://www.instagram.com/agus.stywan?dlrf=MWJ5bDIxczlqbXN6bQ==",
      "https://tiktok.com/aagus.stywan",
      "https://wa.me/6285643672009",
    ]);
  });

  it("gives every website a logo image", () => {
    for (const site of profile.websites) {
      expect(site.logo).toMatch(/^\/logos\/.+\.webp$/);
    }
  });
});
