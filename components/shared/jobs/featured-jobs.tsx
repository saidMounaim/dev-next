import { getFeaturedJobs } from "@/lib/actions/job.action";
import JobCard from "./job-card";
import { auth } from "@/auth";
import { Suspense } from "react";
import JobCardSkeleton from "../skeletons/job-card-skeleton";

export default async function FeaturedJobs() {
  const session = await auth();
  const jobs = await getFeaturedJobs();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-800">
          Featured Jobs
        </h2>
        {jobs.length === 0 && (
          <h3 className="text-1xl font-medium text-cyan-800 mt-4">
            No job available yet.
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
