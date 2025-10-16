import hospitalImg from '@/assets/services/hospital.jpg'
import { Button } from '@/components/ui/button'

const ServiceHospital = () => {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative isolate w-full overflow-hidden rounded-xl">
        <img src={hospitalImg} alt="Hospital scheduling" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#cc3525]/40" />
        <div className="relative z-10 flex min-h-[48vh] items-center justify-center px-4 py-16 text-center md:min-h-[56vh]">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Pioneering Hospital Scheduling Through Robust & Stochastic Dynamics
            </h1>
            <p className="text-white/90 md:text-lg">
              Hospital schedules aren't just about resource allocation; It's a nuanced ballet that takes into account uncertainties to bolster patient care and staff well-being. IOF transcends traditional approaches with groundbreaking algorithms, setting new benchmarks for efficiency and adaptability in healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#cc3525] md:text-3xl">Why stochastic scheduling</h2>
          <p className="text-base leading-relaxed text-[#cc3525] md:text-lg">
            Stochastic hospital scheduling acknowledges uncertainty in patient arrivals, emergencies, and resource availability. By modeling variability, schedules become robust, adaptive, and sustainable while safeguarding care quality and staff well‑being. This aligns with the modern view of healthcare operations highlighted on IOF’s site.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Methods we employ</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base text-[#cc3525]">
              <li>Probabilistic forecasting with robust and stochastic optimization</li>
              <li>Markov decision processes and reinforcement learning</li>
              <li>Mixed‑integer programming and queueing theory</li>
              <li>Machine learning and deep learning–driven strategies</li>
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">Operational outcomes</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base text-[#cc3525]">
              <li>More resilient schedules under uncertainty</li>
              <li>Higher patient throughput and on‑time performance</li>
              <li>Improved staff utilization and satisfaction</li>
              <li>Lower operating cost with quality preserved</li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-5 text-sm md:text-base text-[#cc3525]">
          Leveraging probabilistic models and optimization, our solutions support real‑time schedule adjustments—helping administrators harmonize patient needs, efficiency, and constraints.
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

export default ServiceHospital


