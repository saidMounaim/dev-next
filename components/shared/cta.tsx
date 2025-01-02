import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-cyan-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Take the Next Step?
        </h2>
        <p className="text-xl mb-8">
          Join thousands of developers who have found their dream job through
          Dev Next
        </p>
        <Button
          size="lg"
          className="bg-white text-cyan-600 hover:bg-cyan-100"
          asChild
        >
          <Link href="/sign-up">Create Your Profile</Link>
        </Button>
      </div>
    </section>
  );
}
