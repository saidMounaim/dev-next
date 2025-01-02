import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-cyan-600 to-cyan-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Discover Your Next
              <span className="block text-cyan-300">Developer Opportunity</span>
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Connect with top tech companies and start your journey towards
              your dream job in the world of development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-cyan-100"
              >
                Explore Jobs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-transparent hover:text-cyan-500"
              >
                Post a Job
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-[300px] lg:h-[400px] opacity-70">
              <Image
                src="/hero-image.webp?height=400&width=600"
                alt="Developer Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
