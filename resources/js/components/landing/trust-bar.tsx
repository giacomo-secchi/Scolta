import { useTrans } from '@/hooks/use-translations';

export default function TrustBar() {
  const { t } = useTrans();

  const partners = [
    { name: 'Rete Gas Italia', icon: '🔥' },
    { name: 'LogiSystems', icon: '📦' },
    { name: 'Vortex Power', icon: '🌀' },
    { name: 'NetFlow', icon: '🌐' },
    { name: 'Apex Building', icon: '🏗️' },
  ];

  return (
    <section className="py-12 border-y border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-10">
          {t('Trusted by global infrastructure & energy leaders')}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              <span className="text-2xl filter contrast-0 group-hover:contrast-100 transition-all">
                {partner.icon}
              </span>
              <span className="text-xl font-bold tracking-tighter text-slate-600 group-hover:text-[oklch(0.53_0.16_255)] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}