import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dev Next",
  description:
    "Dev Next is a platform for posting and applying to developer jobs, connecting talent with opportunities efficiently.",
};

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            classNames: {
              error: "bg-red-500",
              info: "bg-blue-400",
              success: "bg-green-400",
              warning: "bg-orange-400",
              toast: "bg-blue-400",
              title: "text-white",
              description: "text-white",
              actionButton: "bg-zinc-400",
              cancelButton: "bg-orange-400",
              closeButton: "bg-lime-400",
              icon: "text-white",
            },
          }}
        />
      </body>
    </html>
  );
}
