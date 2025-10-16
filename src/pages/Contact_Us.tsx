import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

interface ContactProps {
  title?: string
  description?: string
  emailLabel?: string
  emailDescription?: string
  email?: string
  officeLabel?: string
  officeDescription?: string
  officeAddress?: string
  phoneLabel?: string
  phoneDescription?: string
  phone?: string
  chatLabel?: string
  chatDescription?: string
}

const Contact_Us = ({
  title = "Contact Us",
  description = "We’d love to hear from you. Reach out to us at any time.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "info@iof.sg",
  officeLabel = "Office",
  officeDescription = "Visit us at our office.",
  officeAddress = "IOF Pte. Ltd.",
  phoneLabel = "Phone",
  phoneDescription = "Mon–Fri, 9am–5pm (SGT).",
  phone = "+65 xxxx xxxx",
  chatLabel = "Subscribe to our social platforms",
  chatDescription = "Follow IOF for updates, insights, and announcements.",
}: ContactProps) => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-10 md:mb-14 text-center">
          <h1 className="mb-3 mt-2 text-balance text-4xl font-bold tracking-tight text-[#cc3525] md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-base md:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-[#cc3525]/10">
              <Mail className="h-6 w-auto text-[#cc3525]" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a href={`mailto:${email}`} className="font-semibold text-[#cc3525] hover:underline">
              {email}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-[#cc3525]/10">
              <MapPin className="h-6 w-auto text-[#cc3525]" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="#" className="font-semibold text-[#cc3525] hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-[#cc3525]/10">
              <Phone className="h-6 w-auto text-[#cc3525]" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold text-[#cc3525] hover:underline">
              {phone}
            </a>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-[#cc3525]/10">
              <Twitter className="h-6 w-auto text-[#cc3525]" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="text-muted-foreground mb-4">{chatDescription}</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="text-[#cc3525] hover:underline">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#cc3525] hover:underline">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#cc3525] hover:underline">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#cc3525] hover:underline">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_Us