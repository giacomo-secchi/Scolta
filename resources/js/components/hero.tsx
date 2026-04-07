import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useTrans } from '@/hooks/use-translations';

export default function Hero() {
  const { t } = useTrans();

  return (
    <section className="py-20 px-6 text-center bg-slate-50 border-b">
      <Badge className="mb-4 bg-accent">{t('Now in Early Access')}</Badge>
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
        {t('The Service Desk that')} <span className="text-primary ">Scolta</span> {t('truly listens.')}
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
        {t('Orchestrate your tickets with artificial intelligence. Reduce response times by 60% and automate GPL fault dispatching.')}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input 
          type="email" 
          placeholder={t('Enter your company email')} 
          className="h-12 bg-white"
        />
        <Button className="h-12 px-8 bg-primary hover:bg-primary-dark shadow-lg">
          {t('Get Started')}
        </Button>
      </div>
      <p className="mt-4 text-sm text-slate-400 italic">
        {t('No credit card required. Join 200+ leading companies.')}
      </p>
    </section>
  );
}