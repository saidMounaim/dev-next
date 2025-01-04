import { Card, CardContent, CardFooter } from "@/components/ui/card";

const JobCardSkeleton = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-cyan-200 overflow-hidden">
      <div className="bg-cyan-600 h-2" />
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
      </CardFooter>
    </Card>
  );
};

export default JobCardSkeleton;
