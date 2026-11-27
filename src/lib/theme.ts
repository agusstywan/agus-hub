export const THEME_STORAGE_KEY = "mode";

// Dijalankan sebelum halaman tampil (lihat __root.tsx) supaya tidak ada kedipan tema.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-mode",t)}catch(e){document.documentElement.setAttribute("data-mode","dark")}})();`;
