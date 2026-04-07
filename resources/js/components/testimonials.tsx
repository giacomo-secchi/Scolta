import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Testimonials() {
  const reviews = [
    { name: "Marco R.", role: "Ops Manager", text: "Scolta ha trasformato il nostro caos in un flusso ordinato. Il dispatching AI è infallibile." },
    { name: "Elena V.", role: "CEO @ GasFlow", text: "La migliore implementazione di AI per Service Desk mai provata. Installazione in 10 minuti." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {reviews.map((rev, i) => (
          <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 text-blue-600 font-bold">★★★★★</CardHeader>
            <CardContent>
              <p className="text-slate-700 italic mb-4">"{rev.text}"</p>
              <div className="text-sm font-semibold text-slate-900">{rev.name}</div>
              <div className="text-xs text-slate-500">{rev.role}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}