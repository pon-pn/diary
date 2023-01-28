import Head from "next/head";
import Link from "next/link";
import { type ReactNode } from "react";

const siteTitle = "日々のログ";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="relative bg-gradient-to-r backdrop-blur border-b lg:border-slate md:mb-8">
        <div className="max-w-6xl mx-auto px-5">
          <nav className="flex items-center justify-between md:px-12 px-2 py-1">
            <div>
              <h1 className="text-white">
                {siteTitle}
              </h1>
            </div>
            <div>
              <Link href="https://github.com/pon-pn/diary/issues">
                <a className="text-white text-sm"><svg viewBox="0 0 16 16" className="w-5 h-5 fill-white" daria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="p-8">
        <ul className="grid gap-3 md:grid-cols-5">
          {children}
        </ul>
      </main>
      <footer className="container mx-auto max-w-2xl p-4 text-sm">
        <nav>
          <ul className="flex flex-row gap-6 justify-center">
            <li>
              <Link href="/">
                <a className="text-gray-900 visited:text-gray-900 dark:text-gray-300 dark:visited:text-gray-300">
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
