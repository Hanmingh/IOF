import { Mail } from "lucide-react"

const Career = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-10 md:mb-14 text-center">
          <h1 className="mb-3 mt-2 text-balance text-4xl font-bold tracking-tight text-[#cc3525] md:text-5xl">
            Career
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-base md:text-lg">
            Join us in shaping the future of optimization and AI.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-muted p-6 md:p-8">
            <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-[#cc3525]/10">
              <Mail className="h-6 w-auto text-[#cc3525]" />
            </div>
            <p className="text-lg leading-relaxed">
              For internship opportunities, contact
              {' '}
              <a href="mailto:info@iog.sg" className="font-semibold text-[#cc3525] hover:underline">info@iog.sg</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career