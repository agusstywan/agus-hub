export const profile = {
  name: "Agus Setiawan",
  tagline: "Apparel Producer | Website Creator | Creative Agency",
  bio: "Make Your Masterpiece.",
  avatarImage: "/profile.jpg" as string | null,
  websites: [
    {
      title: "Inclowd Apparel",
      category: "APPAREL PRODUCER",
      description: "Specialis Kaos & Jersey Fullprint",
      href: "https://gawekaos.my.id",
      logo: "/logos/apparel.webp",
    },
    {
      title: "Vektora Digital",
      category: "CREATIVE AGENCY",
      description: "Creative Agency untuk UMKM",
      href: "https://vektoradigital.my.id",
      logo: "/logos/vektora.webp",
    },
    {
      title: "Product Digital",
      category: "DIGITAL PRODUCTS",
      description: "Kumpulan Product Digital Siap Pakai",
      href: "https://lynk.id/aguss",
      logo: "/logos/digital.webp",
    },
    {
      title: "Snack & Oleh-oleh",
      category: "FOOD & GIFTS",
      description: "Camilan dan Buah Tangan Khas, Siap Kirim",
      href: "https://jogjasnack.netlify.app",
      logo: "/logos/snack.webp",
    },
  ],
  socials: [
    {
      platform: "Instagram",
      href: "https://www.instagram.com/agus.stywan?dlrf=MWJ5bDIxczlqbXN6bQ==",
      icon: "instagram",
    },
    {
      platform: "TikTok",
      href: "https://tiktok.com/aagus.stywan",
      icon: "tiktok",
    },
    {
      platform: "WhatsApp",
      href: "https://wa.me/6285643672009",
      icon: "whatsapp",
    },
  ],
} as const;
