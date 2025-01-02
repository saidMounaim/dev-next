import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Dev Next
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/jobs" className="hover:text-cyan-200">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="secondary" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </header>
  );
}
