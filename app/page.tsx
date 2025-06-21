import Header from "./components/Header";
import Hero from "./components/Hero";
import WebDevelopment from "./components/WebDevelopment";
import TrafficManagement from "./components/TrefficManagement";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="bg-slate-100 h-screen w-full">
        <div className="h-screen w-full max-w-[1200px] m-auto px-4 pt-6 pb-3">
          <Header />
          <Hero />
        </div>
      </section>

      <section>
        <WebDevelopment />
      </section>
      <section>
        <TrafficManagement />
      </section>
      <section>
        <SocialMedia />
      </section>
      <Footer />
    </main>
  );
}
