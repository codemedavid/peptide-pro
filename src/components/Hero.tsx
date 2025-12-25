import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Award, BookOpen, FlaskConical, Sparkles, Atom } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const badgeText = siteSettings?.hero_badge_text || 'Advanced Peptide Science';

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-navy-500 overflow-hidden">

      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(31, 111, 178, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31, 111, 178, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Glowing Orbs with Mouse Parallax */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle, #1F6FB2 0%, transparent 70%)',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #2BB673 0%, transparent 70%)',
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #1F6FB2 0%, #2BB673 50%, transparent 70%)',
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Animated DNA Helix / Molecule Structure */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Molecules */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? '#1F6FB2' : '#2BB673',
                boxShadow: `0 0 ${10 + Math.random() * 20}px ${i % 2 === 0 ? '#1F6FB2' : '#2BB673'}`,
                opacity: 0.4 + Math.random() * 0.3,
              }}
            />
          </div>
        ))}

        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1F6FB2" stopOpacity="0" />
              <stop offset="50%" stopColor="#1F6FB2" stopOpacity="1" />
              <stop offset="100%" stopColor="#2BB673" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 300 Q200 250 400 300 T800 300 T1200 300 T1600 300"
            stroke="url(#line-grad)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0 400 Q200 350 400 400 T800 400 T1200 400 T1600 400"
            stroke="url(#line-grad)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="hex-pattern" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon
                points="30,0 60,15 60,45 30,60 0,45 0,15"
                fill="none"
                stroke="#1F6FB2"
                strokeWidth="0.5"
                transform="translate(0,-4) scale(0.9)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-5xl mx-auto">

          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Premium Badge */}
            <div className="flex justify-center mb-10">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-green-500 to-primary-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />
                <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="relative">
                    <Atom className="w-5 h-5 text-green-400 animate-spin" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-0 blur-sm">
                      <Atom className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <span className="text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-primary-300 via-white to-green-300 bg-clip-text text-transparent">
                    {badgeText}
                  </span>
                  <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                <span className="text-white/90">Where </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-400 via-green-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Advanced
                  </span>
                </span>
                <br className="hidden sm:block" />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-400 via-primary-400 to-green-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: '0.5s' }}>
                    Peptide Science
                  </span>
                  {/* Glow effect under text */}
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50" />
                </span>
                <br className="hidden sm:block" />
                <span className="text-white/90">Meets </span>
                <span className="relative inline-block text-white">
                  Purpose
                  <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path
                      d="M0 6 Q50 0 100 6 T200 6"
                      stroke="url(#underline-glow)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="animate-draw"
                    />
                    <defs>
                      <linearGradient id="underline-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1F6FB2" />
                        <stop offset="50%" stopColor="#2BB673" />
                        <stop offset="100%" stopColor="#1F6FB2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                At <span className="text-white font-medium">PeptidePro</span>, we develop high-quality peptide solutions rooted in
                <span className="text-primary-400"> modern science</span>,
                <span className="text-green-400"> transparency</span>, and
                <span className="text-white"> patient-focused innovation</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* Primary CTA - Glowing Effect */}
              <button
                onClick={onShopAll}
                className="group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-green-500 bg-[length:200%_auto] animate-gradient" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-green-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                {/* Content */}
                <span className="relative flex items-center justify-center gap-2 text-white">
                  <FlaskConical className="w-5 h-5" />
                  Explore Our Peptides
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Secondary CTA - Glass Effect */}
              <button className="group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105">
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl group-hover:bg-white/10 transition-colors" />
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-primary-500 via-green-500 to-primary-500 bg-[length:200%_auto] animate-gradient" />
                  <div className="absolute inset-[1px] rounded-xl bg-slate-900" />
                </div>
                {/* Content */}
                <span className="relative flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                  Learn the Science
                </span>
              </button>
            </div>

            {/* Trust Indicators - Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: ShieldCheck, title: 'Lab Tested', subtitle: '99%+ Purity', color: 'primary' },
                { icon: Zap, title: 'Science-Backed', subtitle: 'Research Grade', color: 'green' },
                { icon: Award, title: 'Transparent', subtitle: 'Full COAs', color: 'primary' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative p-5 rounded-2xl transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors" />
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl ${item.color === 'green' ? 'bg-green-500' : 'bg-primary-500'
                    }`} />

                  <div className="relative flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color === 'green'
                        ? 'bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20'
                        : 'bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/20'
                      }`}>
                      <item.icon className={`w-6 h-6 ${item.color === 'green' ? 'text-green-400' : 'text-primary-400'}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-white/50">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes draw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-draw {
          stroke-dasharray: 200;
          animation: draw 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
