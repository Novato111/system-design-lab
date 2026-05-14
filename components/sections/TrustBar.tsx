"use client";

import { motion } from "framer-motion";

// Thinner, smaller vertical divider
const Divider = () => <div className="h-3 w-px shrink-0 bg-white/10 sm:h-4" />;

// Group of all highly-stylized logos, scaled down for a "thin" bar
const LogoSet = () => (
  <div className="flex shrink-0 items-center gap-6 px-3 sm:gap-8 sm:px-4">
    
    {/* Google */}
    <div className="text-[14px] font-semibold tracking-tighter text-white sm:text-[16px]">
      Google
    </div>
    <Divider />
    
    {/* Amazon */}
    <div className="flex flex-col items-center justify-center pt-1">
      <span className="text-[14px] font-bold leading-none tracking-tight text-white sm:text-[16px]">
        amazon
      </span>
      <svg viewBox="0 0 100 20" className="mt-0.5 h-[6px] w-8 fill-white sm:h-[7px] sm:w-10">
        <path d="M10,5 Q50,20 90,5 Q50,15 10,5" stroke="white" strokeWidth="2" fill="transparent" />
        <polygon points="88,2 94,5 88,8" />
      </svg>
    </div>
    <Divider />
    
    {/* Microsoft */}
    <div className="flex items-center gap-1.5 text-[14px] font-semibold text-white sm:text-[16px]">
      <div className="grid grid-cols-2 gap-[2px]">
        <div className="size-1 bg-white sm:size-1.5" />
        <div className="size-1 bg-white sm:size-1.5" />
        <div className="size-1 bg-white sm:size-1.5" />
        <div className="size-1 bg-white sm:size-1.5" />
      </div>
      Microsoft
    </div>
    <Divider />

    {/* Netflix */}
    <div className="scale-y-110 transform text-[14px] font-black tracking-widest text-white sm:text-[16px]">
      NETFLIX
    </div>
    <Divider />

    {/* Airbnb */}
    <div className="flex items-center gap-1 text-[14px] font-bold tracking-tight text-white sm:gap-1.5 sm:text-[16px]">
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-white fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round sm:h-5 sm:w-5">
        <path d="M12 3c-4.5 0-7 3.5-7 7.5 0 3 2 5.5 4 8L12 21l3-2.5c2-2.5 4-5 4-8C19 6.5 16.5 3 12 3zm0 9a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
      airbnb
    </div>
    <Divider />

    {/* Stripe */}
    <div className="text-[14px] font-bold tracking-tighter text-white sm:text-[16px]">
      stripe
    </div>
    <Divider />

    {/* LinkedIn */}
    <div className="flex items-center gap-0.5 text-[14px] font-bold tracking-tight text-white sm:gap-1 sm:text-[16px]">
      Linked
      <div className="flex h-[14px] items-center justify-center rounded-[2px] bg-white px-1 text-[11px] text-black sm:h-[16px] sm:text-[12px]">
        in
      </div>
    </div>
    <Divider />

    {/* Uber */}
    <div className="font-serif text-[18px] font-normal tracking-tight text-white sm:text-[22px]">
      Uber
    </div>
    <Divider />

    {/* Datadog */}
    <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-tight text-white sm:text-[14px]">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white sm:h-5 sm:w-5">
         <path d="M12 2C8 2 4 5 4 10c0 4 3 7 7 8v2h2v-2c4-1 7-4 7-8 0-5-4-8-8-8zm-2 7h-2V7h2v2zm6 0h-2V7h2v2z" />
      </svg>
      Datadog
    </div>
    <Divider />
    
  </div>
);

export function TrustBar() {
  return (
    // Reduced py-12 sm:py-20 to py-6 sm:py-8 to make the section much thinner
    <section className="relative z-10 overflow-hidden bg-[#050505] py-6 sm:py-8">
      
      {/* --- STRONG SHINY TOP BORDER --- */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5" />
      <div className="absolute inset-x-0 top-0 mx-auto h-[1px] w-[80%] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80 lg:w-[70%]" />
      <div className="absolute inset-x-0 top-0 mx-auto h-[10px] w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 blur-[6px] lg:w-[50%]" />
      {/* ------------------------------- */}

      {/* Reduced bottom margin here to close the gap */}
      <div className="mb-4 flex items-center justify-center sm:mb-5">
        <p className="text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-500 sm:text-[10px]">
          Trusted by engineers at
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative mx-auto flex max-w-[1440px] overflow-hidden opacity-[0.65] grayscale transition-all duration-500 hover:opacity-100">
        
        {/* Shadow Fades (Left & Right) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050505] to-transparent sm:w-24 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050505] to-transparent sm:w-24 lg:w-32" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {/* Render the set twice for a seamless loop */}
          <LogoSet />
          <LogoSet />
        </motion.div>
        
      </div>
    </section>
  );
}