import quantumImg from '@/assets/services/quantum.jpg'
import { Button } from '@/components/ui/button'

const ServiceQuantum = () => {
  return (
    <div className="space-y-12">
      <section className="relative isolate w-full overflow-hidden rounded-xl">
        <img src={quantumImg} alt="Quantum finance" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#cc3525]/40" />
        <div className="relative z-10 flex min-h-[48vh] items-center justify-center px-4 py-16 text-center md:min-h-[56vh]">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">Harnessing Quantum Computing for Financial Mavericks</h1>
            <p className="text-white/90 md:text-lg">
              The financial landscape is no stranger to complexity, but what if you could solve intricate, large-scale problems faster than ever before? IOF is pioneering the integration of quantum algorithms in finance, launching a revolutionary new epoch of computational prowess and accuracy.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Quantum advantage</h3>
            <p className="text-sm md:text-base text-[#cc3525]">We target portfolio optimization, risk aggregation, and complex derivatives with quantum-inspired and hybrid methods.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">From research to production</h3>
            <p className="text-sm md:text-base text-[#cc3525]">Bridging theory and systems engineering to evaluate feasibility, benchmark speed/quality, and deploy where quantum adds value.</p>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-5 text-sm md:text-base text-[#cc3525]">
          We collaborate with finance teams to identify use cases that meaningfully benefit from quantum acceleration, delivering practical wins.
        </div>
        <div className="flex items-center justify-center pt-2">
          <Button asChild className="bg-[#cc3525] text-white hover:bg-[#cc3525]/90">
            <a href="/contact">Contact us for more</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ServiceQuantum


