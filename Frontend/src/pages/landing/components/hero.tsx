import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardScreenshot from "./dashboard-screenshot.png"; // Import the image
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Optimize Your Store Placement
          <br />
          with Heatmap Analytics
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Leverage advanced heatmap visualization to analyze order density, delivery delays, and population demographics. Identify underserved areas and make data-driven decisions for new store locations.
        </p>
      </div>
      <div className="flex gap-4">
        <Link to="/dashboard">
        <Button size="lg">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        </Link>
        
      </div>
      <div className="mt-8 w-full">
        <div className="rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Explore Our Heatmap</h2>
          <img src={dashboardScreenshot} alt="Dashboard Screenshot" className="w-[60%] mx-auto h-auto rounded-lg shadow-lg block" />
        </div>
      </div>
    </section>
  );
}