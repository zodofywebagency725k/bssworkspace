import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';

export default function ProductTile({ product, index = 0 }: { product: Product; index?: number }) {
  const href = product.category === 'Office Chairs' ? '/office-chairs' : '/workstations';
  return <Link href={href} className="group block border-t border-[#dce1e4] pt-5 transition hover:border-[#e3262e]">
    <div className="flex items-center justify-between gap-4">
      <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#e3262e]">Range / {String(index + 1).padStart(2, '0')}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition group-hover:border-[#e3262e] group-hover:bg-[#e3262e] group-hover:text-white"><ArrowUpRight size={15}/></span>
    </div>
    <h3 className="mt-5 text-xl font-semibold tracking-[-.035em] text-[#092b4c]">{product.name}</h3>
    <p className="mt-2 max-w-sm text-xs leading-6 text-[#647278]">{product.description}</p>
    {product.models?.length ? <div className="mt-4">
      <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#092b4c]">Catalogue model references</p>
      <p className="mt-1 text-[10px] leading-5 text-[#647278]">{product.models.slice(0, 8).join(' · ')}{product.models.length > 8 ? ' · and more' : ''}</p>
    </div> : null}
  </Link>;
}
