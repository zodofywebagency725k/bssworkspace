export default function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <div className="max-w-2xl"><div className={`eyebrow mb-4 ${light ? '!text-[#c8a77e]' : ''}`}>{eyebrow}</div><h2 className={`section-title ${light ? 'text-white' : 'text-[#17252b]'}`}>{title}</h2>{body && <p className={`mt-5 max-w-xl text-sm leading-7 ${light ? 'text-white/60' : 'text-[#647278]'}`}>{body}</p>}</div>;
}
