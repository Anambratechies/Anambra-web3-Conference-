'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Background carousel effect
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % 3);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#010147]">
                <Image src={"/logo.jpeg"} alt='' width={130} height={100} />
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#010147] transition-colors">About</button>
              <button onClick={() => scrollToSection('last-year')} className="text-gray-700 hover:text-[#010147] transition-colors">2024 Highlights</button>
              <button onClick={() => scrollToSection('volunteers')} className="text-gray-700 hover:text-[#010147] transition-colors">Volunteers</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[#010147] transition-colors">Team</button>
              <button onClick={() => scrollToSection('achievements')} className="text-gray-700 hover:text-[#010147] transition-colors">Achievements</button>
              <button onClick={() => scrollToSection('hackathon')} className="text-gray-700 hover:text-[#010147] transition-colors">Hackathon</button>
              <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-[#010147] transition-colors">Partners</button>
            </div>
            <button className="bg-[#010147] text-white px-6 py-2 rounded-full hover:bg-[#8a7fff] transition-colors">
              Register Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {/* First background image */}
          <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ${
            currentBg === 0 ? 'opacity-20' : 'opacity-0'
          }`}
               style={{
                 backgroundImage: "url('/image1.jpg')",
               }}>
          </div>
          
          {/* Second background image */}
          <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ${
            currentBg === 1 ? 'opacity-20' : 'opacity-0'
          }`}
               style={{
                 backgroundImage: "url('/AW3C-212.jpg')",
               }}>
          </div>
          
          {/* Third background image */}
          <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ${
            currentBg === 2 ? 'opacity-20' : 'opacity-0'
          }`}
               style={{
                 backgroundImage: "url('/AW3C-213.jpg')",
               }}>
          </div>
        </div>
        
        {/* Overlay with Web3 patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#010147]/80 via-[#010147]/70 to-[#010147]/80">
          <div className="absolute inset-0 opacity-20">
            {/* Hexagon pattern */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-45"></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/20 rotate-45"></div>
            <div className="absolute bottom-20 right-1/4 w-28 h-28 border border-white/20 rotate-45"></div>
          </div>
        </div>
        
        {/* Niger Bridge silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,120 L200,80 L400,60 L600,40 L800,60 L1000,80 L1200,120 Z" fill="white"/>
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Anambra Web3 Conference 2.0
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Limitless Possibilities — November 1st, 2025 | Stanel Dome, Awka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#010147] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#8a7fff] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#010147] transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#010147] mb-6">About the Conference</h2>
            <p className="text-xl text-gray-600  mx-auto leading-relaxed">
The Anambra Web3 Conference is the largest blockchain and Web3 gathering in South-East Nigeria, designed to educate, connect, and empower the next generation of builders, creators, and innovators.

Launched in 2024 with over 1,700 attendees, the conference has become a hub of innovation, attracting developers, students, startups, investors, and thought leaders from across Nigeria and beyond.</p>

          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-[#010147]">Community</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="font-semibold text-[#010147]">Blockchain</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-[#010147]">Innovation</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-[#010147]">Growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Last Year Conference Section - Improved Side by Side */}
      <section id="last-year" className="py-20 bg-[#010147]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-6">2024 Conference Highlights</h2>
            <p className="text-xl text-white max-w-4xl mx-auto">Reliving the incredible moments from our groundbreaking first edition</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Conference Pictures */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-[#9e94ff]/30 to-[#010147]/30 rounded-xl flex items-center justify-center">
                    <Image src={'/speakers.jpg'} alt='' width={600} height={600} />

                    </div>
                    <p className="text-center text-sm text-gray-600 mt-3">Opening Ceremony</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="w-full h-32 bg-gradient-to-br from-[#9e94ff]/30 to-[#010147]/30 rounded-xl flex items-center justify-center">
                    <Image src={'/lead.jpg'} alt='' width={600} height={600} />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-3">Keynote Sessions</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="w-full h-32 bg-gradient-to-br from-[#9e94ff]/30 to-[#010147]/30 rounded-xl flex items-center justify-center">
                    <Image src={'/zikora.jpg'} alt='' width={600} height={600} />

                    </div>
                    <p className="text-center text-sm text-gray-600 mt-3">Hackathon</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-[#9e94ff]/30 to-[#010147]/30 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">
                      <Image src={'/award.jpg'} alt='' width={600} height={800} />

                      </span>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-3">Awards Ceremony</p>
                  </div>
                </div>
              </div>
              
              {/* Additional conference pictures */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="w-full h-20 bg-gradient-to-br from-[#9e94ff]/20 to-[#010147]/20 rounded-lg flex items-center justify-center">
                  <Image src={'/Avax-1.JPG'} alt='' width={600} height={800} />
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="w-full h-20 bg-gradient-to-br from-[#9e94ff]/20 to-[#010147]/20 rounded-lg flex items-center justify-center">
                  <Image src={'/solana.jpg'} alt='' width={600} height={800} />
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="w-full h-20 bg-gradient-to-br from-[#9e94ff]/20 to-[#010147]/20 rounded-lg flex items-center justify-center">
                  <Image src={'/bitcoin.jpg'} alt='' width={600} height={800} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Detailed Description */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#010147] mb-6">What We Achieved in 2024</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#9e94ff] rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700">Successfully hosted 1,700+ attendees from across Nigeria and beyond</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#9e94ff] rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700">Featured 25+ world-class speakers from leading Web3 companies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#9e94ff] rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700">Launched 15 innovative projects during the hackathon</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#9e94ff] rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700">Established partnerships with 20+ blockchain organizations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#9e94ff] rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700">Created 50+ job opportunities in the Web3 space</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#010147] to-[#9e94ff] p-6 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-3">Community Impact</h4>
                <p className="text-white/90">The 2024 conference sparked a Web3 revolution in Anambra State, inspiring thousands of young people to explore blockchain technology and digital innovation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#010147] mb-3">Conference Statistics</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#9e94ff]">25+</div>
                    <div className="text-gray-600">Speakers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#9e94ff]">15</div>
                    <div className="text-gray-600">Hackathon Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#9e94ff]">20+</div>
                    <div className="text-gray-600">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#9e94ff]">48hrs</div>
                    <div className="text-gray-600">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section - Full Section with Lots of Pictures */}
      <section id="volunteers" className="py-20 bg-gradient-to-br from-[#010147]/5 to-[#9e94ff]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#010147] mb-6">Our Amazing Volunteers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">The backbone of our conference - dedicated individuals who made it all possible</p>
          </div>
          
          {/* Main Group Picture */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl">
              <div className="w-full h-[500px] rounded-xl overflow-hidden mb-4">
        <Image
                  src="/Volunteers.jpg" 
                  alt="Volunteer Team 2024" 
                  width={800} 
                  height={800} 
                  className="w-full h-full object-cover object-center"
          priority
        />
              </div>
              <p className="text-center text-lg text-[#010147] font-semibold">Volunteer Team 2024</p>
            </div>
          </div>
          
          {/* Event Pictures from Last Year */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#010147] mb-6 text-center">Event Highlights 2024</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {[
                '/AW3C-31.jpg',
                '/AW3C-79.jpg', 
                '/AW3C-124.jpg',
                '/AW3C-161.jpg',
                '/AW3C-182.jpg',
                '/AW3C-184.jpg',
                '/AW3C-195.jpg',
                '/AW3C-196.jpg',
                '/AW3C-209.jpg',
                '/AW3C-212.jpg',
                '/AW3C-213.jpg',
                '/AW3C-228.jpg'
              ].map((imageSrc, i) => (
                <div key={i} className="bg-gradient-to-br from-[#010147]/10 to-[#9e94ff]/20 rounded-xl p-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-full h-64 bg-gradient-to-br from-[#9e94ff]/30 to-[#010147]/30 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image src={imageSrc} alt='' height={1000} width={1000} className="w-full h-full object-cover"/>
                  </div>
                  <p className="text-center text-xs text-[#010147] mt-2">Highlight {i + 1}</p>
                </div>
              ))} 
            </div>
          </div>
          
          {/* Volunteer Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-[#010147] mb-3">Event Coordination</h3>
              <p className="text-gray-700">Our volunteers managed everything from registration to stage management with professionalism.</p>
            </div>
            
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#010147] mb-3">Technical Support</h3>
              <p className="text-gray-700">Provided seamless technical assistance throughout the conference and hackathon.</p>
            </div>
            
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#9e94ff]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-[#010147] mb-3">Hospitality</h3>
              <p className="text-gray-700">Ensured all attendees felt welcome and had an exceptional experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-[#010147]/5 to-[#9e94ff]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#010147] mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600">Building the future of Web3 in South-East Nigeria</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-[#9e94ff] mb-2"></div>
              <div className="text-4xl font-bold text-[#010147] mb-2">400+</div>
              <p className="text-gray-700">talents trained in Web3</p>
            </div>
            <div className="text-center bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-[#9e94ff] mb-2"></div>
              <div className="text-4xl font-bold text-[#010147] mb-2">100+</div>
              <p className="text-gray-700">developers in Cairo Smart Contract Bootcamp</p>
            </div>
            <div className="text-center bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-[#9e94ff] mb-2"></div>
              <div className="text-4xl font-bold text-[#010147] mb-2">6,000+</div>
              <p className="text-gray-700">community members across campuses</p>
            </div>
            <div className="text-center bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-[#9e94ff] mb-2"></div>
              <div className="text-4xl font-bold text-[#010147] mb-2">1,700+</div>
              <p className="text-gray-700">attendees at 2024 conference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 bg-gradient-to-br from-[#010147]/5 to-[#9e94ff]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#010147] mb-6">Why Attend?</h2>
            <p className="text-xl text-gray-600">Join us for an unforgettable Web3 experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg border border-[#9e94ff]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#9e94ff]/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎤</span>
              </div>
              <h3 className="text-2xl font-bold text-[#010147] mb-4">Learn from Global Speakers</h3>
              <p className="text-gray-700">Gain insights from industry leaders and blockchain experts from around the world.</p>
            </div>
            
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg border border-[#9e94ff]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#9e94ff]/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-[#010147] mb-4">Network with 2,500+ Builders</h3>
              <p className="text-gray-700">Connect with founders, investors, and developers in the Web3 ecosystem.</p>
            </div>
            
            <div className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl shadow-lg border border-[#9e94ff]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#9e94ff]/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-[#010147] mb-4">Join Hackathon & Ship Projects</h3>
              <p className="text-gray-700">Build and launch real Web3 projects during our intensive hackathon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Section */}
      <section id="hackathon" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#010147] mb-6">Hackathon 2025 — Build for the Future</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Collaborate, innovate, and launch projects on-chain. Join hundreds of developers in building the next generation of Web3 applications.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#9e94ff] rounded-full"></div>
                  <span className="text-gray-700">48 hours of intensive coding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#9e94ff] rounded-full"></div>
                  <span className="text-gray-700">$50,000+ in prizes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#9e94ff] rounded-full"></div>
                  <span className="text-gray-700">Mentorship from industry experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#9e94ff] rounded-full"></div>
                  <span className="text-gray-700">Direct access to investors</span>
                </div>
              </div>
              <button className="bg-[#9e94ff] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#8a7fff] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register for Hackathon
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#010147]/10 to-[#9e94ff]/20 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-[#010147] mb-4">Hackathon Highlights</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-bold text-[#010147]">Teams</div>
                    <div className="text-gray-600">100+</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-bold text-[#010147]">Projects</div>
                    <div className="text-gray-600">50+</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-bold text-[#010147]">Mentors</div>
                    <div className="text-gray-600">25+</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-bold text-[#010147]">Prizes</div>
                    <div className="text-gray-600">$50K+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section id="partners" className="py-20 bg-gradient-to-br from-[#010147]/5 to-[#9e94ff]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#010147] mb-6">Our Partners</h2>
            <p className="text-xl text-gray-600">Proud to work with industry leaders</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="bg-gradient-to-r from-[#010147]/10 to-[#9e94ff]/20 p-6 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-[#9e94ff]/30 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-[#010147]">Partner {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#010147] to-[#9e94ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Be Part of History — Anambra Web3 Conference 2.0</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us for the biggest Web3 event in South-East Nigeria. Don&apos;t miss this opportunity to shape the future of blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#010147] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#010147] transition-all duration-300 transform hover:scale-105">
              Sponsor Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010147] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">AW3C</div>
              <p className="text-gray-300">Building the future of Web3 in Anambra State</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('last-year')} className="text-gray-300 hover:text-white transition-colors">2024 Highlights</button></li>
                <li><button onClick={() => scrollToSection('volunteers')} className="text-gray-300 hover:text-white transition-colors">Volunteers</button></li>
                <li><button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-white transition-colors">Team</button></li>
                <li><button onClick={() => scrollToSection('hackathon')} className="text-gray-300 hover:text-white transition-colors">Hackathon</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">Stanel Dome, Awka</p>
              <p className="text-gray-300">November 1st, 2025</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Anambra Web3 Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
