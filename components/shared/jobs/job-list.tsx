import { getAllApprovedJobs } from "@/lib/actions/job.action";
import JobCard from "./job-card";
import { auth } from "@/auth";
import { Suspense } from "react";
import JobCardSkeleton from "../skeletons/job-card-skeleton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function JobList({ where }: any) {
  const session = await auth();
  const jobs = await getAllApprovedJobs(where);
  return (
    <>
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
              session={session!}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
