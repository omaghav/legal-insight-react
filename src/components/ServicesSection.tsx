import { motion } from 'framer-motion';
import { Scale, Users, FileText, Shield, Heart, Home } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Law",
      description: "Divorce, child custody, adoption, and family dispute resolution with compassionate expertise.",
      features: ["Child Custody & Support", "Divorce Proceedings", "Adoption Services"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Contract Law",
      description: "Contract drafting, review, and dispute resolution for businesses and individuals.",
      features: ["Contract Drafting", "Business Agreements", "Dispute Resolution"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Criminal Defense",
      description: "Aggressive defense representation for criminal charges with proven results.",
      features: ["DUI Defense", "Domestic Violence", "Criminal Appeals"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Law",
      description: "Property transactions, disputes, and real estate litigation services.",
      features: ["Property Transactions", "Title Issues", "Real Estate Disputes"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Injury",
      description: "Maximum compensation for accident victims and their families.",
      features: ["Car Accidents", "Medical Malpractice", "Wrongful Death"]
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Business Law",
      description: "Comprehensive legal services for businesses of all sizes.",
      features: ["Business Formation", "Corporate Law", "Employment Issues"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
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
            Our Services
          </motion.p>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Comprehensive Legal{' '}
            <span className="text-accent">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From family matters to complex business disputes, we provide expert legal representation 
            across all major practice areas with personalized attention to every client.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/30 group"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;