import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getJobDetailsBySlug } from "@/lib/actions/job.action";
import {
  BriefcaseIcon,
  Building2Icon,
  CalendarIcon,
  DollarSign,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const job = await getJobDetailsBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cyan-50 py-12">
      <main className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-cyan-600 p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg">
                  {job.companyLogoUrl && (
                    <Image
                      src={`${job.companyLogoUrl}`}
                      alt={`${job.companyName} logo`}
                      width={64}
                      height={64}
                      className="rounded"
                    />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {job.title}
                  </h1>
                  <p className="text-cyan-200">{job.companyName}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={"secondary"}
                  className="bg-cyan-100 text-cyan-800 py-2"
                >
                  {job.type}
                </Badge>
                <Badge
                  variant={"secondary"}
                  className="bg-cyan-100 text-cyan-800 py-2"
                >
                  {job.locationType}
                </Badge>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-cyan-800 mb-2">
                    Job Description
                  </h2>
                  <p className="text-gray-600">{job.description}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-cyan-800 mb-2">
                    How to Apply
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Please apply through our careers page or send your resume to
                    the email address below.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {job.applicationUrl && (
                      <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                        <a
                          href={job.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply on Company Website
                        </a>
                      </Button>
                    )}
                    {job.applicationEmail && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                      >
                        <a href={`mailto:${job.applicationEmail}`}>
                          Send Application Email
                        </a>
                      </Button>
                    )}
                  </div>
                </section>
              </div>

              <div className="md:col-span-1">
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-cyan-800 mb-4">
                    Job Details
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <DollarSign className="w-5 h-5 mr-2 text-cyan-600" />
                      Salary: ${job.salary.toLocaleString()} per year
                    </li>
                    <li className="flex items-center text-gray-600">
                      <MapPinIcon className="w-5 h-5 mr-2 text-cyan-600" />
                      Location: {job.location}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <BriefcaseIcon className="w-5 h-5 mr-2 text-cyan-600" />
                      Job Type: {job.type}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Building2Icon className="w-5 h-5 mr-2 text-cyan-600" />
                      Work Setting: {job.locationType}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CalendarIcon className="w-5 h-5 mr-2 text-cyan-600" />
                      Posted on: {job.createdAt.toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
