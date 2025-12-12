import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, FlaskConical, MessageCircle } from 'lucide-react';

type HeroProps = {
  onShopAll?: () => void;
};

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-24 lg:pt-14 lg:pb-32">
      {/* Radial Gradient Background: Blue glow in center fading to white outer */}
      <div
        className="absolute inset-0 pointer-events-none transform scale-125"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 0, 128, 0.10) 0%, rgba(0, 0, 128, 0.03) 40%, rgba(255, 255, 255, 0) 80%)'
        }}
      />

      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-theme-accent/5 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-6 md:mb-8 animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-secondary"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-600 tracking-wide">
              Premium Peptide Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-theme-text mb-4 md:mb-6 tracking-tight leading-tight">
            Premium <span className="text-gold-500">Peptides</span> & Essentials
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 block mt-2">From the Lab to You — Simplifying Science, One Dose at a Time.</span>
          </h1>

          {/* Tagline */}
          <p className="text-sm md:text-base text-theme-accent font-medium mb-4 md:mb-6">
            Quality-tested products. Reliable performance. Trusted by our community.
          </p>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            SlimDose Peptides is your all-in-one destination for high-quality peptides, peptide pens, and the essential accessories you need for a smooth and confident wellness routine. We provide a full range of premium products to support different goals — from vitality and recovery to skin health and body wellness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <button
              className="btn-primary w-full sm:w-auto group flex items-center justify-center gap-2"
              onClick={onShopAll}
            >
              Shop All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/coa"
              className="px-8 py-3 rounded-lg font-medium text-theme-text hover:text-navy-900 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Lab Tests & Quality Assurance
              <ShieldCheck className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators - Horizontal scrollable on mobile */}
          <div className="flex flex-row items-stretch gap-4 md:gap-8 border-t border-gray-100 pt-8 md:pt-12 max-w-3xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex flex-col items-center gap-2 group min-w-[100px] flex-1">
              <div className="p-2 md:p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-theme-accent/30 transition-colors">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-theme-accent" />
              </div>
              <p className="font-semibold text-theme-text text-xs md:text-sm text-center">Lab Verified</p>
              <p className="text-[10px] md:text-xs text-gray-400 text-center">Purity Guaranteed</p>
            </div>
            <div className="flex flex-col items-center gap-2 group min-w-[100px] flex-1">
              <div className="p-2 md:p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-theme-secondary/30 transition-colors">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-theme-secondary" />
              </div>
              <p className="font-semibold text-theme-text text-xs md:text-sm text-center">Premium Quality</p>
              <p className="text-[10px] md:text-xs text-gray-400 text-center">Sourced for Excellence</p>
            </div>
            <div className="flex flex-col items-center gap-2 group min-w-[100px] flex-1">
              <div className="p-2 md:p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-theme-accent/30 transition-colors">
                <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-theme-accent" />
              </div>
              <p className="font-semibold text-theme-text text-xs md:text-sm text-center">Real-World Tested</p>
              <p className="text-[10px] md:text-xs text-gray-400 text-center">Verified by Our Team</p>
            </div>
          </div>

          {/* Real-World Tested Section */}
          <div className="mt-12 md:mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FlaskConical className="w-5 h-5 text-gold-500" />
              <h3 className="font-bold text-theme-text">Real-World Tested</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Every peptide and supply item is used and verified by our team and community before being offered in our shop. Quality you can feel — results you can trust.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

