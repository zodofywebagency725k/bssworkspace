import type { Metadata } from 'next';
import Link from 'next/link';
import ProductPhotoGrid from '@/components/ProductPhotoGrid';
import { storage } from '@/data/gallery';

export const metadata: Metadata = { title: 'Office Storage' };
export default function StoragePage() {
  return <main>
    <section className="bg-[#edf0f2] py-16 md:py-20">
      <div className="container-shell">
        <div className="eyebrow mb-5">BSS office storage</div>
        <h1 className="section-title max-w-3xl">Storage that brings order to the workplace.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#586977]">Explore the office storage photographs supplied for the BSS website, including cabinets, sideboards and mobile storage units.</p>
        <Link href="/contact" className="mt-7 inline-flex bg-[#092b4c] px-5 py-3 text-xs font-semibold text-white">Enquire about storage</Link>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-shell">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div><div className="eyebrow mb-3">Product photography</div><h2 className="text-2xl font-semibold tracking-[-.04em]">Office storage collection</h2></div>
          <span className="text-xs text-[#647278]">{storage.length} photographs</span>
        </div>
        <ProductPhotoGrid items={storage} label="Storage"/>
      </div>
    </section>
  </main>;
}
