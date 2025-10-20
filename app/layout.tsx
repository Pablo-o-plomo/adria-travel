import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Adria Travel — туры, визы, отдых",
  description: "Туристическое агентство Adria Travel: подбор туров, визы, перелёты, отели. Бесплатная консультация.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.svg" alt="Adria Travel" className="h-8 w-8"/>
              <span className="font-semibold">Adria Travel</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/tours" className="hover:text-brand">Туры</Link>
              <Link href="/contact" className="hover:text-brand">Контакты</Link>
              <a href="tel:+7" className="px-3 py-1 rounded-md bg-brand text-white hover:opacity-90">Позвонить</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-12">
          <div className="container py-10 text-sm text-slate-500">
            © {new Date().getFullYear()} Adria Travel. Все права защищены.
          </div>
        </footer>
      </body>
    </html>
  );
}
