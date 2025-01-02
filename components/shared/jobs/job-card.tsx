import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Clock } from "lucide-react";
import { timeAgo } from "@/lib/utils";
import { JobProps } from "@/lib/types";
import Link from "next/link";

const JobCard = ({ job }: { job: JobProps }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-cyan-200 overflow-hidden">
      <div className="bg-cyan-600 h-2" />
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-2 text-cyan-800">
          {job.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Building2 className="w-4 h-4 mr-2 text-cyan-600" />
          <span>{job.companyName}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2 text-cyan-600" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="w-4 h-4 mr-2 text-cyan-600" />
          <span>{timeAgo(job.createdAt)}</span>
        </div>
        <Badge
          variant="secondary"
          className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
        >
          {job.type}
        </Badge>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <Button
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
          asChild
        >
          <Link href={`/job/${job.slug}`}>More details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
