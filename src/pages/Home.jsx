import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Play,
  Eye,
  Zap,
  Globe,
  Users,
  Award,
  Brain,
  Heart,
  Lightbulb,
  Target,
  Sparkles,
  BookOpen,
} from "lucide-react";
import PricingPage from "./Pricing";
import { Link, useNavigate } from "react-router-dom";
import FAQSection from "../components/FAQSection";

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

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:transform hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function MentamiLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentView, setCurrentView] = useState("home"); // 'home' or 'pricing'
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Navigate to pricing route
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

  // const navigateToHome = () => {
  //   setCurrentView("home");
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // // If current view is pricing, render the pricing component
  // if (currentView === "pricing") {
  //   return (
  //     <div>
  //       {/* You can render your PricingPage component here */}
  //       <PricingPage onNavigateToHome={navigateToHome} />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative px-10">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Features", "Pricing", "Contact"].map((item, index) => (
              <button
                key={item}
                className="relative group py-2 px-4 transition-all duration-300 hover:text-purple-400 bg-transparent border-none cursor-pointer text-white"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
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
              {["Features", "About", "Pricing", "Contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    className="block w-full text-left py-2 px-4 text-white hover:text-purple-400 transition-all duration-300 bg-transparent border-none cursor-pointer"
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 px-6 py-20 min-h-screen flex items-center mt-10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🚀 Welcome to the Future of Learning
              </span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Immersive
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
              <br />
              <span className="text-white">Redefined</span>
            </h1>

            <p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            >
              Experience learning like never before with our cutting-edge AR and
              VR platform. Transform abstract concepts into interactive
              realities.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <Link
                to="/contact-us"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Get in Touch{" "}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/contact-us"
                className="group px-8 py-4 border border-gray-600 rounded-xl font-semibold text-white hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />{" "}
                  Request a Demo
                </span>
              </Link>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative">
            <div
              className="relative w-full h-96 lg:h-[500px]"
              style={{
                transform: `translateY(${scrollY * -0.3}px) rotateY(${
                  mousePosition.x * 0.01
                }deg)`,
              }}
            >
              {/* Central Orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-60 animate-pulse" />

              {/* Floating Elements */}
              <div
                className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg transform rotate-45 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 right-1/6 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Ring Elements */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-cyan-500/20 rounded-full animate-spin"
                style={{
                  animationDuration: "30s",
                  animationDirection: "reverse",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Story & Vision
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold py-5 mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Transforming Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                <div className="pl-8 space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    <span className="text-purple-400 font-semibold">
                      Mentāmī ai
                    </span>{" "}
                    was founded with a vision of transforming learning not only
                    within a classroom, but throughout life. We believe the best
                    way to achieve this is by combining our technology and
                    creativity to build an educational platform that is{" "}
                    <span className="text-cyan-400">
                      engaging, scalable, and impactful
                    </span>{" "}
                    for all learners from all walks of life.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    We have spent decades working with teams in different parts
                    of the world including{" "}
                    <span className="text-purple-400 font-medium">
                      India, Singapore and USA
                    </span>
                    , and learnt that people have multiple intelligences and
                    that each individual learns differently.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    By combining{" "}
                    <span className="text-cyan-400 font-medium">
                      AI, machine learning, AR/VR, 3D, immersive environments,
                      and gamification
                    </span>
                    , Mentāmī ai delivers lessons that are experiential,
                    innovative and accessible any time and from anywhere.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-purple-400" />
                  Our Focus
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We strive to create{" "}
                  <span className="text-purple-400 font-semibold">
                    accurate, easy-to-use, and transformative education
                  </span>{" "}
                  for all, anywhere in the world. We dedicated ourselves to
                  making this platform rigorous enough for serious learners,
                  while keeping it accessible for anyone to dive in regardless
                  of prior knowledge.
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px]">
                {/* Central Globe */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-2xl animate-pulse" />

                {/* Orbiting Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                  {/* Technology Icons */}
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "0s", animationDuration: "3s" }}
                  >
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "1s", animationDuration: "3s" }}
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "2s", animationDuration: "3s" }}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "0.5s", animationDuration: "3s" }}
                  >
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Connecting Lines */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/30 rounded-full animate-spin"
                  style={{ animationDuration: "15s" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-cyan-500/20 rounded-full animate-spin"
                  style={{
                    animationDuration: "10s",
                    animationDirection: "reverse",
                  }}
                />

                {/* Geographic Dots */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
                <div
                  className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-ping"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Brain}
              title="Multiple Intelligences"
              description="Recognizing that every individual learns differently and tailoring experiences to diverse learning styles"
              delay={0}
            />
            <ValueCard
              icon={Heart}
              title="Global Impact"
              description="Drawing from decades of experience across India, Singapore, and USA to create inclusive solutions"
              delay={200}
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              description="Combining cutting-edge AI, AR/VR, and immersive technologies to revolutionize education"
              delay={400}
            />
            <ValueCard
              icon={Target}
              title="Accessibility"
              description="Making rigorous education accessible to learners of all backgrounds and knowledge levels"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Market Potential Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🌍 Global Impact & Opportunity
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Limitless Market Potential
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming education for billions of learners worldwide across
              every age, country, and subject imaginable
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-8" />
          </div>

          {/* Main Stats Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Stats Cards */}
            <div className="space-y-8">
              {/* Global Reach Card */}
              <div className="group relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating number animation */}
                <div className="absolute top-4 right-4 opacity-10">
                  <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    7B+
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">
                        7+ Billion
                      </h3>
                      <p className="text-purple-300 font-medium">
                        Global Customers
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Potential learners from{" "}
                    <span className="text-cyan-400 font-semibold">
                      ages 3 and above
                    </span>
                    , spanning every demographic and learning need across the
                    globe. From early childhood development to lifelong
                    learning.
                  </p>
                </div>
              </div>

              {/* Geographic Coverage Card */}
              <div className="group relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 opacity-10">
                  <span className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    190+
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">
                        190+ Countries
                      </h3>
                      <p className="text-cyan-300 font-medium">
                        Universal Access
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Near-universal geographic coverage with{" "}
                    <span className="text-purple-400 font-semibold">
                      all major languages
                    </span>{" "}
                    supported, ensuring no learner is left behind regardless of
                    location or native language.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive World Visualization */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px]">
                {/* Central Globe */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-2xl animate-pulse" />

                {/* Orbiting Connection Points */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                  {/* Connection nodes representing different regions */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full animate-ping" />
                  <div
                    className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-3/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-ping"
                    style={{ animationDelay: "2s" }}
                  />
                  <div
                    className="absolute top-3/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
                    style={{ animationDelay: "2.5s" }}
                  />
                  <div
                    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full animate-ping"
                    style={{ animationDelay: "3s" }}
                  />
                  <div
                    className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full animate-ping"
                    style={{ animationDelay: "3.5s" }}
                  />
                </div>

                {/* Orbital Rings */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/20 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-cyan-500/15 rounded-full animate-spin"
                  style={{
                    animationDuration: "30s",
                    animationDirection: "reverse",
                  }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/10 rounded-full animate-spin"
                  style={{ animationDuration: "40s" }}
                />

                {/* Data streams */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-32 bg-gradient-to-t from-transparent via-purple-400/50 to-transparent animate-pulse absolute -top-16 left-1/2 transform -translate-x-1/2" />
                  <div className="w-32 h-2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse absolute top-1/2 -left-16 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>

          {/* Subject Coverage & Revenue Streams */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Subject Coverage */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Comprehensive Subject Range
                  </h3>
                  <p className="text-gray-400">
                    From basics to advanced specialization
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">
                    Academic Subjects
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Elementary Mathematics to Advanced Physics
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Biology, Chemistry & Life Sciences
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Languages, Literature & History
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Arts, Music & Creative Studies
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">
                    Professional Training
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Vocational & Technical Skills
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Professional Certifications
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Corporate Training Programs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">
                        Lifelong Learning Pathways
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Streams */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/40 hover:border-cyan-500/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Revenue Streams
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Multiple monetization channels
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">
                    Subscription-based Platform Access
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">
                    Voice-Activated Mobile Apps
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">
                    Wearable Device Integration
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">
                    In-App Premium Content
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">
                    Future: Embedded Chip Technology
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="text-center bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  The Future of Learning
                </h3>
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Imagine a world where learning adapts to every individual,
                accessible through any device, in any language, at any time.
                Where embedded technology makes education as natural as
                breathing, and where 7+ billion minds can unlock their full
                potential through immersive experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  Universal Access
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  Infinite Scale
                </span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                  Embedded Future
                </span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
                  Global Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Universal Compatibility
              </span>
            </div>
            <h2 className="p-5 text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              All Platforms Supported
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience MENTĀMĪ AI across all your devices and VR/AR platforms
              for seamless learning anywhere
            </p>
          </div>

          {/* Platform Icons Grid */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl blur-3xl" />

            <div className="relative bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-xl rounded-3xl border border-gray-700/30 p-8 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
                {/* Meta */}
                <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="w-10 h-10"
                      src="/meta-logo-facebook-svgrepo-com.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    Meta
                  </span>
                </div>

                {/* PlayStation VR */}
                <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex items-center justify-center group-hover:border-blue-400 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="w-10 h-10"
                      src="/play-station-logo-svgrepo-com.svg"
                      alt=""
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    PlayStation VR
                  </span>
                </div>

                {/* Vision Pro */}
                <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex items-center justify-center group-hover:border-gray-300 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:text-gray-300 transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                      <circle cx="8" cy="12" r="2" />
                      <circle cx="16" cy="12" r="2" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    Vision Pro
                  </span>
                </div>

                {/* MacBook */}
                <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex items-center justify-center group-hover:border-gray-300 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="w-10 h-10"
                      src="macbook-pro-svgrepo-com.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    MacBook
                  </span>
                </div>

                {/* iOS */}
                <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex items-center justify-center group-hover:border-gray-300 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="w-10 h-10"
                      src="ios-svgrepo-com.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    iPhone & iPad
                  </span>
                </div>

                {/* Android */}
                <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex items-center justify-center group-hover:border-green-400 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="w-10 h-10"
                      src="android-svgrepo-com.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    Android
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our cross-platform technology ensures a consistent, high-quality
              learning experience across all your devices
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="p-5 text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we're transforming education through immersive
              technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Eye}
              title="Immersive VR Learning"
              description="Step into virtual worlds where complex concepts become tangible experiences. From molecular structures to historical events."
              delay={0}
            />
            <FeatureCard
              icon={Zap}
              title="AR Enhancement"
              description="Overlay digital information onto the real world. Transform any space into an interactive learning environment."
              delay={200}
            />
            <FeatureCard
              icon={Globe}
              title="Global Accessibility"
              description="Learn from anywhere in the world. Our cloud-based platform ensures seamless access to all educational content."
              delay={400}
            />
            <FeatureCard
              icon={Users}
              title="Collaborative Learning"
              description="Share virtual spaces with classmates and teachers. Learn together in immersive multiplayer environments."
              delay={600}
            />
            <FeatureCard
              icon={Award}
              title="Adaptive Assessment"
              description="AI-powered evaluation system that adapts to your learning pace and provides personalized feedback."
              delay={800}
            />
            <FeatureCard
              icon={Zap}
              title="Real-time Analytics"
              description="Track your learning progress with detailed analytics and insights. Understand your strengths and improvement areas."
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <FAQSection />
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl" />

            <h2 className="p-5 text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative z-10">
              Ready to Transform Learning?
            </h2>

            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Join thousands of educators and students already experiencing the
              future of education.
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
