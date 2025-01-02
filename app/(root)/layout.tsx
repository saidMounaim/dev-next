import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-cyan-50">
      <Header />
      <main>{children}</main>
    </div>
  );
}
