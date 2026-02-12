import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Ambient background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -left-48 -top-56 h-[620px] w-[620px] rounded-full blur-[60px] opacity-60"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #7C3AED, transparent 60%)",
            }}
          />
          <div
            className="absolute -right-56 -bottom-60 h-[620px] w-[620px] rounded-full blur-[60px] opacity-60"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #06B6D4, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at 30% 20%, black 0%, transparent 60%)",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
