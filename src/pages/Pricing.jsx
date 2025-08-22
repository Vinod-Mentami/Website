import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Check,
  Star,
  Users,
  Crown,
  Zap,
  Globe,
  Shield,
  Headphones,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Infinity,
  BookOpen,
  Award,
  Eye,
  Brain,
  Target,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FloatingOrb = ({ className, delay = 0 }) => {
  return (
    <div
      className={`absolute rounded-full blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "4s",
      }}
    />
  );
};

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular,
  buttonText,
  icon: Icon,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group transition-all duration-700 hover:scale-105 ${
        isPopular ? "lg:-translate-y-8" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card Background */}
      <div
        className={`relative bg-gradient-to-br ${
          isPopular
            ? "from-purple-900/50 to-cyan-900/50 border-purple-500/50"
            : "from-gray-900/50 to-gray-800/30 border-gray-700/50"
        } backdrop-blur-xl rounded-3xl border transition-all duration-500 overflow-hidden ${
          isHovered
            ? "border-purple-500/80 shadow-2xl shadow-purple-500/20"
            : ""
        }`}
      >
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
            isPopular
              ? "from-purple-600/10 to-cyan-600/10"
              : "from-purple-600/5 to-cyan-600/5"
          } ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="relative z-10 p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                isPopular
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                  : "bg-gradient-to-r from-gray-700 to-gray-600"
              } transition-all duration-300 group-hover:scale-110`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3
              className={`text-2xl font-bold mb-2 ${
                isPopular ? "text-purple-300" : "text-white"
              }`}
            >
              {title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-gray-400">$</span>
              <span
                className={`text-5xl font-bold ${
                  isPopular
                    ? "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {price}
              </span>
              <span className="text-gray-400 text-lg">/{period}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group/feature"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    isPopular
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                      : "bg-gray-600"
                  } transition-all duration-300 group-hover/feature:scale-110`}
                >
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden relative group/btn ${
              isPopular
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-purple-500/25"
                : "border border-gray-600 text-white hover:border-purple-500 hover:bg-purple-500/10"
            }`}
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              {buttonText}{" "}
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureHighlight = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div
      className="group bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default function PricingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Navigate to pricing route
    if (sectionId.toLowerCase() === "home") {
      navigate("/");
      setIsMenuOpen(false);
      return;
    }
    if (sectionId.toLowerCase() === "pricing") {
      navigate("/pricing");
      setIsMenuOpen(false);
      return;
    }
    if (sectionId.toLowerCase() === "contact") {
      navigate("/contact-us");
      setIsMenuOpen(false);
      return;
    }

    // Handle scrolling for other sections
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item, event) => {
    event.preventDefault();
    scrollToSection(item.toLowerCase());
  };

  const pricingPlans = [
    {
      title: "Explorer",
      price: isAnnual ? "19" : "29",
      period: isAnnual ? "month" : "month",
      description: "Perfect for individual learners exploring AR/VR education",
      icon: BookOpen,
      features: [
        "Access to 50+ AR/VR lessons",
        "Basic analytics dashboard",
        "Mobile & desktop support",
        "Community forum access",
        "Standard support",
        "1 GB cloud storage",
      ],
      buttonText: "Start Exploring",
      isPopular: false,
    },
    {
      title: "Scholar",
      price: isAnnual ? "49" : "69",
      period: isAnnual ? "month" : "month",
      description:
        "Ideal for serious students and educators seeking comprehensive learning",
      icon: Award,
      features: [
        "Access to 500+ AR/VR lessons",
        "Advanced analytics & progress tracking",
        "Collaborative virtual classrooms",
        "Custom learning paths",
        "Priority support",
        "10 GB cloud storage",
        "Offline mode available",
        "Assessment tools",
      ],
      buttonText: "Upgrade to Scholar",
      isPopular: true,
    },
    {
      title: "Institution",
      price: isAnnual ? "199" : "249",
      period: isAnnual ? "month" : "month",
      description:
        "Comprehensive solution for schools and educational institutions",
      icon: Users,
      features: [
        "Unlimited AR/VR content library",
        "Multi-user management",
        "Custom branding options",
        "Advanced reporting & insights",
        "24/7 dedicated support",
        "Unlimited cloud storage",
        "API access",
        "Custom integrations",
        "Teacher training included",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <FloatingOrb
          className="w-96 h-96 bg-purple-500/30 -top-48 -left-48"
          delay={0}
        />
        <FloatingOrb
          className="w-64 h-64 bg-cyan-500/20 top-1/3 -right-32"
          delay={1}
        />
        <FloatingOrb
          className="w-48 h-48 bg-pink-500/15 bottom-1/4 left-1/4"
          delay={2}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth", // smooth scroll back to top
              })
            }
            className="focus:outline-none"
          >
            <img src="/logo.png" className="w-56 cursor-pointer" alt="logo" />
          </button>
          {/* <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  MENTĀMĪ
                </div> */}

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "Pricing", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={(e) => handleNavClick(item, e)}
                className="relative group py-2 px-4 transition-all duration-300 hover:text-purple-400 bg-transparent border-none cursor-pointer text-white"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800/50 md:hidden">
            <div className="px-6 py-4 space-y-4">
              {["Home", "Pricing", "Contact"].map((item, index) => (
                <button
                  key={item}
                  className="block w-full text-left py-2 px-4 text-white hover:text-purple-400 transition-all duration-300 bg-transparent border-none cursor-pointer"
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-8"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Flexible Pricing for Every Learning Journey
            </span>
          </div>

          <h1
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h1>

          <p
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          >
            From individual exploration to institutional transformation, find
            the perfect plan to unlock immersive education experiences.
          </p>

          {/* Billing Toggle */}
          <div
            className="flex items-center justify-center gap-4 mb-16"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <span
              className={`text-lg font-medium transition-colors duration-300 ${
                !isAnnual ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600"
                  : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors duration-300 ${
                isAnnual ? "text-white" : "text-gray-400"
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <div className="ml-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                <span className="text-sm text-green-400 font-medium">
                  Save 30%
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.title} {...plan} delay={index * 200} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose MENTĀMĪ AI?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the most advanced AR/VR educational platform designed
              for the future of learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureHighlight
              icon={Eye}
              title="Immersive Experiences"
              description="Step into virtual worlds where abstract concepts become tangible, interactive experiences that enhance understanding and retention."
              delay={0}
            />
            <FeatureHighlight
              icon={Brain}
              title="AI-Powered Learning"
              description="Adaptive algorithms that personalize your learning journey, adjusting content difficulty and pace based on your progress."
              delay={200}
            />
            <FeatureHighlight
              icon={Globe}
              title="Global Accessibility"
              description="Access your education from anywhere in the world with cloud-based content and cross-platform compatibility."
              delay={400}
            />
            <FeatureHighlight
              icon={Users}
              title="Collaborative Spaces"
              description="Learn together in shared virtual environments, fostering teamwork and peer-to-peer knowledge exchange."
              delay={600}
            />
            <FeatureHighlight
              icon={Shield}
              title="Enterprise Security"
              description="Bank-level security and privacy protection ensuring your data and learning progress remain safe and confidential."
              delay={800}
            />
            <FeatureHighlight
              icon={Target}
              title="Proven Results"
              description="Our platform has demonstrated 3x faster learning outcomes and 85% higher engagement rates compared to traditional methods."
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl" />

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full animate-pulse" />
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-bounce" />

            <div className="relative z-10">
              <Crown className="w-16 h-16 mx-auto mb-6 text-purple-400" />

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Need a Custom Solution?
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Large institutions, enterprise clients, or unique requirements?
                Let's build a tailored AR/VR education solution that fits your
                specific needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-gray-800/50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-16 w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="w-full flex justify-center">
            {/* Logo & Brand Section */}
            <div className="w-full flex justify-between items-center ">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/logo.png"
                  className="relative w-56 cursor-pointer transition-transform duration-300 hover:scale-105"
                  alt="MENTĀMĪ logo"
                />
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-5">
                {/* Instagram */}
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer group border border-gray-700/50 hover:border-purple-500/30">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                {/* Facebook */}
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer group border border-gray-700/50 hover:border-purple-500/30">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>

                {/* LinkedIn */}
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer group border border-gray-700/50 hover:border-purple-500/30">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>

                {/* Twitter/X */}
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer group border border-gray-700/50 hover:border-purple-500/30">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Policy */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MENTĀMĪ AI. All rights reserved
            </p>

            {/* Developer Credit */}
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Designed, Developed & Maintained by</span>
              <a
                href="https://db-media.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                db media
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
