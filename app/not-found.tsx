import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <AlertCircle className="mx-auto h-24 w-24 text-cyan-600 mb-6" />
          <h1 className="text-4xl font-bold text-cyan-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            {`Oops! The page you're looking for doesn't exist. It might have been moved or deleted.`}
          </p>
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
