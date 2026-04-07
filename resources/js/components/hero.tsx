import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-slate-50 border-b">
      <Badge className="mb-4 bg-accent">🚀 Now in Early Access</Badge>
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
        Il Service Desk che <span className="text-primary ">Scolta</span> davvero.
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
        Orchestra i tuoi ticket con l'intelligenza artificiale. Riduci i tempi di risposta del 60% e automatizza il dispatching dei guasti GPL.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input 
          type="email" 
          placeholder="Inserisci la tua email aziendale" 
          className="h-12 bg-white"
        />
        <Button className="h-12 px-8 bg-primary hover:bg-primary-dark shadow-lg">
          Inizia Ora
        </Button>
      </div>
      <p className="mt-4 text-sm text-slate-400 italic">
        Nessuna carta di credito richiesta. Unisciti a +200 aziende leader.
      </p>
    </section>
  );
}