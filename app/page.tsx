import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MoveRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProductTile from '@/components/ProductTile';
import { products } from '@/data/products';

export default function HomePage() {
  return <>
    <main>
      <section className="relative overflow-hidden bg-[#edf0f2]">
        <div className="container-shell grid min-h-[650px] items-center gap-10 py-16 md:grid-cols-[.95fr_1.05fr] md:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="eyebrow mb-7">Office seating · Workstations · Bengaluru</div>
            <h1 className="display-title">Workspaces,<br/><span className="font-serif italic text-[#e3262e]">thoughtfully</span><br/>furnished.</h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-[#586977]">BSS manufactures seating solutions and corporate furniture, bringing quality, functionality and comfort to modern workspaces and institutions.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3"><Link href="/office-chairs" className="inline-flex items-center gap-3 bg-[#092b4c] px-6 py-4 text-[11px] font-semibold tracking-wide text-white transition hover:bg-[#9a744a]">Explore products <ArrowUpRight size={15}/></Link><Link href="/contact" className="px-5 py-4 text-[11px] font-semibold tracking-wide text-[#17252b] underline decoration-[#b78a55] underline-offset-8">Discuss a requirement</Link></div>
            <div className="mt-16 flex items-center gap-3 text-[9px] uppercase tracking-[.18em] text-[#7a8585]"><ArrowDown size={14}/> Scroll to explore</div>
          </div>
          <div className="relative">
            <div className="image-placeholder aspect-[1.04/1] min-h-[340px] md:min-h-[500px]"><div className="absolute inset-x-8 bottom-8 z-10 border border-white/50 bg-white/35 p-5 backdrop-blur-sm"><div className="text-[9px] uppercase tracking-[.2em] text-[#536166]">Bangalore Seating Systems</div><div className="mt-2 text-xl tracking-[-.04em] text-[#17252b]">Quality seating. Better workspaces.</div></div></div>
            <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 items-center justify-center rounded-full border border-[#e3262e] bg-white text-center text-[9px] uppercase leading-5 tracking-[.13em] text-[#e3262e] lg:flex">Designed for<br/>everyday work</div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white"><div className="container-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Explore the collection" title="Seating and workspace solutions from BSS." body="Explore chair collections and workstation ranges featured in the BSS catalogues."/><Link href="/office-chairs" className="inline-flex items-center gap-3 self-start border-b border-[#e3262e] pb-3 text-xs font-semibold md:self-end">View all products <MoveRight size={16}/></Link></div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0,3).map((p,i)=><ProductTile key={p.slug} product={p} index={i}/>)}</div>
      </div></section>

      <section className="bg-[#092b4c] py-20 text-white"><div className="container-shell grid items-center gap-12 md:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Workstation solutions" title="Make room for better work." body="Create purposeful work zones with workstation configurations designed around your team's space and workflow." light/><div className="grid gap-4 sm:grid-cols-2"><div className="image-placeholder aspect-[4/3] bg-[#5c6867]"><span className="absolute bottom-4 left-4 z-10 text-[9px] uppercase tracking-[.16em] text-white">Workstation photography pending</span></div><div className="flex flex-col justify-between border border-white/15 p-7"><div className="eyebrow !text-[#c8a77e]">BSS workstations</div><p className="text-2xl leading-tight tracking-[-.04em]">Flexible layouts.<br/>Clear thinking.<br/>Better flow.</p><Link href="/workstations" className="inline-flex items-center gap-2 text-xs text-white/80">Explore workstations <ArrowUpRight size={15}/></Link></div></div></div></section>

      <section className="section-pad"><div className="container-shell grid items-center gap-12 md:grid-cols-2"><div className="image-placeholder aspect-[4/3]"><span className="absolute bottom-5 left-5 z-10 text-[9px] uppercase tracking-[.16em] text-[#536166]">BSS project photography pending</span></div><div><SectionHeading eyebrow="About BSS" title="A practical partner for better workplaces." body="Bangalore Seating Systems brings office seating and workstation solutions together for organisations creating functional, welcoming work environments."/><Link href="/about" className="mt-8 inline-flex items-center gap-3 border-b border-[#e3262e] pb-3 text-xs font-semibold">Get to know BSS <ArrowUpRight size={15}/></Link></div></div></section>

      <section className="bg-[#e8e5dc] py-16"><div className="container-shell flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><div className="eyebrow mb-3">Start a conversation</div><h2 className="max-w-2xl text-3xl tracking-[-.05em] md:text-4xl">Planning an office? Let's find the right fit.</h2><p className="mt-3 text-sm text-[#586977]">Tell us about your seating or workstation requirement.</p></div><Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#092b4c] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#9a744a]">Enquire with BSS <ArrowUpRight size={15}/></Link></div></section>
    </main>
  </>;
}
