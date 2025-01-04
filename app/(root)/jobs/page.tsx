import JobsFilters from "@/components/shared/jobs/job-filters";
import JobList from "@/components/shared/jobs/job-list";

interface JobsPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const currSearchParams = await searchParams;
  const search = currSearchParams.search || "";
  const locationType =
    currSearchParams.locationType == "all" ? "" : currSearchParams.locationType;
  const jobType =
    currSearchParams.jobType == "all" ? "" : currSearchParams.jobType;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = { approved: true };

  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  if (locationType) {
    where.OR = [
      { locationType: { contains: locationType, mode: "insensitive" } },
    ];
  }

  if (jobType) {
    where.OR = [{ type: { contains: jobType, mode: "insensitive" } }];
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">
        Find Your Next Developer Job
      </h1>
      <JobsFilters />
      <JobList where={where} />
    </main>
  );
}
