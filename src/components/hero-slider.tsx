export default function HeroSlider() {
  return (
    <div className="w-screen h-screen bg-[#001111] flex items-center justify-center flex-col">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="h-full w-full relative">
          <div className="animate-pulse-slow absolute top-2/5 left-4/7 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-radial from-0% to-70% from-[#b94400] to-transparent scale-200 opacity-20" />
          <div className="animate-pulse-super-slow absolute bottom-2/5 right-4/7 translate-x-1/2 translate-y-1/2 h-80 w-80 bg-radial from-0% to-70% from-[#003c3c] to-transparent scale-200 opacity-60" />
        </div>
      </div>
      <div className="z-10 w-full max-w-5xl flex-row flex">
        <div className="flex-col flex items-start justify-center">
          <h1 className="text-2xl">
            <span className="text-[#6c0b85]">&lt; lo</span>
            <span className="text-[#0dd4b3]">go /&gt;</span>
          </h1>
          <span className="text-foreground/50 mt-2">subtitle here</span>
          <p className="mt-4">paragraph here</p>
          <div className="flex-row flex gap-2">
            badges here
          </div>
          <div className="flex-row flex gap-2">
            buttons here
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

