import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTrans } from '@/hooks/use-translations';

export default function Testimonials() {
  const { t } = useTrans();

  const reviews = [
    {
      name: 'Sarah Ricci',
      role: t('Head of IT @ TechStream'),
      text: t('Scolta turned our chaos into an orderly flow. The AI dispatching is flawless and saved us hours of manual routing.'),
    },
    {
      name: 'Jean-Pierre Laurent',
      role: t('CTO @ Flux Global'),
      text: t('The most intuitive AI implementation we have ever tried. We were up and running in less than 15 minutes.'),
    },
    {
      name: 'Alex Rivera',
      role: t('Support Lead @ NetFlow'),
      text: t('Finally, an AI that actually understands context. Our resolution rate jumped by 40% in the first month.'),
    },
  ];

  return (
    <section className="py-24 bg-[oklch(0.98_0.005_210)]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {t('Trusted by teams worldwide')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[oklch(0.78_0.16_195)] text-lg">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6">
                  "{rev.text}"
                </p>
                <div className="flex flex-col border-t border-slate-50 pt-4">
                  <span className="text-sm font-bold text-slate-900">{rev.name}</span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {rev.role}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}