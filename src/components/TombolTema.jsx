"use client";

import { useEffect } from "react";

export default function TombolTema() {
  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function gantiTema() {
    const gelap = document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", gelap ? "gelap" : "terang");
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
    >
      Mode Gelap
    </button>
  );
}