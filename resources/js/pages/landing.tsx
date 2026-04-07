import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import Hero from '@/components/hero';
import TrustBar from '@/components/trust-bar'; 
import Testimonials from '@/components/testimonials'; 
import { Button } from '@/components/ui/button';
import AppLogo from '@/components/app-logo';
import { useForcedAppearance } from '@/hooks/use-appearance';

export default function Landing({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth, name } = usePage().props;

    useForcedAppearance('light');

    return (
        <>
            <Head title="AI Service Desk">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 text-sm">
                    <div className="flex items-center gap-2.5">
                        <AppLogo />
                    </div>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main>
                        <Hero />
                        <TrustBar />
                        <Testimonials />
                        <section className="py-20 bg-slate-50">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold">Perché scegliere Scolta?</h2>
                        </div>
                        {/* Qui potresti aggiungere delle feature cards */}
                        </section>

                        <section className="py-20 bg-blue-600 text-white text-center">
                            <h2 className="text-3xl font-bold mb-6">Pronto a ottimizzare i tuoi ticket?</h2>
                            <Button variant="outline" className="text-blue-600 bg-white hover:bg-slate-100">
                                Prenota una Demo Gratuita
                            </Button>
                        </section>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
