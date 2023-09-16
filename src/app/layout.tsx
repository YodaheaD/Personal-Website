import { fontSans } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //<NavBar>1</NavBar>

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-gradient-to-r from-emerald-300 to-emerald-100 ...">
          <div className="flex-1">
            
            {children}
          </div>
        </div>
        <footer className="border-t bg-black text-white font-bold border-gray-300 py-4 rounded-t-xl text-center text-sm">
          © Copyright {new Date().getFullYear()} of nobody.
        </footer>{" "}
      </body>
    </html>
  );
}
