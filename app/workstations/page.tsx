import type { Metadata } from 'next';
import Link from 'next/link';
import ProductTile from '@/components/ProductTile';
import ProductPhotoGrid from '@/components/ProductPhotoGrid';
import { products } from '@/data/products';
import { workstations } from '@/data/gallery';

export const metadata: Metadata = { title: 'Workstations & Tables' };
export default function WorkstationsPage() {
  const ranges = products.filter(p => p.category === 'Workstations');
  return <main>
    <section className="bg-[#edf0f2] py-16 md:py-20">
      <div className="container-shell">
        <div className="eyebrow mb-5">BSS workspace solutions</div>
        <h1 className="section-title max-w-3xl">Workstations and office tables, planned around your space.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#586977]">Browse the workstation and table photographs supplied for BSS, from individual desks to shared workstation layouts.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/catalogue" className="bg-[#092b4c] px-5 py-3 text-xs font-semibold text-white">Download workstation catalogue</Link>
          <Link href="/contact" className="border border-[#092b4c]/20 px-5 py-3 text-xs font-semibold text-[#092b4c]">Discuss a layout</Link>
        </div>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-shell">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div><div className="eyebrow mb-3">Product photography</div><h2 className="text-2xl font-semibold tracking-[-.04em]">Workstations and tables</h2></div>
          <span className="text-xs text-[#647278]">{workstations.length} photographs</span>
        </div>
        <ProductPhotoGrid items={workstations} label="Workspace"/>
      </div>
    </section>
    <section className="section-pad bg-[#f7f8f8]">
      <div className="container-shell">
        <div className="mb-10"><div className="eyebrow mb-3">Catalogue range</div><h2 className="section-title">Explore table and workstation categories.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#647278]">Category names and model references are retained from the BSS catalogue.</p></div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{ranges.map((p, i) => <ProductTile key={p.slug} product={p} index={i}/>)}</div>
      </div>
    </section>
  </main>;
}
