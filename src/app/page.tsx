import HeroSlider from "~/components/hero-slider";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center bg-black">
      <div className="h-full flex items-center justify-center">
        <HeroSlider />
      </div>
    </main>
  );
}
