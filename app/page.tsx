import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, MoveRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProductTile from '@/components/ProductTile';
import { products } from '@/data/products';
import { chairs, workstations, storage } from '@/data/gallery';

export default function HomePage() {
  const highlights = [
    { ...chairs[0], label: 'Office chairs', href: '/office-chairs' },
    { ...workstations[0], label: 'Workstations', href: '/workstations' },
    { ...storage[0], label: 'Office storage', href: '/storage' },
  ];
  return <main>
    <section className="relative overflow-hidden bg-[#edf0f2]">
      <div className="container-shell grid min-h-[620px] items-center gap-10 py-14 md:grid-cols-[.95fr_1.05fr] md:py-20">
        <div className="relative z-10 max-w-xl">
          <div className="eyebrow mb-7">Office seating · Workstations · Storage · Bengaluru</div>
          <h1 className="display-title">Workspaces,<br/><span className="font-serif italic text-[#e3262e]">thoughtfully</span><br/>furnished.</h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-[#586977]">Bangalore Seating Systems brings together office chairs, workstations and storage solutions for professional workplaces.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/office-chairs" className="inline-flex items-center gap-3 bg-[#092b4c] px-6 py-4 text-[11px] font-semibold tracking-wide text-white transition hover:bg-[#e3262e]">Explore products <ArrowUpRight size={15}/></Link>
            <Link href="/contact" className="px-5 py-4 text-[11px] font-semibold tracking-wide text-[#17252b] underline decoration-[#e3262e] underline-offset-8">Discuss a requirement</Link>
          </div>
          <div className="mt-14 flex items-center gap-3 text-[9px] uppercase tracking-[.18em] text-[#7a8585]"><ArrowDown size={14}/> Scroll to explore</div>
        </div>
        <div className="relative">
          <div className="relative aspect-[1.04/1] min-h-[320px] overflow-hidden bg-white md:min-h-[490px]">
            <Image src={workstations[0].src} alt={workstations[0].alt} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-5 md:p-8"/>
            <div className="absolute inset-x-5 bottom-5 z-10 border border-white/70 bg-white/90 p-5 backdrop-blur-sm md:inset-x-8 md:bottom-8">
              <div className="text-[9px] uppercase tracking-[.2em] text-[#536166]">Bangalore Seating Systems</div>
              <div className="mt-2 text-xl tracking-[-.04em] text-[#17252b]">Quality seating. Better workspaces.</div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 items-center justify-center rounded-full border border-[#e3262e] bg-white text-center text-[9px] uppercase leading-5 tracking-[.13em] text-[#e3262e] lg:flex">Designed for<br/>everyday work</div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Product photography" title="Explore the BSS collections." body="Browse the supplied product photographs across office seating, workstations and storage."/>
          <Link href="/office-chairs" className="inline-flex items-center gap-3 self-start border-b border-[#e3262e] pb-3 text-xs font-semibold md:self-end">View all products <MoveRight size={16}/></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => <Link key={item.src} href={item.href} className="group">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#e7e9eb] bg-white">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4 transition duration-500 group-hover:scale-[1.035]"/>
            </div>
            <div className="mt-4 flex items-center justify-between border-b border-[#dce1e4] pb-3">
              <span className="text-sm font-semibold text-[#092b4c]">{item.label}</span>
              <ArrowUpRight size={16} className="text-[#e3262e]"/>
            </div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#092b4c] py-20 text-white">
      <div className="container-shell grid items-center gap-12 md:grid-cols-[.8fr_1.2fr]">
        <SectionHeading eyebrow="Workspace solutions" title="Make room for better work." body="Explore workstation and table options for individual work zones and shared office layouts." light/>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-white"><Image src={workstations[4].src} alt={workstations[4].alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-contain p-3"/></div>
          <div className="flex flex-col justify-between border border-white/15 p-7">
            <div className="eyebrow !text-[#ff777b]">BSS workstations</div>
            <p className="text-2xl leading-tight tracking-[-.04em]">Flexible layouts.<br/>Clear thinking.<br/>Better flow.</p>
            <Link href="/workstations" className="inline-flex items-center gap-2 text-xs text-white/80">Explore workstations <ArrowUpRight size={15}/></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-shell">
        <div className="mb-10"><SectionHeading eyebrow="Catalogue ranges" title="Explore the BSS product categories." body="The category names and model references below are retained from the supplied BSS catalogues."/></div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{products.slice(0, 6).map((p, i) => <ProductTile key={p.slug} product={p} index={i}/>)}</div>
      </div>
    </section>

    <section className="bg-[#e8e5dc] py-16">
      <div className="container-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div><div className="eyebrow mb-3">Start a conversation</div><h2 className="max-w-2xl text-3xl tracking-[-.05em] md:text-4xl">Planning an office? Let's find the right fit.</h2><p className="mt-3 text-sm text-[#586977]">Tell us about your seating, workstation or storage requirement.</p></div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#092b4c] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#e3262e]">Enquire with BSS <ArrowUpRight size={15}/></Link>
      </div>
    </section>
  </main>;
}
