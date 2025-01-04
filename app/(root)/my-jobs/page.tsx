import { auth } from "@/auth";
import JobCard from "@/components/shared/jobs/job-card";
import JobCardSkeleton from "@/components/shared/skeletons/job-card-skeleton";
import { getJobsCurrentUserId } from "@/lib/actions/job.action";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function MyJobsPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  const jobs = await getJobsCurrentUserId();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">My Jobs</h1>
      {jobs.length === 0 && (
        <h3 className="text-1xl font-medium text-cyan-800 mt-4">
          No job available yet.
        </h3>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<JobCardSkeleton />}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              approved={job.approved}
              session={session}
            />
          ))}
        </Suspense>
      </div>
    </main>
  );
}
