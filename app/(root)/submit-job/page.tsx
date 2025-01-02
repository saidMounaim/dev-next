import { auth } from "@/auth";
import { JobSubmissionForm } from "@/components/shared/forms/job-submission-form";
import { redirect } from "next/navigation";

export default async function SubmitJobPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12">
      <main className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-cyan-800 mb-8">
            Submit a New Job
          </h1>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <JobSubmissionForm />
          </div>
        </div>
      </main>
    </div>
  );
}
