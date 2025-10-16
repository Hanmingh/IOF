import marketImg from '@/assets/services/market.jpg'
import { Button } from '@/components/ui/button'

const ServiceMarket = () => {
  return (
    <div className="space-y-12">
      <section className="relative isolate w-full overflow-hidden rounded-xl">
        <img src={marketImg} alt="Dynamic market making" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#cc3525]/40" />
        <div className="relative z-10 flex min-h-[48vh] items-center justify-center px-4 py-16 text-center md:min-h-[56vh]">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">The Art of Dynamic Market Making in the Algorithmic Age</h1>
            <p className="text-white/90 md:text-lg">
              Whether you're a market maker, a hedge fund, or a high-frequency trader, IOF's next-level algorithms provide the finesse to navigate the intricate maze of market dynamics with unparalleled efficacy.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Liquidity & risk</h3>
            <p className="text-sm md:text-base text-[#cc3525]">We optimize spread, inventory, and routing with explicit risk controls, enabling consistent performance across regimes.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Large-scale allocation</h3>
            <p className="text-sm md:text-base text-[#cc3525]">Our algorithms handle real-time portfolio allocation with latency-aware execution and robust backtesting.</p>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-5 text-sm md:text-base text-[#cc3525]">
          We deliver production-ready strategies with monitoring and guardrails to suit market makers, hedge funds, and HFT firms.
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

export default ServiceMarket


