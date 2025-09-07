import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const services = [
    'Child Custody & Support',
    'Alimony & Spousal Support', 
    'Adoption & Surrogacy',
    'Domestic Violence Protection',
    'Contract Drafting & Disputes'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/95 via-hero-bg/90 to-hero-bg/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Award Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Voted #1 Attorney 2024</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8 leading-tight"
        >
          Trusted legal expertise<br />
          for your <span className="text-accent">success</span>
        </motion.h1>

        {/* Services List */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="flex items-center space-x-3 text-primary-foreground"
            >
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-lg">{service}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-12 py-6 text-xl rounded-lg shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:scale-105"
          >
            Free Consolation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;