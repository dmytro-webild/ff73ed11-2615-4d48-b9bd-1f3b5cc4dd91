import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Award, CheckCircle, Star } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      title="Defining Luxury Ink"
      description="Exquisite 3D-inspired tattooing for the discerning individual. Precision artistry meets custom design."
      primaryButton={{
        text: "Book Appointment",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Portfolio",
        href: "#works",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-tattoo-pierced-young-man-holding-carnation-flower-joined-hands_23-2148121948.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About the Artist"
      title="Mastery in Every Line"
      description="With over a decade of experience, we transform skin into high-end canvases using specialized 3D-depth techniques."
      imageSrc="http://img.b2bpic.net/free-photo/tattoo-master-preparing-sketch-tattoo_627829-12067.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="works" data-section="works">
    <SectionErrorBoundary name="works">
          <FeaturesRevealCardsBento
      tag="Featured Works"
      title="Curated Artistry"
      description="A glimpse into our most complex and precise custom pieces."
      items={[
        {
          title: "Geometric Depth",
          description: "Complex lines creating deep 3D illusions.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/black-white-portrait-mermaid_23-2151718524.jpg",
        },
        {
          title: "Portrait Precision",
          description: "Capturing realism in every subtle shade.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-tattoo-artist-working-client-tattoo_23-2149479253.jpg",
        },
        {
          title: "Ornate Masterpiece",
          description: "Highly detailed traditional patterns refined.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/golden-lights-reflected-champagne-bottle_23-2148339624.jpg",
        },
        {
          title: "Minimalist Grace",
          description: "Subtle, refined luxury for everyday wear.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/jewellery-skull-bangle-background-with-place-text-banner-fashion-accessories_460848-14683.jpg",
        },
        {
          title: "Blackwork Art",
          description: "Deep bold shadows for high impact contrast.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/shirtless-young-man-with-tattoo-his-body-holding-sunflower-hand-against-grey-background_23-2148121940.jpg",
        },
        {
          title: "Botanical Flow",
          description: "Natural elements rendered with fluid motion.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-portrait-man-with-tattoos_23-2150774485.jpg",
        },
        {
          title: "Abstract Layers",
          description: "Unique multi-layered creative concepts.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/ink_1417-1956.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesMediaCarousel
      tag="The Process"
      title="Beyond the Ink"
      description="A meticulous, highly professional journey from initial consultation to final healed results."
      items={[
        {
          title: "Concept Design",
          description: "Collaborative sketching and digital proofing.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/braless-woman-working-indoor_23-2150490520.jpg",
        },
        {
          title: "Sterile Excellence",
          description: "Unmatched industry safety and clinical standards.",
          buttonIcon: "Shield",
          imageSrc: "http://img.b2bpic.net/free-photo/women-hanging-out-together_53876-47008.jpg",
        },
        {
          title: "Precision Artistry",
          description: "Expert application using advanced instrumentation.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/animated-screwdriver-with-screw-banner_23-2149911045.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Proven Results"
      title="By The Numbers"
      description="Years of craft and countless satisfied collectors."
      metrics={[
        {
          icon: Award,
          title: "Awards Won",
          value: "12",
        },
        {
          icon: Star,
          title: "Years Active",
          value: "10+",
        },
        {
          icon: CheckCircle,
          title: "Completed Pieces",
          value: "800+",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Collectors' Voices"
      title="Enduring Impressions"
      description="What our clients say about the experience of working with us."
      testimonials={[
        {
          name: "Alice R.",
          role: "Creative Lead",
          quote: "The detail is unbelievable. Absolute mastery.",
          imageSrc: "http://img.b2bpic.net/free-photo/ortrait-lady-pointing-up-casual-clothes-looking-confident-front-view_176474-57069.jpg",
        },
        {
          name: "Michael S.",
          role: "Entrepreneur",
          quote: "I've never seen such precision. Truly a luxury service.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-coffee-cup_23-2149628821.jpg",
        },
        {
          name: "Sarah L.",
          role: "Collector",
          quote: "The entire process was professional and welcoming.",
          imageSrc: "http://img.b2bpic.net/free-photo/tattoo-artist-doing-her-job-medium-shot_23-2149445983.jpg",
        },
        {
          name: "David W.",
          role: "Architect",
          quote: "The geometry and flow of the design are impeccable.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-tattoo-artist-doing-his-job_23-2149525943.jpg",
        },
        {
          name: "Elena M.",
          role: "Designer",
          quote: "Simply the best studio experience I've had.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-friday-sale-black-label-collection_24972-1216.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="proof" data-section="proof">
    <SectionErrorBoundary name="proof">
          <SocialProofMarquee
      tag="Industry Recognitions"
      title="Trusted by Peers"
      description="Featured in top-tier industry publications and recognized by global artist communities."
      names={[
        "INK WORLD",
        "ARTISTIC UNION",
        "GLOBAL TATTOO MASTERS",
        "STUDIO EXCELLENCE",
        "MODERN AGENCY",
        "INK PROFESSIONALS",
        "TATTOO SOCIETY",
        "CREATIVE COMMUNITY",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Common Queries"
      title="Frequently Asked Questions"
      description="Find answers to all your concerns before booking."
      items={[
        {
          question: "How do I book a session?",
          answer: "Consultation first, then booking via our portal.",
        },
        {
          question: "What is the aftercare process?",
          answer: "Detailed instructions provided post-session.",
        },
        {
          question: "Are custom designs available?",
          answer: "Custom designs are our primary focus.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Your vision awaits. Let’s collaborate."
      primaryButton={{
        text: "Book Session",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
