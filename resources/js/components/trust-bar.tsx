export default function TrustBar() {
  return (
    <div className="py-12 border-b bg-white">
      <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
        Scelto dai leader del settore energetico
      </p>
      <div className="flex justify-center items-center gap-12 grayscale opacity-60">
        {/* Sostituisci con loghi reali o icone placeholder */}
        <div className="text-2xl font-bold">ENERGY-CO</div>
        <div className="text-2xl font-bold">GPL-LOGISTICS</div>
        <div className="text-2xl font-bold">TECH-FLOW</div>
        <div className="text-2xl font-bold">RETE-GAS</div>
      </div>
    </div>
  );
}