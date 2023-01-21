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
      <header className="container mx-auto max-w-2xl px-8 py-12">
        <nav>
          <p>
            <Link href="/">
              <a className="font-bold text-gray-900 visited:text-gray-900 dark:text-gray-300 dark:visited:text-gray-300">
                {siteTitle}
              </a>
            </Link>
          </p>
        </nav>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-5 gap-5">
          <li className="text-sky-500 dark:text-sky-400 cursor-pointer block rounded-lg shadow-md hover:bg-gray-100 shadow-lg max-w-2xl px-8 py-4 bg-white">
            <p>{children}</p>
          </li>
        </div>
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
