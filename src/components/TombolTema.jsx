"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener("tema-berubah", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("tema-berubah", callback);
  };
}

export default function TombolTema() {
  const gelap = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem("tema") === "gelap", // nilai di browser (client)
    () => false // nilai awal di server (SSR) agar tidak hydration mismatch
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", gelap);
  }, [gelap]);

  function gantiTema() {
    const statusBaru = !gelap;
    localStorage.setItem("tema", statusBaru ? "gelap" : "terang");
    window.dispatchEvent(new Event("tema-berubah"));
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}