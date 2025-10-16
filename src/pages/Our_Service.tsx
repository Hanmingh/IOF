import { Gallery } from '@/components/Gallery'

// Local images for services
import hospitalImg from '@/assets/services/hospital.jpg'
import maritimeImg from '@/assets/services/maritime.jpg'
import energyImg from '@/assets/services/energy.jpg'
import marketImg from '@/assets/services/market.jpg'
import quantumImg from '@/assets/services/quantum.jpg'

const Our_Service = () => {
  const items = [
    {
      id: 'svc-1',
      title: 'Pioneering Hospital Scheduling Through Robust & Stochastic Dynamics',
      summary:
        "Hospital schedules aren't just about resource allocation; It's a nuanced ballet that takes into account uncertainties to bolster patient care and staff well-being. IOF transcends traditional approaches with groundbreaking algorithms, setting new benchmarks for efficiency and adaptability in healthcare operations.",
      url: '/services/hospital',
      image: hospitalImg,
    },
    {
      id: 'svc-2',
      title: 'Navigating Maritime Logistics with AI-Driven Bunker Procurement Forecasting',
      summary:
        "When it comes to the tactical acquisition of bunkers in the shipping sector, IOF's AI algorithms aren't just advanced; they're both explainable and understandable, positioning IOF as the vanguard in refining procurement strategies.",
      url: '/services/maritime',
      image: maritimeImg,
    },
    {
      id: 'svc-3',
      title: 'Revolutionizing Energy Infrastructure Management',
      summary:
        "The blueprint for sustainability and efficiency in large-scale energy facilities and networks is being redrawn. IOF's avant-garde solutions are not just changing the game; they're rewriting the rulebook for energy infrastructure management.",
      url: '/services/energy',
      image: energyImg,
    },
    {
      id: 'svc-4',
      title: 'The Art of Dynamic Market Making in the Algorithmic Age',
      summary:
        "Whether you're a market maker, a hedge fund, or a high-frequency trader, IOF's next-level algorithms provide the finesse to navigate the intricate maze of market dynamics with unparalleled efficacy.",
      url: '/services/market',
      image: marketImg,
    },
    {
      id: 'svc-5',
      title: 'Harnessing Quantum Computing for Financial Mavericks',
      summary:
        "The financial landscape is no stranger to complexity, but what if you could solve intricate, large-scale problems faster than ever before? IOF is pioneering the integration of quantum algorithms in finance, launching a revolutionary new epoch of computational prowess and accuracy.",
      url: '/services/quantum',
      image: quantumImg,
    },
  ]

  return (
    <div className="space-y-16">
      {/* Title */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#cc3525] md:text-5xl">Our Services</h1>
      </section>

      {/* Context blocks under the title */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-6">
          <h3 className="mb-3 text-lg font-semibold text-[#cc3525]">Custom Machine Learning</h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            We develop customized 
            machine learning algorithms 
            that address your unique 
            business challenges, from 
            predictive analytics to 
            automation
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-6">
          <h3 className="mb-3 text-lg font-semibold text-[#cc3525]">Optimization Services</h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Our optimization services help 
            streamline your workflows, 
            reduce costs, and improve 
            operational efficiency across 
            various industries
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-6">
          <h3 className="mb-3 text-lg font-semibold text-[#cc3525]">Tailored by Industry</h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            We specialize in creating 
            tailored solutions for finance, 
            logistics, healthcare, and more, 
            ensuring that our algorithms are 
            finely tuned to meet the 
            demands of your sector
          </p>
        </div>
      </section>

      <Gallery heading="" demoUrl="/contact" items={items} />
    </div>
  )
}

export default Our_Service