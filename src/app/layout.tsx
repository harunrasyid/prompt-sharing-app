import "@styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@components/Navbar/Navbar";
import Provider from "@components/Provider/Provider";

export const metadata: Metadata = {
  title: "PromptNest",
  description: "Share your simple and impactful AI prompt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
}
