import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scale, Users, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Expert Legal Guidance",
      description: "Our team of seasoned attorneys brings in-depth knowledge and years of experience to every case. We provide accurate legal advice, strategic planning, and robust representation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Client Attention", 
      description: "At Justiq, you're not just another case — you're our priority. We take the time to understand your unique circumstances and tailor our approach accordingly."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "With hundreds of successful cases and satisfied clients, our reputation speaks for itself. We've been voted #1 Attorney for excellent service and results."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comprehensive Protection",
      description: "From family law to contract disputes, we offer comprehensive legal services to protect your interests and secure your peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-lg mb-4"
          >
            About Us
          </motion.p>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Your legal advantage starts with{' '}
            <span className="text-accent">Justiq</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We are more than just lawyers — we are advocates for justice, fairness, and your peace of mind. 
            With years of experience across multiple legal domains, we deliver results that matter.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg"
          >
            More About Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;