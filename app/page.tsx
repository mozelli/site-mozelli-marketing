import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="bg-slate-100 h-screen w-full">
        <div className="h-screen w-full max-w-[1200px] m-auto px-4 pt-6 pb-3">
          <Header />
          <Hero />
        </div>
      </section>
      <section className="h-screen">
        <Solutions />
      </section>
      <section>
        <h1>Social Media</h1>
      </section>
    </main>
  );
}
