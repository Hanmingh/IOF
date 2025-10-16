import maritimeImg from '@/assets/services/maritime.jpg'
import { Button } from '@/components/ui/button'

const ServiceMaritime = () => {
  return (
    <div className="space-y-12">
      <section className="relative isolate w-full overflow-hidden rounded-xl">
        <img src={maritimeImg} alt="Maritime bunker forecasting" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#cc3525]/40" />
        <div className="relative z-10 flex min-h-[48vh] items-center justify-center px-4 py-16 text-center md:min-h-[56vh]">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">Navigating Maritime Logistics with AI-Driven Bunker Procurement Forecasting</h1>
            <p className="text-white/90 md:text-lg">
              When it comes to the tactical acquisition of bunkers in the shipping sector, IOF's AI algorithms aren't just advanced; they're both explainable and understandable, positioning IOF as the vanguard in refining procurement strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Explainable AI for procurement</h3>
            <p className="text-sm md:text-base text-[#cc3525]">Transparent models help operations teams understand drivers of bunker price forecasts and strategy choices—supporting auditable, collaborative decisions.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Scenario planning & risk</h3>
            <p className="text-sm md:text-base text-[#cc3525]">We incorporate market scenarios, supply constraints, and risk appetite to optimize timing, quantity, and supplier selection.</p>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-5 text-sm md:text-base text-[#cc3525]">
          From data ingestion to actionable recommendations, our pipeline streamlines procurement—backed by forecasting, optimization, and clear rationales.
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

export default ServiceMaritime


