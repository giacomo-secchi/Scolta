import { useTrans } from '@/hooks/use-translations';
import { CheckCircle2, Puzzle, Zap } from 'lucide-react';

export default function Features() {
    const { t } = useTrans();
    return (
        <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold tracking-tight mb-4">
                    {t('Why choose')} <span className="text-primary">Scolta</span>?
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    {t('The next generation of service desk management, powered by native AI.')}
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 transition-colors duration-300 hover:border-primary">
                    <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-accent/10">
                        <Zap className="size-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t('Smart Routing')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('Automated ticket categorization and assignment to the right agent instantly.')}
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 transition-colors duration-300 hover:border-accent">
                    <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle2 className="size-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t('60% Faster Resolution')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('Boost productivity with AI-generated insights and automated repetitive tasks.')}
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 transition-colors duration-300 hover:border-accent">
                    <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-accent/10">
                        <Puzzle className="size-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t('Seamless Integration')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('Connect to your existing tech stack in minutes. No complex setups.')}
                    </p>
                </div>

            </div>
        </div>
        </section>
    );
}