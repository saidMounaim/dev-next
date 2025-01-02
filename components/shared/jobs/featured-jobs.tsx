import JobCard from "./job-card";

const jobs = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    createdAt: "2 days ago",
  },
  {
    id: "2",
    title: "Node.js Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    type: "Contract",
    createdAt: "1 week ago",
  },
  {
    id: "3",
    title: "Full Stack JavaScript Developer",
    company: "WebSolutions",
    location: "San Francisco, CA",
    type: "Full-time",
    createdAt: "3 days ago",
  },
];

export default function FeaturedJobs() {
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
