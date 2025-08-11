'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Shield, Brain, MapPin, Smartphone, Lock, ArrowRight, CheckCircle, Zap, Clock, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DemoSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium text-sm sm:text-base">AI-Powered WhatsApp Assistant</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 text-white leading-[1.1] pb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Meet <span className="text-green-400">Bino</span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-light mb-3">
              Stop switching between apps. Stop explaining yourself over and over.
            </p>
            <p className="text-green-400 font-semibold text-xl sm:text-2xl lg:text-3xl">
              Get AI that actually remembers you.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a href="https://bino.bot" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg sm:text-xl font-bold shadow-xl rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Try Bino Now - It's Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Button>
          </a>

          <a href="https://bino.bot" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 border-2 border-green-400/50 text-green-300 hover:bg-green-500/10 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              See How It Works
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span className="text-sm sm:text-base font-medium">End-to-End Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span className="text-sm sm:text-base font-medium">Works Instantly</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span className="text-sm sm:text-base font-medium">Trusted by Thousands</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    {
      icon: "😤",
      title: "Tired of explaining yourself repeatedly?",
      description: "Every new app, every new assistant - you start from scratch. Your preferences, your context, your history - all lost.",
      gradient: "from-red-500/20 to-orange-500/20",
      iconBg: "from-red-500 to-orange-500"
    },
    {
      icon: "📱",
      title: "App fatigue is real",
      description: "Another AI app to download, learn, and remember to use. Your phone is already cluttered with tools you barely touch.",
      gradient: "from-blue-500/20 to-purple-500/20",
      iconBg: "from-blue-500 to-purple-500"
    },
    {
      icon: "🏙️",
      title: "Lost in a new city?",
      description: "Generic recommendations that don't know you're vegetarian, hate crowds, or prefer quiet coffee shops for work.",
      gradient: "from-yellow-500/20 to-red-500/20",
      iconBg: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-red-950/10 to-gray-950" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white relative">
              Sound Familiar?
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We get it. AI assistance shouldn't feel like work.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 sm:p-8 bg-gradient-to-br ${problem.gradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 overflow-hidden`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${problem.iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={false}
              />

              {/* Icon with animated background */}
              <motion.div
                className="relative mb-6 sm:mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br ${problem.iconBg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <span className="text-2xl sm:text-3xl">{problem.icon}</span>
                </div>
              </motion.div>

              <motion.h3
                className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                {problem.title}
              </motion.h3>

              <motion.p
                className="text-gray-300 group-hover:text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
              >
                {problem.description}
              </motion.p>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-green-950/20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-green-400 leading-tight">
            What if there was a better way?
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-green-800/30 backdrop-blur-sm">
              <div className="text-6xl sm:text-8xl mb-6 sm:mb-8">💡</div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Meet Bino - AI that lives where you already chat
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                No new apps. No starting over. Just open WhatsApp and chat with an AI that
                <span className="text-green-400 font-semibold"> remembers everything about you</span>
                and gets smarter with every conversation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Brain,
      title: "Actually Remembers You",
      description: "Tell Bino you're vegetarian once - it remembers forever. No more repeating your preferences or explaining your context.",
      benefit: "Save 10+ minutes per conversation",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Smartphone,
      title: "Zero Learning Curve",
      description: "It's just WhatsApp. The app you already use daily. No new interfaces, no tutorials, no forgotten passwords.",
      benefit: "Start using immediately",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Your Personal Local Guide",
      description: "New city? Bino knows the best spots that match YOUR taste. Quiet cafes, vegan restaurants, dog-friendly parks.",
      benefit: "Discover like a local instantly",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Privacy You Can Trust",
      description: "Built on WhatsApp's end-to-end encryption. Your conversations stay between you and Bino. Always.",
      benefit: "Complete peace of mind",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Why Bino Changes Everything
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Finally, an AI assistant that works the way you do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 lg:p-10 bg-gray-900/50 border border-gray-800 rounded-2xl sm:rounded-3xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`inline-flex p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} mb-6 sm:mb-8 shadow-lg`}>
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                {feature.description}
              </p>

              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                {feature.benefit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      question: "I'm new to Bangalore, what should I do this weekend?",
      response: "Welcome to Bangalore! Based on the weather, I recommend visiting Lalbagh Botanical Garden in the morning, then head to Commercial Street for shopping and street food. Don't miss the sunset at UB City Mall rooftop - perfect for weekend vibes!",
      context: "Local Expert"
    },
    {
      question: "Remember I love spicy food and prefer South Indian breakfast",
      response: "Perfect! I've noted that you love spicy food and prefer South Indian breakfast. From now on, I'll recommend places with authentic masala dosa, spicy chutneys, and filter coffee. Want me to find the best restaurants near you?",
      context: "Contextual Memory"
    },
    {
      question: "Find me a good coffee shop for working",
      response: "Since you mentioned you're vegetarian and like quiet spaces for work, I recommend 'Third Wave Coffee' in Koramangala - they have excellent filter coffee, vegan milk options, reliable WiFi, and it's usually quiet during weekday mornings.",
      context: "Smart Recommendations"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            See Bino in Action
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Watch how Bino understands context, remembers your preferences, and provides intelligent local insights
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">Bino AI</div>
                <div className="text-xs sm:text-sm text-green-400 font-medium">Online</div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 min-h-[200px] sm:min-h-[250px]">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-end">
                  <div className="bg-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl rounded-br-lg max-w-xs sm:max-w-md shadow-lg">
                    <p className="text-sm sm:text-base">{demos[currentDemo].question}</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl rounded-bl-lg max-w-sm sm:max-w-lg shadow-lg">
                    <p className="text-sm sm:text-base">{demos[currentDemo].response}</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <span className="text-xs sm:text-sm bg-green-500/10 text-green-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                    {demos[currentDemo].context}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {demos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentDemo
                    ? 'bg-green-500 scale-125'
                    : 'bg-gray-600 hover:bg-green-400'
                    }`}
                  onClick={() => setCurrentDemo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Perfect for Everyone
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Whether you're exploring a new city or need a smart assistant, Bino adapts to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              icon: MapPin,
              title: "New to the City?",
              desc: "Get instant local recommendations, hidden gems, and insider tips from someone who knows the area like a local.",
              color: "text-blue-400"
            },
            {
              icon: Brain,
              title: "Smart Conversations",
              desc: "Bino remembers your preferences, learns from your interactions, and provides increasingly personalized responses.",
              color: "text-purple-400"
            },
            {
              icon: Lock,
              title: "Privacy First",
              desc: "Built on WhatsApp's end-to-end encryption. Your conversations stay private and secure, always.",
              color: "text-green-400"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 sm:p-8 lg:p-10 bg-gray-900/50 rounded-2xl sm:rounded-3xl border border-gray-800 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <benefit.icon className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 ${benefit.color}`} />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      text: "Finally! An AI that doesn't make me repeat myself. Bino remembered I'm lactose intolerant from our first chat.",
      author: "Sarah M.",
      role: "Digital Nomad",
      rating: 5
    },
    {
      text: "I was skeptical about another AI tool, but this just works in WhatsApp. No new app to forget about.",
      author: "Mike R.",
      role: "Business Owner",
      rating: 5
    },
    {
      text: "Moving to Amsterdam was scary, but Bino helped me find the perfect neighborhood that matched my vibe.",
      author: "Emma L.",
      role: "Student",
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Join Thousands of Happy Users
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            See what people are saying about their Bino experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg italic">
                "{testimonial.text}"
              </p>

              <div>
                <div className="font-bold text-white text-sm sm:text-base">{testimonial.author}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "10,000+", label: "Active Users" },
            { number: "50,000+", label: "Conversations" },
            { number: "4.9/5", label: "User Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 text-white leading-tight">
          Stop Repeating Yourself.
          <br />
          <span className="text-green-200">Start with Bino.</span>
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-green-100 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          Experience AI that actually remembers you and gets smarter with every conversation.
          <br />
          <span className="font-semibold">It takes 30 seconds to start.</span>
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://bino.bot" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 bg-white text-green-600 hover:bg-green-50 text-lg sm:text-xl lg:text-2xl font-black shadow-2xl border-0 rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3 sm:gap-4">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                Chat with Bino Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </span>
            </Button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white/90">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-200" />
            <span className="text-base sm:text-lg lg:text-xl font-semibold">No Credit Card</span>
            <span className="text-green-200 text-sm sm:text-base">Start chatting immediately</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-200" />
            <span className="text-base sm:text-lg lg:text-xl font-semibold">No App Download</span>
            <span className="text-green-200 text-sm sm:text-base">Works in WhatsApp</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-200" />
            <span className="text-base sm:text-lg lg:text-xl font-semibold">No Learning Curve</span>
            <span className="text-green-200 text-sm sm:text-base">Just start typing</span>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 text-white/70 text-sm sm:text-base lg:text-lg">
          <p>🔒 Your conversations are end-to-end encrypted and completely private</p>
        </div>
      </motion.div>
    </section>
  );
}