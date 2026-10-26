import "./globals.css";
import { SiteNav } from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import TransitionProvider from "../components/TransitionProvider";

export const metadata = {
  title: "Joshua Pangilinan — Portfolio",
  description: "IT graduate · Web · Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          <SiteNav />
          <main className="page">{children}</main>
          <SiteFooter />
        </TransitionProvider>
      </body>
    </html>
  );
}