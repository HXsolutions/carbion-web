import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download, Mail, Phone, MapPin, Clock, Linkedin, ChevronDown } from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<HTMLDivElement>(null);
  const logisticsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const sustainabilityRef = useRef<HTMLDivElement>(null);
  const partnershipRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ delay: 0.2 });
      
      heroTl.fromTo('.hero-bg', 
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
      )
      .fromTo('.hero-wipe-panel',
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.1
      )
      .fromTo('.hero-headline span',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
        0.3
      )
      .fromTo('.hero-body',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        0.5
      )
      .fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        0.6
      )
      .fromTo('.hero-badge',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        0.4
      )
      .fromTo('.hero-deco-line',
        { scaleY: 0 },
        { scaleY: 1, duration: 0.8, ease: 'power2.out' },
        0.5
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations for all pinned sections
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll animation
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set('.hero-headline, .hero-body, .hero-cta, .hero-badge, .hero-wipe-panel', { 
              opacity: 1, x: 0, y: 0 
            });
          }
        }
      });

      heroScrollTl
        .fromTo('.hero-headline', 
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-body',
          { x: 0, opacity: 1 },
          { x: '-10vw', opacity: 0.2, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-cta',
          { x: 0, opacity: 1 },
          { x: '-10vw', opacity: 0.2, ease: 'power2.in' },
          0.72
        )
        .fromTo('.hero-wipe-panel',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0.35, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-bg',
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.6, ease: 'power2.in' },
          0.7
        );

      // Product Categories Section
      const productScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: productRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      productScrollTl
        .fromTo('.product-image-container',
          { x: '-60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.product-text-container',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.product-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.product-image-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.product-text-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.product-badge',
          { opacity: 0, ease: 'power2.in' },
          0.75
        );

      // Production Scale Section
      const productionScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: productionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      productionScrollTl
        .fromTo('.production-image-container',
          { x: '60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.production-text-container',
          { x: '-40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.production-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.production-image-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.production-text-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        );

      // Material Science Section
      const materialScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: materialRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      materialScrollTl
        .fromTo('.material-image-container',
          { x: '-60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.material-text-container',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.material-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.material-image-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.material-text-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        );

      // Logistics Section
      const logisticsScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: logisticsRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      logisticsScrollTl
        .fromTo('.logistics-image-container',
          { x: '60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.logistics-text-container',
          { x: '-40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.logistics-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.logistics-image-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.logistics-text-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        );

      // Quality Standards Section
      const qualityScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: qualityRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      qualityScrollTl
        .fromTo('.quality-image-container',
          { x: '-60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.quality-text-container',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.quality-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.quality-image-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.quality-text-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        );

      // Sustainability Section
      const sustainabilityScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sustainabilityRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      sustainabilityScrollTl
        .fromTo('.sustainability-image-container',
          { x: '60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.sustainability-text-container',
          { x: '-40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.sustainability-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.sustainability-image-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.sustainability-text-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        );

      // Partnership CTA Section
      const partnershipScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: partnershipRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      partnershipScrollTl
        .fromTo('.partnership-image-container',
          { x: '-60vw', scale: 1.05, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.partnership-text-container',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.partnership-badge',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .to('.partnership-image-container',
          { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        )
        .to('.partnership-text-container',
          { x: '18vw', opacity: 0.25, ease: 'power2.in' },
          0.7
        );

      // Contact section (flowing)
      gsap.fromTo('.contact-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (maxScroll && pinned.length > 0) {
        const pinnedRanges = pinned.map(st => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));

        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
              if (!inPinned) return value;
              
              const target = pinnedRanges.reduce((closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
                pinnedRanges[0]?.center ?? 0
              );
              return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out',
          }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="relative bg-[#0B0B0B]">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-[4vw] py-[2vh] flex justify-between items-center bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent backdrop-blur-sm">
        <div className="text-[#F4F4F4] font-bold text-xl tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
          CARBION
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('products')} className="text-link">Products</button>
          <button onClick={() => scrollToSection('production')} className="text-link">About</button>
          <button onClick={() => scrollToSection('sustainability')} className="text-link">Sustainability</button>
          <button onClick={() => scrollToSection('contact')} className="text-link">Contact</button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} id="hero" className="section-pinned z-10">
        {/* Enhanced Background */}
        <div className="hero-bg absolute inset-0">
          <img 
            src="/images/hero_kiln.jpg" 
            alt="Industrial kiln" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,11,11,0.85)] via-[rgba(11,11,11,0.4)] 50% to-[rgba(11,11,11,0.6)]" />
          <div className="absolute inset-0 bg-gradient-radial" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute left-[4vw] top-[20vh] w-px h-[40vh] deco-line-vertical hero-deco-line origin-top" />
        <div className="absolute right-[4vw] bottom-[15vh] w-px h-[30vh] deco-line-vertical hero-deco-line origin-bottom" />
        
        {/* Wipe Panel */}
        <div className="hero-wipe-panel absolute right-[-6vw] top-[10vh] w-[34vw] h-[80vh] bg-gradient-to-br from-[#2E2E2E] to-[#1E1E1E] border-l border-[rgba(198,168,92,0.1)]" />
        
        {/* Micro Badge */}
        <div className="hero-badge absolute left-[34vw] top-[10vh] flex flex-col items-center">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
          <span className="gold-pill">Industrial Grade</span>
        </div>
        
        {/* Headline with Container */}
        <div className="hero-headline absolute left-[6vw] top-[24vh] w-[46vw]">
          <div className="text-container-glass p-8 corner-accent">
            <h1 className="text-[clamp(44px,5vw,84px)] font-bold text-[#F4F4F4] leading-[1.05]" style={{ fontFamily: 'Sora, sans-serif' }}>
              <span className="block">ENGINEERED</span>
              <span className="block">CARBON</span>
              <span className="block">MATERIALS</span>
            </h1>
            <div className="hairline-gold w-[16vw] mt-6" />
          </div>
        </div>
        
        {/* Body */}
        <div className="hero-body absolute left-[6vw] top-[62vh] w-[36vw]">
          <div className="text-container p-6">
            <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
              High-performance charcoal, biochar, and activated carbon—manufactured with consistency you can measure.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="hero-cta absolute left-[6vw] top-[80vh] flex items-center gap-6">
          <button onClick={() => scrollToSection('products')} className="btn-primary">
            Explore Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-outline">
            Request a Sample
          </button>
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="font-mono-label text-[10px] text-[#A6A6A6] mb-2">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#A6A6A6] animate-bounce" />
        </div>
      </section>

      {/* Section 2: Product Categories */}
      <section ref={productRef} id="products" className="section-pinned z-20 bg-gradient-mesh">
        {/* Left Image with Frame */}
        <div className="product-image-container absolute left-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/products_charcoal_stack.jpg" 
              alt="Charcoal stack" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute left-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Content */}
        <div className="absolute right-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="product-badge absolute right-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Product Line</span>
          </div>
          
          {/* Text Container */}
          <div className="product-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">FUEL</span>
                <span className="block">AGRICULTURE</span>
                <span className="block">FILTRATION</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                From high-heat industrial fuel to soil-amending biochar and purification-grade activated carbon—our products are built for measurable performance.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button className="text-[#F4F4F4] text-sm font-medium hover:text-[#C6A85C] transition-colors flex items-center gap-2 group">
                View Product Specs
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Production Scale */}
      <section ref={productionRef} id="production" className="section-pinned z-30 bg-gradient-mesh">
        {/* Left Content */}
        <div className="absolute left-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="production-badge absolute left-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Production</span>
          </div>
          
          {/* Text Container */}
          <div className="production-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">BUILT FOR</span>
                <span className="block">VOLUME</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                Kiln-to-delivery systems designed for consistent output, tight quality control, and on-time fulfillment.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button className="text-[#F4F4F4] text-sm font-medium hover:text-[#C6A85C] transition-colors flex items-center gap-2 group">
                See Our Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute right-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Image with Frame */}
        <div className="production-image-container absolute right-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/production_facility.jpg" 
              alt="Production facility" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Material Science */}
      <section ref={materialRef} id="material" className="section-pinned z-40 bg-gradient-mesh">
        {/* Left Image with Frame */}
        <div className="material-image-container absolute left-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/material_closeup.jpg" 
              alt="Material closeup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute left-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Content */}
        <div className="absolute right-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="material-badge absolute right-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Quality</span>
          </div>
          
          {/* Text Container */}
          <div className="material-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">PRECISION</span>
                <span className="block">IN EVERY</span>
                <span className="block">BATCH</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                Controlled carbonization, consistent sizing, low ash, high fixed carbon—so your process runs stable, every time.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button className="text-[#F4F4F4] text-sm font-medium hover:text-[#C6A85C] transition-colors flex items-center gap-2 group">
                Review Specifications
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Global Logistics */}
      <section ref={logisticsRef} id="logistics" className="section-pinned z-50 bg-gradient-mesh">
        {/* Left Content */}
        <div className="absolute left-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="logistics-badge absolute left-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Logistics</span>
          </div>
          
          {/* Text Container */}
          <div className="logistics-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">DELIVERED</span>
                <span className="block">WORLDWIDE</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                We manage bulk shipments, documentation, and delivery windows—so your supply chain stays predictable.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button className="text-[#F4F4F4] text-sm font-medium hover:text-[#C6A85C] transition-colors flex items-center gap-2 group">
                Talk to Logistics
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute right-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Image with Frame */}
        <div className="logistics-image-container absolute right-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/logistics_port.jpg" 
              alt="Logistics port" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 6: Quality Standards */}
      <section ref={qualityRef} id="quality" className="section-pinned z-[60] bg-gradient-mesh">
        {/* Left Image with Frame */}
        <div className="quality-image-container absolute left-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/lab_testing.jpg" 
              alt="Lab testing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute left-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Content */}
        <div className="absolute right-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="quality-badge absolute right-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Compliance</span>
          </div>
          
          {/* Text Container */}
          <div className="quality-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">TESTED</span>
                <span className="block">DOCUMENTED</span>
                <span className="block">CERTIFIED</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                Calorific value, ash content, moisture, particle size—measured and reported to match your compliance needs.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button className="text-[#F4F4F4] text-sm font-medium hover:text-[#C6A85C] transition-colors flex items-center gap-2 group">
                Request Certificates
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Sustainability */}
      <section ref={sustainabilityRef} id="sustainability" className="section-pinned z-[70] bg-gradient-mesh">
        {/* Left Content */}
        <div className="absolute left-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="sustainability-badge absolute left-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Sustainability</span>
          </div>
          
          {/* Text Container */}
          <div className="sustainability-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">RESPONSIBLE</span>
                <span className="block">SOURCING</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                We prioritize waste-to-value feedstocks, efficient kilns, and lower-emission logistics—because performance should not cost the future.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button className="text-[#F4F4F4] text-sm font-medium hover:text-[#C6A85C] transition-colors flex items-center gap-2 group">
                Read Our Sustainability Note
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute right-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Image with Frame */}
        <div className="sustainability-image-container absolute right-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/sustainability_field.jpg" 
              alt="Sustainability field" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 8: Partnership CTA */}
      <section ref={partnershipRef} id="partnership" className="section-pinned z-[80] bg-gradient-mesh">
        {/* Left Image with Frame */}
        <div className="partnership-image-container absolute left-[2vw] top-[5vh] w-[42vw] h-[90vh]">
          <div className="image-frame image-glow w-full h-full">
            <img 
              src="/images/partnership_hands.jpg" 
              alt="Partnership" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute left-[46vw] top-[15vh] w-px h-[70vh] deco-line-vertical" />
        
        {/* Right Content */}
        <div className="absolute right-0 top-0 w-[52vw] h-full flex flex-col justify-center px-[4vw]">
          {/* Badge */}
          <div className="partnership-badge absolute right-[6vw] top-[10vh] flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C6A85C]/50 to-[#C6A85C]/50 mb-2" />
            <span className="gold-pill">Partner With Us</span>
          </div>
          
          {/* Text Container */}
          <div className="partnership-text-container text-container-glass p-10 corner-accent">
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">LET'S BUILD</span>
                <span className="block">YOUR NEXT</span>
                <span className="block">SUPPLY</span>
              </h2>
              <div className="hairline-gold w-[12vw] mt-6" />
            </div>
            
            {/* Body */}
            <div className="w-[36vw] mb-8">
              <p className="text-[#A6A6A6] text-[clamp(14px,1.2vw,18px)] leading-relaxed">
                Tell us your volume, specs, and delivery window. We'll return a clear proposal—with pricing, timelines, and compliance docs.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider z-[85] relative" />

      {/* Section 9: Contact */}
      <section ref={contactRef} id="contact" className="relative z-[90] bg-[#0B0B0B] min-h-screen py-[12vh] bg-gradient-mesh">
        <div className="contact-content px-[6vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <div className="text-container-glass p-10 corner-accent">
              <h2 className="text-[clamp(34px,3.6vw,56px)] font-bold text-[#F4F4F4] mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                Request a Quote
              </h2>
              <p className="text-[#A6A6A6] mb-8">
                We typically reply within 1–2 business days.
              </p>
              
              <form className="space-y-5">
                <div>
                  <label className="font-mono-label text-[#A6A6A6] block mb-2">Name</label>
                  <input 
                    type="text" 
                    className="input-enhanced"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono-label text-[#A6A6A6] block mb-2">Email</label>
                  <input 
                    type="email" 
                    className="input-enhanced"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono-label text-[#A6A6A6] block mb-2">Company</label>
                  <input 
                    type="text" 
                    className="input-enhanced"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="font-mono-label text-[#A6A6A6] block mb-2">Product Interest</label>
                  <select className="input-enhanced">
                    <option value="" className="bg-[#0B0B0B]">Select a product</option>
                    <option value="charcoal" className="bg-[#0B0B0B]">Premium Charcoal & Briquettes</option>
                    <option value="biochar" className="bg-[#0B0B0B]">Biochar (Agricultural Carbon)</option>
                    <option value="industrial" className="bg-[#0B0B0B]">Industrial Carbon Materials</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono-label text-[#A6A6A6] block mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="input-enhanced resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Request
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
            
            {/* Info Column */}
            <div className="lg:pl-8 space-y-8">
              {/* Contact Info Card */}
              <div className="info-card p-8 corner-accent">
                <h3 className="font-mono-label text-[#C6A85C] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(198,168,92,0.1)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#C6A85C]" />
                    </div>
                    <div>
                      <p className="text-[#A6A6A6] font-mono-label mb-1">Email</p>
                      <p className="text-[#F4F4F4]">info@carbion.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(198,168,92,0.1)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#C6A85C]" />
                    </div>
                    <div>
                      <p className="text-[#A6A6A6] font-mono-label mb-1">Phone</p>
                      <p className="text-[#F4F4F4]">+92-XXX-XXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(198,168,92,0.1)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#C6A85C]" />
                    </div>
                    <div>
                      <p className="text-[#A6A6A6] font-mono-label mb-1">Location</p>
                      <p className="text-[#F4F4F4]">Industrial Zone, City, Country</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(198,168,92,0.1)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#C6A85C]" />
                    </div>
                    <div>
                      <p className="text-[#A6A6A6] font-mono-label mb-1">Business Hours</p>
                      <p className="text-[#F4F4F4]">Mon–Fri, 08:00–18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Why Choose Card */}
              <div className="info-card p-8 corner-accent">
                <h3 className="font-mono-label text-[#C6A85C] mb-6">Why Choose CARBION?</h3>
                <ul className="space-y-4">
                  {[
                    'Controlled production process',
                    'Scalable manufacturing model',
                    'Consistent quality standards',
                    'Export-ready supply capability',
                    'Long-term industrial vision'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#A6A6A6]">
                      <span className="w-2 h-2 bg-[#C6A85C] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="relative z-[100] bg-[#0B0B0B] border-t border-[rgba(46,46,46,0.5)] py-16 px-[6vw] bg-gradient-mesh">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo */}
          <div>
            <h3 className="text-[#F4F4F4] font-bold text-2xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              CARBION
            </h3>
            <p className="text-[#A6A6A6] text-sm leading-relaxed">
              Engineered carbon. Built to perform.
            </p>
            <div className="hairline-gold w-16 mt-6" />
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h4 className="font-mono-label text-[#C6A85C] mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('products')} className="text-[#A6A6A6] hover:text-[#F4F4F4] transition-colors text-sm">Products</button></li>
              <li><button onClick={() => scrollToSection('quality')} className="text-[#A6A6A6] hover:text-[#F4F4F4] transition-colors text-sm">Quality</button></li>
              <li><button onClick={() => scrollToSection('sustainability')} className="text-[#A6A6A6] hover:text-[#F4F4F4] transition-colors text-sm">Sustainability</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-[#A6A6A6] hover:text-[#F4F4F4] transition-colors text-sm">Contact</button></li>
            </ul>
          </div>
          
          {/* Column 3: Social */}
          <div>
            <h4 className="font-mono-label text-[#C6A85C] mb-6">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(198,168,92,0.08)] border border-[rgba(198,168,92,0.2)] flex items-center justify-center text-[#A6A6A6] hover:text-[#C6A85C] hover:border-[rgba(198,168,92,0.4)] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(198,168,92,0.08)] border border-[rgba(198,168,92,0.2)] flex items-center justify-center text-[#A6A6A6] hover:text-[#C6A85C] hover:border-[rgba(198,168,92,0.4)] transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="mt-16 pt-8 border-t border-[rgba(46,46,46,0.4)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A6A6A6] text-sm">
            © 2026 CARBION. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#A6A6A6] hover:text-[#F4F4F4] transition-colors text-sm">Privacy</a>
            <a href="#" className="text-[#A6A6A6] hover:text-[#F4F4F4] transition-colors text-sm">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
