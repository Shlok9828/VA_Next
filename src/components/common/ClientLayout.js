"use client"; // Ensure this is a Client Component
import { usePathname } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  if (pathname === "/signup" || pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-12">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
