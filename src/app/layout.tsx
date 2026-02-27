import Link from "next/link";
import { CircleHelp, User } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { headers } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale =
    headers().get("x-next-intl-locale") ||
    headers().get("accept-language")?.split(",")[0] ||
    "en-US";

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="flex items-center px-8 py-4 border-b border-gray-800">
        
        <Link href="/" className="text-xl font-bold tracking-wide">
          Kyber Interactive
        </Link>

        <div className="flex items-center gap-8 ml-auto">
          
          <LanguageSwitcher />

          <Link
            href="/support"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <CircleHelp size={18} />
            Support
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <User size={18} />
              Account
            </button>

            <div className="absolute right-0 mt-2 hidden group-hover:block bg-gray-900 border border-gray-800 rounded-md shadow-lg w-40">
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Register
              </Link>
            </div>
          </div>

        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}