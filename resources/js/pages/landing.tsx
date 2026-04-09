import { Head, Link, usePage } from '@inertiajs/react';
import Hero from '@/components/landing/hero';
import TrustBar from '@/components/landing/trust-bar'; 
import Testimonials from '@/components/landing/testimonials'; 
import AppLogo from '@/components/app-logo';
import Features from '@/components/landing/features';
import Contact from '@/components/landing/contact';
import { useForcedAppearance } from '@/hooks/use-appearance';
import { useTrans } from '@/hooks/use-translations';

export default function Landing({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { t } = useTrans();

    useForcedAppearance('light');

    return (
        <>
            <Head title={t('AI Service Desk')}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] py-6 text-[#1b1b18] lg:justify-center lg:py-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 text-sm">
                    <AppLogo />
                </header>
                 <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="w-full">
                        <Hero />
                        <TrustBar />
                        <Testimonials />
                        <Features />
                        <Contact />
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
