
import { useTrans } from '@/hooks/use-translations';
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';

export default function Contact() {
    const { t } = useTrans();
    const { contactEmail } = usePage().props;

    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[oklch(0.20_0.04_250)] px-8 py-20 text-center shadow-2xl">

                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[oklch(0.78_0.16_195)]/20 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                            {t('Ready to optimize your')}{' '}
                            <span className="text-[oklch(0.78_0.16_195)]">{t('support operations?')}</span>
                        </h2>

                        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
                            {t('Book a 15-minute demo to see how Scolta can automate your dispatching and reduce response times by 60%.')}
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                asChild
                                className="h-12 rounded-full bg-[oklch(0.78_0.16_195)] px-8 font-bold text-slate-950 shadow-lg transition-transform hover:scale-105 hover:bg-[oklch(0.78_0.16_195)]/90"
                            >
                                <a href={`mailto:${contactEmail}`}>{t('Book a Free Demo')}</a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-12 rounded-full border-slate-700 bg-transparent px-8 text-white hover:bg-white/5 hover:text-white"
                            >
                                <a href={`mailto:${contactEmail}`}>{t('Contact Sales')}</a>
                            </Button>
                        </div>

                        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                            {t('Available for Early Access')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}