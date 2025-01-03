import { auth } from "@/auth";
import JobCard from "@/components/shared/jobs/job-card";
import { getJobsCurrentUserId } from "@/lib/actions/job.action";
import { redirect } from "next/navigation";

export default async function MyJobsPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  const jobs = await getJobsCurrentUserId();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">My Jobs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            approved={job.approved}
            session={session}
          />
        ))}
      </div>
    </main>
  );
}
