import TopBar from "@/components/Layout/TopBar";
import "./globals.css";
import SideBar from "@/components/Layout/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-white">
          {/* Sidebar */}
          <SideBar />

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <TopBar />

            {/* Content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
