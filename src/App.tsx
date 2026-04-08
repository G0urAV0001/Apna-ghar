/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  HardHat, 
  Droplets, 
  FileText, 
  Hammer, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg">
            <Home className="text-brand-gold" size={24} />
          </div>
          <span className={`text-2xl font-extrabold tracking-tighter ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            APNA <span className="text-brand-gold">GHAR</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold uppercase tracking-widest hover:text-brand-gold transition-colors ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-gold text-brand-blue px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-brand-blue transition-all shadow-lg"
          >
            BUILD NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-blue text-lg font-bold border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern House" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-blue/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-brand-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">
            Architecture & Construction
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tighter">
            APNA <span className="text-brand-gold">GHAR</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-light mb-8 italic">
            Made for Comfort and Luxury
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            We are always there to help you with our best architecture in India. 
            Everything you need to build your dream home, from foundation to finishing.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl flex items-center gap-2 group"
            >
              Build Your Dream
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-blue transition-all"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-brand-gold z-0"></div>
            <img 
              src="https://picsum.photos/seed/construction-site/1000/800" 
              alt="Construction Site" 
              className="rounded-2xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-blue p-8 rounded-2xl shadow-xl z-20 hidden lg:block">
              <div className="text-brand-gold text-4xl font-black mb-1">15+</div>
              <div className="text-white text-xs uppercase tracking-widest font-bold">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase mb-4">About Apna Ghar</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight">
              Building the Future of <br />
              <span className="text-brand-gold">Indian Architecture</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Apna Ghar is dedicated to providing end-to-end home construction solutions in India. 
              From foundation to interior design, we ensure quality, reliability, and comfort. 
              Our team of expert architects and engineers work tirelessly to bring your vision to life.
            </p>
            <div className="space-y-4 mb-10">
              {['Premium Quality Materials', 'Expert Architecture Design', 'On-time Project Completion'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span className="font-bold text-brand-blue">{item}</span>
                </div>
              ))}
            </div>
            <button className="text-brand-blue font-black flex items-center gap-2 group">
              LEARN MORE ABOUT US
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    {
      title: 'Helpers',
      desc: 'Skilled labor available, 8 hours dedicated work for precision construction.',
      icon: <HardHat size={32} />,
    },
    {
      title: 'Materials',
      desc: 'High-quality materials including steel, cement, rods, gravel, and jelly stone.',
      icon: <Hammer size={32} />,
    },
    {
      title: 'Water Supply',
      desc: '24/7 clean and reliable water availability for all construction needs.',
      icon: <Droplets size={32} />,
    },
    {
      title: 'Documentation',
      desc: 'Proper government-approved documentation and full legal compliance.',
      icon: <FileText size={32} />,
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-brand-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase mb-4">Our Facilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-blue">Everything You Need</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-grey text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-brand-gold transition-colors">
                {f.icon}
              </div>
              <h4 className="text-xl font-black text-brand-blue mb-4">{f.title}</h4>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { title: 'Foundation', duration: '3 Months', desc: 'Site preparation, excavation, and solid foundation laying.', color: 'bg-brand-blue' },
    { title: '1st Floor', duration: '2 Months', desc: 'Structural framing, wall construction, and slab casting.', color: 'bg-brand-gold' },
    { title: '2nd Floor', duration: '3 Months', desc: 'Extended structure, roofing, and initial plumbing/electrical.', color: 'bg-brand-blue' },
    { title: 'Interior Design', duration: '2 Months', desc: 'Finishing touches, painting, flooring, and luxury interiors.', color: 'bg-brand-gold' },
  ];

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase mb-4">Project Timeline</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-blue">Our Construction Journey</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gray-100 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right px-8">
                  {i % 2 === 0 && (
                    <>
                      <h4 className="text-2xl font-black text-brand-blue mb-2">{step.title}</h4>
                      <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">{step.duration}</span>
                      <p className="text-gray-500 mt-4 max-w-sm ml-auto">{step.desc}</p>
                    </>
                  )}
                </div>

                <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold ${step.color}`}>
                  {i + 1}
                </div>

                <div className="flex-1 text-center md:text-left px-8">
                  {i % 2 !== 0 && (
                    <>
                      <h4 className="text-2xl font-black text-brand-blue mb-2">{step.title}</h4>
                      <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">{step.duration}</span>
                      <p className="text-gray-500 mt-4 max-w-sm">{step.desc}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Architecture Design', img: 'https://picsum.photos/seed/architecture/800/600' },
    { title: 'Construction Planning', img: 'https://picsum.photos/seed/planning/800/600' },
    { title: 'Interior Design', img: 'https://picsum.photos/seed/interior/800/600' },
    { title: 'Project Management', img: 'https://picsum.photos/seed/management/800/600' },
  ];

  return (
    <section id="services" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black">Professional Services</h3>
          </div>
          <p className="text-gray-400 max-w-md">
            We offer a comprehensive range of services to ensure your dream home is built to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={s.img} 
                alt={s.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-2xl font-black mb-4">{s.title}</h4>
                <div className="w-12 h-1 bg-brand-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: 'High-quality materials', desc: 'We never compromise on the strength and durability of your home.' },
    { title: 'Professional team', desc: 'Expert architects and engineers with decades of combined experience.' },
    { title: 'Transparent process', desc: 'Clear communication and honest pricing at every stage.' },
    { title: 'On-time delivery', desc: 'We respect your time and strictly adhere to project schedules.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase mb-4">Why Apna Ghar</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-blue mb-6">The Best Choice for <br />Your Dream Home</h3>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((r, i) => (
            <motion.div 
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-brand-grey rounded-xl flex items-center justify-center text-brand-gold">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-blue mb-2">{r.title}</h4>
                <p className="text-gray-500">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-blue rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 text-white">
            <h2 className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8">Start Your Dream Project</h3>
            <p className="text-gray-400 mb-12 text-lg">
              Ready to build? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Office</div>
                  <div className="text-lg font-bold">Bangalore, Karnataka, India</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</div>
                  <div className="text-lg font-bold">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-bold">hello@apnaghar.in</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 md:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-brand-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-brand-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">Project Type</label>
                <select className="w-full px-6 py-4 bg-brand-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all appearance-none">
                  <option>New Home Construction</option>
                  <option>Architecture Design</option>
                  <option>Interior Renovation</option>
                  <option>Commercial Project</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">Message</label>
                <textarea rows={4} placeholder="Tell us about your dream home..." className="w-full px-6 py-4 bg-brand-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 rounded-xl font-black text-lg hover:bg-brand-gold hover:text-brand-blue transition-all shadow-xl">
                START YOUR PROJECT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <Home className="text-brand-blue" size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">
                APNA <span className="text-brand-gold">GHAR</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Made for Comfort and Luxury. We are the leading architecture and construction firm in India, dedicated to building your dreams.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-brand-gold uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Facilities', 'Timeline', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-brand-gold uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {['Architecture Design', 'Construction Planning', 'Interior Design', 'Project Management', 'Legal Documentation'].map((service) => (
                <li key={service} className="text-gray-400 hover:text-brand-gold transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-brand-gold uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get the latest updates and design tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/10 px-4 py-3 rounded-lg focus:outline-none w-full" />
              <button className="bg-brand-gold text-brand-blue p-3 rounded-lg hover:bg-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-bold">
          <p>© 2026 Apna Ghar Construction. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Timeline />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
