// src/app/page.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Redirect to login page by default
  }, [router]);

  return null; // No UI needed as it will redirect
}
