import JobsFilters from "@/components/shared/jobs/job-filters";
import JobList from "@/components/shared/jobs/job-list";

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">
        Find Your Next Developer Job
      </h1>
      <JobsFilters />
      <JobList />
    </main>
  );
}
