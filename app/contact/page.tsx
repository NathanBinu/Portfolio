// "use client"

// import type React from "react"

// import { PageTransition } from "@/components/animations/page-transition"
// import { ScrollReveal } from "@/components/animations/scroll-reveal"
// import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
// import { Navigation } from "@/components/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { CONTACT } from "@/content/contact"
// import { Calendar, Github, Linkedin, Mail, MapPin, MessageSquare, Send } from "lucide-react"
// import { useState } from "react"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setIsSubmitting(true)

//   //   // Simulate form submission
//   //   await new Promise((resolve) => setTimeout(resolve, 1000))

//   //   // Reset form
//   //   setFormData({ name: "", email: "", subject: "", message: "" })
//   //   setIsSubmitting(false)

//   //   // In a real app, you would send the data to your backend
//   //   alert("Thank you for your message! I'll get back to you soon.")
//   // }

//   // CHANGED: send data to our API route instead of the fake delay
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       if (!res.ok) {
//         const data = await res.json().catch(() => ({}))
//         throw new Error(data?.error || "Something went wrong.")
//       }

//       // success: reset form + notify
//       setFormData({ name: "", email: "", subject: "", message: "" })
//       alert("Thanks! Your message has been sent — I’ll get back to you soon.")
//     } catch (err: any) {
//       alert(err.message || "Sorry, failed to send. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }


//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleLinkedInDM = async () => {
//     try {
//       if (CONTACT.dmTemplate) await navigator.clipboard.writeText(CONTACT.dmTemplate)
//     } catch {
//       // clipboard can fail if blocked; ignore
//     }
//     window.open(CONTACT.linkedinProfile, "_blank", "noopener,noreferrer")
//   }


//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-background">
//         <Navigation />

//         {/* Hero Section */}
//         <section className="container py-16 md:py-24">
//           <ScrollReveal direction="up" className="text-center space-y-8 max-w-3xl mx-auto">
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold">Let's Work Together</h1>
//               <p className="text-xl text-muted-foreground">
//                 Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and I'll
//                 respond as soon as possible.
//               </p>
//             </div>
//           </ScrollReveal>
//         </section>

//         {/* Contact Form & Info */}
//         <section className="container pb-16 md:pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Contact Form */}
//             <ScrollReveal direction="left" className="lg:col-span-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="name">Name</Label>
//                         <Input
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Your name"
//                           required
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="email">Your Email</Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your.email@example.com"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="subject">Subject</Label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         placeholder="What's this about?"
//                         required
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Tell me about your project or just say hello..."
//                         rows={6}
//                         required
//                       />
//                     </div>

//                     <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                       <Send className="ml-2 h-5 w-5" />
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </ScrollReveal>

//             {/* Contact Info */}
//             <div className="space-y-8">
//               <StaggerContainer>
//                 <StaggerItem>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-xl font-heading">Get In Touch</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="flex items-start gap-4">
//                         <div className="p-2 bg-primary/10 rounded-lg">
//                           <Mail className="h-5 w-5 text-primary" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold">Email</h3>
//                           <p className="text-muted-foreground">Nathanbinu011@gmail.com</p>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-4">
//                         <div className="p-2 bg-primary/10 rounded-lg">
//                           <MapPin className="h-5 w-5 text-primary" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold">Location</h3>
//                           <p className="text-muted-foreground">Toronto, ON</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </StaggerItem>

//                 <StaggerItem>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-xl font-heading">Follow Me</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex flex-col gap-4">
//                         <Button asChild variant="outline" className="justify-start bg-transparent">
//                           <a href="https://github.com/NathanBinu" target="_blank" rel="noopener noreferrer">
//                             <Github className="mr-3 h-5 w-5" />
//                             GitHub
//                           </a>
//                         </Button>
//                         <Button asChild variant="outline" className="justify-start bg-transparent">
//                           <a href="https://www.linkedin.com/in/nathan-binu-edappilly-930133207/" target="_blank" rel="noopener noreferrer">
//                             <Linkedin className="mr-3 h-5 w-5" />
//                             LinkedIn
//                           </a>
//                         </Button>
//                         {/* <Button asChild variant="outline" className="justify-start bg-transparent">
//                           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                             <Twitter className="mr-3 h-5 w-5" />
//                             Twitter
//                           </a>
//                         </Button> */}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </StaggerItem>

//                 <StaggerItem>
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="text-center space-y-4">
//                         <h3 className="font-heading font-semibold">Response Time</h3>
//                         <p className="text-sm text-muted-foreground">
//                           I typically respond to messages within 24 hours. For urgent matters, feel free to reach out
//                           via email directly.
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </StaggerItem>
//               </StaggerContainer>
//             </div>
//           </div>
//         </section>

//         {/* Alternative Contact Methods */}
//         <section className="bg-muted/50 py-16 md:py-24">
//           <div className="container text-center space-y-8">
//             <ScrollReveal direction="up">
//               <h2 className="text-3xl md:text-4xl font-heading font-bold">Other Ways to Connect</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Prefer a different way to get in touch? Here are some alternatives
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 {/* LinkedIn DM (copies template, opens your profile) */}
//                 <Button size="lg" onClick={handleLinkedInDM}>
//                   <MessageSquare className="mr-2 h-5 w-5" />
//                   DM on LinkedIn
//                 </Button>
//                 {/* Calendly booking */}
//                 <Button asChild variant="outline" size="lg">
//                   <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
//                     <Calendar className="mr-2 h-5 w-5" />
//                     Book a call
//                   </a>
//                 </Button>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>
//       </div>
//     </PageTransition>
//   )
// }

//-------------------------------------------------------------------------------------

"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

import { PageTransition } from "@/components/animations/page-transition"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT } from "@/content/contact"
import { Calendar, Github, Linkedin, Mail, MapPin, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // spam/friction helpers
  const [company, setCompany] = useState("")        // honeypot value (hidden)
  const startedAtRef = useRef<number>(Date.now())   // timestamp when form mounted

  useEffect(() => {
    startedAtRef.current = Date.now()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // submit -> API route with extras for bot checks
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company,                 // honeypot
          startedAt: startedAtRef.current, // time check
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong.")
      }

      // success
      setFormData({ name: "", email: "", subject: "", message: "" })
      setCompany("")
      alert("Thanks! Your message was sent — I’ll get back to you soon.")
    } catch (err: any) {
      alert(err?.message || "Sorry, failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // LinkedIn DM helper (copies template, opens profile)
  const handleLinkedInDM = async () => {
    try {
      if (CONTACT.dmTemplate) await navigator.clipboard.writeText(CONTACT.dmTemplate)
    } catch {}
    window.open(CONTACT.linkedinProfile, "_blank", "noopener,noreferrer")
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <ScrollReveal direction="up" className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-heading font-bold">Let's Work Together</h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and I'll
                respond as soon as possible.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Form & Info */}
        <section className="container pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        required
                      />
                    </div>

                    {/* Honeypot (hidden from users) */}
                    <div aria-hidden="true" className="hidden">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        tabIndex={-1}
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-8">
              <StaggerContainer>
                <StaggerItem>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-heading">Get In Touch</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-muted-foreground">Nathanbinu011@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Location</h3>
                          <p className="text-muted-foreground">Toronto, ON</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-heading">Follow Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        <Button asChild variant="outline" className="justify-start bg-transparent">
                          <a href="https://github.com/NathanBinu" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-3 h-5 w-5" />
                            GitHub
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="justify-start bg-transparent">
                          <a
                            href="https://www.linkedin.com/in/nathan-binu-edappilly-930133207/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="mr-3 h-5 w-5" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <h3 className="font-heading font-semibold">Response Time</h3>
                        <p className="text-sm text-muted-foreground">
                          I typically respond to messages within 24 hours. For urgent matters, feel free to reach out
                          via email directly.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container text-center space-y-8">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Other Ways to Connect</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prefer LinkedIn DMs or a quick call? Pick what works for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleLinkedInDM}>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  DM on LinkedIn
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a call
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
