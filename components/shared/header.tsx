import Link from "next/link";
import UserButton from "./user-button";

export default function Header() {
  return (
    <header className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Dev Next
        </Link>
        <UserButton />
      </div>
    </header>
  );
}
