import { getFeaturedJobs } from "@/lib/actions/job.action";
import JobCard from "./job-card";

export default async function FeaturedJobs() {
  const jobs = await getFeaturedJobs();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-800">
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
