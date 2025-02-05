"use client"; // Ensure it's a client component
import { usePathname } from "next/navigation";
import "@/app/globals.css";
import Sidebar from "@/components/common/Sidebar"; // Import Sidebar
import Header from "@/components/common/Header"; // Import Header

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Skip rendering the layout for signup and login
  if (pathname === "/signup" || pathname === "/login") {
    return <>{children}</>; // Only render the children, no layout for signup/login
  }

  // Default layout for other routes (non-signup/login)
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">
          {/* Sidebar for dashboard and other pages */}
          {pathname !== "/signup" && pathname !== "/login" && <Sidebar />}

          {/* Main content area */}
          <div className="flex-1 p-4">
            {/* Header for dashboard and other pages */}
            {pathname !== "/signup" && pathname !== "/login" && <Header />}
            {/* Main content (children) */}
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
