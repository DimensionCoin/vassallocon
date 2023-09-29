import Insta from "@/components/cards/Insta";
import MainPic from "@/components/cards/MainPic";
import ServiceCard from "@/components/cards/ServiceCard";
import Testimonials from "@/components/cards/Testimonials";
import TypeWriter from "@/components/cards/TypeWriter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <MainPic />
      <TypeWriter/>
      <div className="flex flex-row justify-center  mb-24">
        <ServiceCard />
      </div>
      <div>
        <Insta />
      </div>
      <div>
        <Testimonials />
      </div>
    </main>
  );
}
