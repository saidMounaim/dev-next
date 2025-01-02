import { getAllApprovedJobs } from "@/lib/actions/job.action";
import JobCard from "./job-card";

export default async function JobList() {
  const jobs = await getAllApprovedJobs();
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
