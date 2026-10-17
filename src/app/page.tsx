export default function Home() {
 return (
   <div className="min-h-screen overflow-hidden bg-[#fbfaf6] text-[#1d332c]">
     <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
       <a href="#generator" className="flex items-center gap-2.5" aria-label="LessonLoop home">
         <span className="grid size-9 grid-cols-2 gap-0.5 rounded-xl bg-[#214b3c] p-2">
           <span className="rounded-sm bg-[#dce9a8]" />
           <span className="rounded-sm bg-[#f3b18d]" />
           <span className="rounded-sm bg-[#f3b18d]" />
           <span className="rounded-sm bg-[#dce9a8]" />
         </span>
         <span className="text-lg font-semibold">LessonLoop</span>
       </a>
       <span className="hidden text-sm text-[#65746d] sm:block">Made for the people who make learning click.</span>
     </header>


     <main id="top">
       <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-16">
         <div className="max-w-xl">
           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce4d9] bg-white/70 px-3.5 py-2 text-xs font-medium text-[#52685c]">
             <span className="size-2 rounded-full bg-[#ed9d72]" />
             A little more time for teaching
           </div>
           <h1 className="max-w-[14ch] text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#1d332c] sm:text-5xl lg:text-[3.65rem]">
             Plan your next tutoring lesson in 60 seconds.
           </h1>
           <p className="mt-6 max-w-lg text-base leading-7 text-[#65746d] sm:text-lg sm:leading-8">
             Create personalised, structured lessons for your students without spending your evening planning.
           </p>
           <div className="mt-8 flex flex-col items-start gap-3">
             <a
               href="#generator"
               className="inline-flex min-h-13 items-center justify-center rounded-xl bg-[#214b3c] px-6 py-3 text-base font-semibold text-white shadow-[0_5px_0_#17382d] transition-colors hover:bg-[#2d5a49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#214b3c]"
             >
               Create a free lesson
               <span aria-hidden="true" className="ml-3 text-lg">↗</span>
             </a>
             <span className="pl-1 text-sm text-[#7a857e]">No credit card required.</span>
           </div>
           <div className="mt-10 flex items-center gap-3 text-sm text-[#65746d]">
             <span className="flex -space-x-2" aria-hidden="true">
               <span className="grid size-8 place-items-center rounded-full border-2 border-[#fbfaf6] bg-[#f3c7a6] text-[10px] font-semibold text-[#6d4e3d]">A</span>
               <span className="grid size-8 place-items-center rounded-full border-2 border-[#fbfaf6] bg-[#d7e4bb] text-[10px] font-semibold text-[#486044]">J</span>
               <span className="grid size-8 place-items-center rounded-full border-2 border-[#fbfaf6] bg-[#d8dff0] text-[10px] font-semibold text-[#4e5c7b]">M</span>
             </span>
             <span>Thoughtful planning, less busywork.</span>
           </div>


         </div>


         <div id="generator" className="relative mx-auto w-full max-w-[550px] scroll-mt-8">
           <div aria-hidden="true" className="absolute -right-7 -top-8 size-28 rounded-full bg-[#f2dca2]/70 blur-2xl sm:-right-10 sm:-top-10 sm:size-40" />
           <div aria-hidden="true" className="absolute -bottom-8 -left-6 size-32 rounded-full bg-[#dce9d5]/90 blur-2xl sm:-bottom-10 sm:-left-10 sm:size-44" />
           <article className="relative rounded-2xl border border-[#e9e8df] bg-white p-5 shadow-[0_18px_60px_-30px_rgba(38,62,49,0.26)] sm:p-7">
             <div className="flex items-center justify-between border-b border-[#eeeee8] pb-5">
               <div>
                 <p className="text-xs font-semibold tracking-[0.08em] text-[#8a968e] uppercase">Your lesson preview</p>
                 <p className="mt-1.5 text-sm text-[#67766d]">45-minute session</p>
               </div>
               <span className="rounded-lg bg-[#edf3e7] px-3 py-1.5 text-xs font-semibold text-[#45634c]">Ready to teach</span>
             </div>
             <div className="py-5">
               <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#728078]">
                 <span className="rounded-md bg-[#f5f0e4] px-2.5 py-1.5 text-[#786541]">YEAR 6</span>
                 <span>·</span>
                 <span>MATHS</span>
               </div>
               <h2 className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.025em] text-[#1d332c] sm:text-[1.7rem]">Equivalent Fractions</h2>
               <p className="mt-2 text-sm leading-6 text-[#738077]">Find, make and explain fractions with the same value.</p>
             </div>
             <div className="rounded-xl bg-[#f7f8f3] p-4 sm:p-5">
               <div className="mb-4 flex items-center justify-between">
                 <p className="text-sm font-semibold text-[#34493e]">Lesson flow</p>
                 <span className="text-xs text-[#849087]">3 activities</span>
               </div>
               <ol className="space-y-4">
                 <li className="flex gap-3">
                   <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#e7eddc] text-xs font-semibold text-[#496149]">1</span>
                   <div className="min-w-0 flex-1">
                     <div className="flex items-baseline justify-between gap-2"><p className="text-sm font-medium text-[#34493e]">Fraction warm-up</p><span className="text-xs text-[#849087]">5 min</span></div>
                     <p className="mt-1 text-xs leading-5 text-[#849087]">Spot fractions that name the same amount.</p>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#fae9de] text-xs font-semibold text-[#97684d]">2</span>
                   <div className="min-w-0 flex-1">
                     <div className="flex items-baseline justify-between gap-2"><p className="text-sm font-medium text-[#34493e]">Build an equivalent</p><span className="text-xs text-[#849087]">25 min</span></div>
                     <p className="mt-1 text-xs leading-5 text-[#849087]">Use fraction strips to model and compare.</p>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#e7eaf4] text-xs font-semibold text-[#5a6588]">3</span>
                   <div className="min-w-0 flex-1">
                     <div className="flex items-baseline justify-between gap-2"><p className="text-sm font-medium text-[#34493e]">Explain your thinking</p><span className="text-xs text-[#849087]">15 min</span></div>
                     <p className="mt-1 text-xs leading-5 text-[#849087]">Try an exit question and share a strategy.</p>
                   </div>
                 </li>
               </ol>
             </div>
             <div className="mt-4 flex flex-wrap gap-2">
               <span className="rounded-full border border-[#e8e9e1] px-3 py-1.5 text-xs text-[#6e7c72]">Visual learning</span>
               <span className="rounded-full border border-[#e8e9e1] px-3 py-1.5 text-xs text-[#6e7c72]">Check for understanding</span>
             </div>
           </article>
           <div className="absolute -right-3 top-[38%] hidden rounded-xl border border-[#e9e8df] bg-white px-3.5 py-3 shadow-lg sm:block lg:-right-6">
             <p className="text-[10px] font-semibold tracking-[0.08em] text-[#89958d] uppercase">Made for</p>
             <p className="mt-1 text-sm font-semibold text-[#34493e]">your student</p>
           </div>
         </div>
       </section>


       <section aria-label="Benefits" className="border-y border-[#eeede5] bg-[#f5f5ee]">
         <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-11 sm:grid-cols-3 sm:gap-7 sm:px-8 sm:py-14 lg:px-12">
           <article className="flex gap-4">
             <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#e7eddc] text-sm font-semibold text-[#45634c]">01</span>
             <div><h3 className="font-semibold text-[#293e33]">Create in seconds</h3><p className="mt-1.5 max-w-xs text-sm leading-6 text-[#738077]">Turn a topic and a few details into a structured plan, ready for your next session.</p></div>
           </article>
           <article className="flex gap-4">
             <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f8e8dc] text-sm font-semibold text-[#986a4e]">02</span>
             <div><h3 className="font-semibold text-[#293e33]">Adapt to your student</h3><p className="mt-1.5 max-w-xs text-sm leading-6 text-[#738077]">Shape activities around their age, level, learning goals and what keeps them curious.</p></div>
           </article>
           <article className="flex gap-4">
             <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#e6e9f2] text-sm font-semibold text-[#5d6683]">03</span>
             <div><h3 className="font-semibold text-[#293e33]">Save every lesson</h3><p className="mt-1.5 max-w-xs text-sm leading-6 text-[#738077]">Keep your plans together and build a useful record of each student’s progress.</p></div>
           </article>
         </div>
       </section>
     </main>


     <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-[#7b877f] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
       <span>© 2026 LessonLoop</span>
       <nav aria-label="Footer" className="flex items-center gap-5">
         <a href="mailto:privacy@lessonloop.app" className="transition-colors hover:text-[#214b3c]">Privacy</a>
         <a href="mailto:terms@lessonloop.app" className="transition-colors hover:text-[#214b3c]">Terms</a>
         <a href="mailto:hello@lessonloop.app" className="transition-colors hover:text-[#214b3c]">Contact</a>
       </nav>
     </footer>
   </div>
 );
}




