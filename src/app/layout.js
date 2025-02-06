import "@/app/globals.css";
import ClientLayout from "@/components/common/ClientLayout"; // Import Client Component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <ClientLayout>{children}</ClientLayout> {/* Use Client Component */}
      </body>
    </html>
  );
}
