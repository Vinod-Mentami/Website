import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  School,
  TrendingUp,
  Sparkles,
  Brain,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("learners");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const faqData = {
    learners: {
      title: "For Learners",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          question: "What is Mentāmī ai?",
          answer:
            "Mentāmī ai is an AI-assisted lifelong learning companion designed to guide individuals from early childhood to adulthood. It provides personalized, interactive, and adaptive learning experiences across multiple formats—text, audio, video, games, AR/VR—making education engaging, equitable, and accessible worldwide.",
        },
        {
          question: "Who is Mentāmī ai for?",
          answer:
            "Anyone aged 3 and above. Our adaptive platform tailors content to preschoolers, K–12 students, university learners, working professionals, and lifelong learners seeking personal growth.",
        },
        {
          question:
            "How is Mentāmī ai different from traditional learning platforms?",
          answer:
            "Unlike static e-learning, Mentāmī ai continuously adapts to each learner's pace, style, and interests. It uses AI to provide mentorship-like guidance, removing the limitations of classrooms, rigid syllabi, and one-size-fits-all education.",
        },
        {
          question: "What subjects or skills can I learn on Mentāmī ai?",
          answer:
            "A wide range—from academic subjects like math, science, and languages, to life skills, creative arts, coding, career coaching, wellness, and beyond. Content expands as users grow.",
        },
        {
          question: "How does Mentāmī ai personalize learning?",
          answer:
            "It tracks user progress, identifies strengths and weaknesses, adapts content difficulty, and recommends learning paths—much like having a personal mentor available 24/7.",
        },
        {
          question: "Is Mentāmī ai available in multiple languages?",
          answer:
            "Yes. Mentāmī ai is designed to support all major global languages, ensuring accessibility to over 7 billion learners worldwide.",
        },
        {
          question: "Is Mentāmī ai safe for children?",
          answer:
            "Absolutely. We use strict content curation, parental controls, and AI safety filters to ensure age-appropriate learning.",
        },
      ],
    },
    partners: {
      title: "For Partners",
      icon: School,
      color: "from-cyan-500 to-blue-500",
      questions: [
        {
          question: "How can schools or organizations use Mentāmī ai?",
          answer:
            "Institutions can integrate Mentāmī ai as a supplemental or primary learning tool. It supports blended classrooms, remote learning, and skill development programs.",
        },
        {
          question: "Can teachers and mentors use Mentāmī ai?",
          answer:
            "Yes. Teachers can track student progress, assign adaptive lessons, and use Mentāmī ai's analytics to better understand individual learning needs.",
        },
        {
          question: "Does Mentāmī ai replace teachers?",
          answer:
            "No. Mentāmī ai enhances teaching by personalizing education and reducing administrative workload, freeing teachers to focus on mentorship and creativity.",
        },
      ],
    },
    investors: {
      title: "For Investors",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      questions: [
        {
          question: "What is the market size for Mentāmī ai?",
          answer:
            "The global EdTech market is projected to reach $404B by 2025 and $1T by 2030. With Mentāmī ai targeting learners worldwide (3+ years), our addressable market spans over 7 billion people across 190+ countries.",
        },
        {
          question: "How does Mentāmī ai make money?",
          answer:
            "Through subscriptions (freemium + premium tiers), in-app purchases, and future hardware integrations (wearables, chips).",
        },
        {
          question: "What's the competitive advantage of Mentāmī ai?",
          answer:
            "Unlike niche e-learning apps, Mentāmī ai is designed as a lifelong mentor, evolving with the learner's journey from childhood through adulthood—making it sticky, scalable, and globally inclusive.",
        },
        {
          question: "What stage is Mentāmī ai at now?",
          answer:
            "We have built our minimum viable product (MVP) and are preparing to scale. Next milestones include pilot programs, user acquisition, and strategic partnerships.",
        },
        {
          question: "Why should investors back Mentāmī ai?",
          answer:
            "Education is one of the largest unmet global needs. Mentāmī ai's unique AI-driven approach, scalable model, and universal applicability position it to disrupt the archaic education system and capture massive market share.",
        },
      ],
    },
  };

  const FloatingShape = ({ className, delay = 0, children }) => (
    <div
      className={`absolute animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "6s",
      }}
    >
      {children}
    </div>
  );

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const CategoryIcon = faqData[activeCategory].icon;

  return (
    <section className="relative z-10 px-6 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingShape
          className="top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
          delay={0}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse" />
        </FloatingShape>

        <FloatingShape
          className="top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-lg"
          delay={2}
        >
          <Brain
            className="w-8 h-8 text-cyan-400 mx-auto mt-2 animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </FloatingShape>

        <FloatingShape
          className="bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/8 to-teal-500/8 rounded-full blur-2xl"
          delay={4}
        >
          <Globe className="w-12 h-12 text-green-400 mx-auto mt-6 animate-pulse" />
        </FloatingShape>

        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6 group hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Got Questions? We've Got Answers
            </span>
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about Mentāmī ai and how it's
            revolutionizing education for learners worldwide
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(faqData).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setOpenFAQ(null);
                }}
                className={`group relative px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-500 hover:scale-105 transform ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg shadow-purple-500/25`
                    : "border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white hover:bg-purple-500/10"
                }`}
              >
                <span className="flex items-center gap-3 font-medium">
                  <Icon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeCategory === key
                        ? "scale-110"
                        : "group-hover:scale-110"
                    }`}
                  />
                  {category.title}
                </span>

                {activeCategory === key && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-50 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* FAQ Content */}
        <div className="relative">
          {/* Category Header with Icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-r ${faqData[activeCategory].color} shadow-lg`}
            >
              <CategoryIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {faqData[activeCategory].title}
            </h3>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqData[activeCategory].questions.map((faq, index) => (
              <div
                key={index}
                className={`group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 ${
                  openFAQ === index
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/10"
                    : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-white pr-4 group-hover:text-purple-200 transition-colors duration-300">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-400 transition-all duration-500 flex-shrink-0 ${
                      openFAQ === index
                        ? "rotate-180 text-cyan-400"
                        : "group-hover:scale-110"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you understand how Mentāmī ai can transform
              your learning journey.
            </p>
           <Link
              to="/contact-us"
              className="group relative inline-flex items-center justify-center px-8 py-4 
             bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl 
             font-semibold text-white overflow-hidden 
             transition-all duration-300 hover:scale-105 
             hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Sliding shine effect */}
              <span
                className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full 
               group-hover:translate-x-full transition-transform duration-700"
              />

              {/* Button content */}
              <span className="relative flex items-center gap-2 z-10">
                Get in Touch
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
