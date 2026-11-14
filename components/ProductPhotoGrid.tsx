import Image from 'next/image';
import type { GalleryItem } from '@/data/gallery';

export default function ProductPhotoGrid({ items, label }: { items: GalleryItem[]; label: string }) {
  return <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item, index) => <article key={item.src} className="group min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden border border-[#e7e9eb] bg-white">
        <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 transition duration-500 group-hover:scale-[1.035]" />
        <span className="absolute left-3 top-3 bg-[#092b4c] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[.14em] text-white">
          {label} / {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-3 text-sm font-semibold leading-6 text-[#092b4c]">{item.title}</h3>
      <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-[#7a8585]">BSS product photograph</p>
    </article>)}
  </div>;
}
