import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import teamDefault from '@/assets/team/default-icon.jpg'
import partnerI2Damo from '@/assets/partners/I2DAMO.png'

const About_Us = () => {
  return (
    <div className="space-y-16">
      {/* Header & Intro (template-inspired) */}
      <section>
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#cc3525] md:text-5xl">About Us</h1>
          <p className="mx-auto max-w-[800px] text-muted-foreground text-base leading-relaxed md:text-lg">
            IOF Private Limited is a premier technology consulting firm focused on algorithm development and optimization.
            We strive to transform advanced research concepts into practical industry solutions. Our team, consisting of
            professionals with extensive research experience, is committed to delivering innovative solutions customized to
            meet your unique requirements.
          </p>
        </div>
      </section>

      {/* Story & Mission (two-column) */}
      <section>
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:max-w-5xl lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-[#cc3525] md:text-4xl">Our Story</h2>
              <p className="max-w-prose text-muted-foreground text-base leading-relaxed md:text-lg">
                We bridge the gap between research and industry by translating cutting-edge methods in machine learning and
                mathematical optimization into production systems. From finance and logistics to healthcare and beyond, we
                help organizations deploy algorithms that deliver measurable value.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="w-full space-y-4 rounded-xl border-l-4 border-[#cc3525] bg-[#cc3525]/5 p-6">
              <h2 className="text-3xl font-bold tracking-tight text-[#cc3525] md:text-4xl">Our Mission</h2>
              <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                To revolutionize industry practices by integrating advanced algorithmic solutions, enhancing efficiency,
                and driving innovation. To be the go-to partner for businesses seeking to leverage advanced algorithms to optimize
                their operations and forecast future trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section>
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#cc3525] md:text-4xl">Our Team</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-3">
                <Avatar className="size-20 md:size-24 border-2 border-[#cc3525] ring-2 ring-[#cc3525]/20">
                  <AvatarImage src={member.photo} alt={member.name} />
                  <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section>
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#cc3525] md:text-4xl">Our Partners</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 items-start justify-center gap-8 sm:grid-cols-3 md:gap-10 md:grid-cols-4">
            {partners.map((p, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img src={p.logo} alt={p.name} className="h-14 md:h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const team = [
  { name: 'member1', title: 'Principal Scientist', photo: teamDefault },
  { name: 'member2', title: 'Optimization Lead', photo: teamDefault },
  { name: 'member3', title: 'ML Engineer', photo: teamDefault },
  { name: 'member4', title: 'Data Scientist', photo: teamDefault },
]

const partners = [
  { name: 'I2DAMO', logo: partnerI2Damo },
]

export default About_Us