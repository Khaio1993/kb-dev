import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProp } from "@/components/ValueProp";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ValueProp />
      <Projects />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
