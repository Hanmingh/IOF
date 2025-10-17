import { Mail } from "lucide-react"
import { useState } from "react"

interface ContactProps {
  title?: string
  description?: string
  email?: string
}

const Contact_Us = ({
  title = "Contact Us",
  description = "We’d love to hear from you. Reach out to us at any time.",
  email = "hanming@nus.edu.sg"//"info@iof.sg",
}: ContactProps) => {
  const [name, setName] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [fromEmail, setFromEmail] = useState("")
  const [subjectText, setSubjectText] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = subjectText || `Website contact from ${name || 'Visitor'}`
    const lines = [
      `Name: ${name || 'N/A'}`,
      `Affiliation: ${affiliation || 'N/A'}`,
      `Email: ${fromEmail || 'N/A'}`,
      "",
      "Message:",
      message || 'N/A',
    ]
    const body = lines.join("\n")
    const ccParam = fromEmail ? `&cc=${encodeURIComponent(fromEmail)}` : ""
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}${ccParam}`
    window.location.href = mailto
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-6 md:mb-8 text-center">
          <h1 className="mb-3 mt-2 text-balance text-4xl font-bold tracking-tight text-[#cc3525] md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-base md:text-lg">
            {description}
          </p>
        </div>
        {/* Removed email/office/phone/social cards per request */}

        {/* Contact Form */}
        <div className="mt-6 md:mt-8 mx-auto max-w-3xl">
          <div className="rounded-lg bg-muted p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#cc3525]/10">
                <Mail className="h-6 w-auto text-[#cc3525]" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Send us a message</h2>
                <p className="text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">Full name <span className="text-red-600" aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#cc3525]"
                  required
                />
              </div>
              <div>
                <label htmlFor="affiliation" className="mb-1 block text-sm font-medium">Affiliation <span className="text-red-600" aria-hidden="true">*</span></label>
                <input
                  id="affiliation"
                  name="affiliation"
                  type="text"
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  placeholder="University / Company"
                  className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#cc3525]"
                  required
                />
              </div>
              <div>
                <label htmlFor="fromEmail" className="mb-1 block text-sm font-medium">Email <span className="text-red-600" aria-hidden="true">*</span></label>
                <input
                  id="fromEmail"
                  name="fromEmail"
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#cc3525]"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium">Subject <span className="text-red-600" aria-hidden="true">*</span></label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={subjectText}
                  onChange={(e) => setSubjectText(e.target.value)}
                  placeholder="How can we help?"
                  className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#cc3525]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">Message <span className="text-red-600" aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#cc3525]"
                  required
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#cc3525] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#cc3525]/90">
                  <Mail className="h-4 w-4" />
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_Us