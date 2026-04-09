import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { useTrans } from '@/hooks/use-translations';
import { Form } from '@inertiajs/react';

export default function Hero() {
  const { t } = useTrans();
  const heroTitleTemplate = t('hero.title', { highlight: '__HIGHLIGHT__' });
  const [heroTitleBefore, heroTitleAfter = ''] = heroTitleTemplate.split('__HIGHLIGHT__');

  return (
    <section className="py-20 px-6 text-center bg-slate-50">
      <Badge className="mb-4 bg-accent">{t('Now in Early Access')}</Badge>
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
        {heroTitleBefore}
        <span className="text-primary">{t('hero.title.highlight')}</span>
        {heroTitleAfter}
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
        {t('Orchestrate your tickets with artificial intelligence. Reduce response times by 60% and automate GPL fault dispatching.')}
      </p>

      <Form
        action="/waitlist"
        method="post"
        resetOnSuccess={['email']}
        className="max-w-md mx-auto"
      >
        {({ processing, errors, wasSuccessful }) => (
          <>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={t('Enter your company email')}
                className="h-12 bg-white"
                aria-invalid={Boolean(errors.email)}
              />
              <Button
                type="submit"
                disabled={processing}
                className="h-12 px-8 bg-primary hover:bg-primary-dark shadow-lg"
              >
                {processing && <Spinner className="mr-2" />}
                {processing ? t('Sending...') : t('Get Started')}
              </Button>
            </div>

            <InputError message={errors.email} className="mt-2 text-left" />

            {wasSuccessful && (
              <p className="mt-2 text-left text-sm text-green-600">
                {t("Thanks! We'll be in touch.")}
              </p>
            )}
          </>
        )}
      </Form>

      <p className="mt-4 text-sm text-slate-400 italic">
        {t('No credit card required. Join 200+ leading companies.')}
      </p>
    </section>
  );
}