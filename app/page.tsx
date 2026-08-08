import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Categories } from "@/components/site/categories"
import { FeaturedProducts } from "@/components/site/featured-products"
import { WhyChooseUs } from "@/components/site/why-choose-us"
import { About } from "@/components/site/about"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp"
import { BackToTop } from "@/components/site/back-to-top"
import { SupportChat } from "@/components/site/support-chat"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyChooseUs />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <SupportChat />
    </div>
  )
}
