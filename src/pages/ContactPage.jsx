import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Send,
  User,
  Building,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  Globe,
  Brain,
  Zap,
  Star,
  X,
  Menu,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    userType: "learner",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
    templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
    publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const scrollToSection = (sectionId) => {
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

  const FloatingShape = ({ className, delay = 0, children }) => (
    <div
      className={`absolute animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "8s",
      }}
    >
      {children}
    </div>
  );

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear submit error
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        user_type: formData.userType,
        to_name: "Mentami Team", // You can customize this
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log("Email sent successfully:", result);
      setIsSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          userType: "learner",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const userTypes = [
    {
      value: "learner",
      label: "Learner/Student",
      icon: User,
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "educator",
      label: "Educator/School",
      icon: Building,
      color: "from-cyan-500 to-blue-500",
    },
    {
      value: "investor",
      label: "Investor/Partner",
      icon: Star,
      color: "from-green-500 to-teal-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@mentami.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      subtitle: "By appointment only",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Shapes */}
        <FloatingShape
          className="top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
          delay={0}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse" />
        </FloatingShape>

        <FloatingShape
          className="top-60 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-lg"
          delay={2}
        >
          <Brain
            className="w-8 h-8 text-cyan-400 mx-auto mt-2 animate-spin"
            style={{ animationDuration: "12s" }}
          />
        </FloatingShape>

        <FloatingShape
          className="bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/8 to-teal-500/8 rounded-full blur-2xl"
          delay={4}
        >
          <Globe className="w-12 h-12 text-green-400 mx-auto mt-6 animate-pulse" />
        </FloatingShape>

        <FloatingShape
          className="top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-md"
          delay={6}
        >
          <Zap className="w-6 h-6 text-yellow-400 mx-auto mt-1 animate-bounce" />
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

      {/* Main Content */}
      <div className="relative z-10 px-6 py-20 mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6 group hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Start a Conversation
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mr-3">
                Get in
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your learning journey? We're here to answer
              your questions and help you get started with Mentāmī ai.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 shadow-2xl">
                {isSubmitted ? (
                  // Success State
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6 animate-bounce">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        Send us a message
                      </h2>
                      <p className="text-gray-400">
                        We'd love to hear from you
                      </p>
                    </div>

                    {/* Submit Error Display */}
                    {submitError && (
                      <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-sm">{submitError}</p>
                      </div>
                    )}

                    {/* User Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        I am a:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {userTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  userType: type.value,
                                }))
                              }
                              className={`p-4 rounded-xl border transition-all duration-300 ${
                                formData.userType === type.value
                                  ? `bg-gradient-to-r ${type.color} border-transparent text-white shadow-lg`
                                  : "border-gray-700 hover:border-purple-500 bg-gray-800/50 text-gray-300 hover:text-white"
                              }`}
                            >
                              <Icon className="w-5 h-5 mx-auto mb-2" />
                              <span className="text-sm font-medium">
                                {type.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                            errors.name
                              ? "border-red-500"
                              : "border-gray-700 hover:border-gray-600"
                          }`}
                          placeholder="Your full name"
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                            errors.email
                              ? "border-red-500"
                              : "border-gray-700 hover:border-gray-600"
                          }`}
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company/School
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                          placeholder="Organization name"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                          placeholder="Your phone number"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                          errors.subject
                            ? "border-red-500"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                        placeholder="What's this about?"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                        placeholder="Tell us more about your inquiry..."
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300"
                      >
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {info.title}
                          </h4>
                          <p className="text-purple-200">{info.content}</p>
                          <p className="text-sm text-gray-400">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div> */}

              {/* Quick Stats */}
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Mentāmī ai?
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      7B+
                    </div>
                    <div className="text-sm text-gray-300">Global Learners</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-300">AI Mentorship</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      190+
                    </div>
                    <div className="text-sm text-gray-300">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      AR/VR
                    </div>
                    <div className="text-sm text-gray-300">Immersive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
};

export default ContactPage;
