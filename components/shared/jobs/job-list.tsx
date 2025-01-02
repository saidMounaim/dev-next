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
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    createdAt: "1 day ago",
  },
  {
    id: "5",
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "London, UK",
    type: "Part-time",
    createdAt: "4 days ago",
  },
  {
    id: "6",
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Berlin, Germany",
    type: "Full-time",
    createdAt: "1 week ago",
  },
];

export default function JobList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
