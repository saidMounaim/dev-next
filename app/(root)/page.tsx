import FeaturedJobs from "@/components/shared/jobs/featured-jobs";
import Hero from "@/components/shared/hero";
import CTA from "@/components/shared/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <CTA />
    </>
  );
}
