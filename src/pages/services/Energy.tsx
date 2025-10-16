import energyImg from '@/assets/services/energy.jpg'
import { Button } from '@/components/ui/button'

const ServiceEnergy = () => {
  return (
    <div className="space-y-12">
      <section className="relative isolate w-full overflow-hidden rounded-xl">
        <img src={energyImg} alt="Energy infrastructure" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#cc3525]/40" />
        <div className="relative z-10 flex min-h-[48vh] items-center justify-center px-4 py-16 text-center md:min-h-[56vh]">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">Revolutionizing Energy Infrastructure Management</h1>
            <p className="text-white/90 md:text-lg">
              The blueprint for sustainability and efficiency in large-scale energy facilities and networks is being redrawn. IOF's avant-garde solutions are not just changing the game; they're rewriting the rulebook for energy infrastructure management.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Sustainability first</h3>
            <p className="text-sm md:text-base text-[#cc3525]">Reduce carbon footprint and improve energy efficiency with optimization across generation, storage, and loads.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Operational efficiency</h3>
            <p className="text-sm md:text-base text-[#cc3525]">From planning to dispatch, our models minimize waste and maximize asset performance.</p>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-5 text-sm md:text-base text-[#cc3525]">
          We combine forecasting, optimization, and control to deliver a resilient and economical energy operation framework.
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

export default ServiceEnergy


