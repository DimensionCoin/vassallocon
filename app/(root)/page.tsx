import Insta from "@/components/cards/Insta";
import MainPic from "@/components/cards/MainPic";
import ServiceCard from "@/components/cards/ServiceCard";
import Testimonials from "@/components/cards/Testimonials";
import TypeWriter from "@/components/cards/TypeWriter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <header>
        <h1 className="sr-only">Vassallo Construction</h1>
        <MainPic />
      </header>
      <section aria-label="Introduction">
        <TypeWriter />
      </section>
      <section
        aria-label="Services"
        className="flex flex-row justify-center mb-24"
      >
        <ServiceCard />
      </section>
      <section aria-label="Instagram Feed">
        <Insta />
      </section>
      <section aria-label="Testimonials">
        <Testimonials />
      </section>
    </main>
  );
}
