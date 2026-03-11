import emailjs from "@emailjs/browser";
import { useState } from "react";
import { EMAILJS_CONFIG } from "../config/emailjs.config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare email parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        project_type: formData.projectType || "Not specified",
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (response.status === 200) {
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            projectType: "",
          });
        }, 3000);
      }
    } catch (err) {
      console.error("Email sending failed:", err);
      setError(
        "Failed to send message. Please try again or contact me directly at hoanghoanpineapple04@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "pi-envelope",
      title: "Email",
      value: "hoanghoanpineapple04@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:hoanghoanpineapple04@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "pi-github",
      title: "GitHub",
      value: "github.com/HoangHoan04",
      description: "Check out my source code",
      link: "https://github.com/HoangHoan04",
      color: "from-gray-600 to-gray-400",
    },
    {
      icon: "pi-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/hoanghoan04",
      description: "Connect professionally",
      link: "https://www.linkedin.com/in/hoanghoan04/",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: "pi-map-marker",
      title: "Location",
      value: "Ho Chi Minh City, Vietnam",
      description: "Open to remote work",
      link: "#",
      color: "from-red-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "pi-github",
      url: "https://github.com/HoangHoan04",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: "pi-linkedin",
      url: "https://www.linkedin.com/in/hoanghoan04/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have an interesting project idea? Want to collaborate? Or just want
            to connect? I'm always open to listening and discussing!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <i className="pi pi-send text-purple-400"></i>
                <span>Send a Message</span>
              </h2>

              {error && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-start space-x-3">
                  <i className="pi pi-exclamation-circle text-red-400 text-xl mt-0.5"></i>
                  <div>
                    <h4 className="text-red-300 font-semibold mb-1">
                      Error sending message
                    </h4>
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <i className="pi pi-check text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank you!
                  </h3>
                  <p className="text-gray-400">
                    Message sent successfully to hoanghoanpineapple04@gmail.com.
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="api">API Development</option>
                      <option value="fullstack">Full-Stack Project</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Brief summary of your project or question"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Describe your project, requirements, goals, or anything you'd like to discuss..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="pi pi-spin pi-spinner"></i>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <i className="pi pi-send"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <i className="pi pi-info-circle text-purple-400"></i>
                <span>Contact Information</span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-linear-to-r ${info.color} rounded-lg flex items-center justify-center shrink-0`}
                      >
                        <i className={`pi ${info.icon} text-white text-xl`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-300 text-sm truncate">
                          {info.value}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {info.description}
                        </p>
                      </div>
                      <i className="pi pi-external-link text-gray-400 group-hover:text-purple-400 transition-colors"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <i className="pi pi-share-alt text-purple-400"></i>
                <span>Social Media</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 bg-slate-700 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 text-gray-400 ${social.color}`}
                  >
                    <i className={`pi ${social.icon} text-lg`}></i>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <i className="pi pi-clock text-purple-400"></i>
                <span>Availability</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mon - Fri:</span>
                  <span className="text-white">8:00 - 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-gray-500">Off</span>
                </div>
                <div className="pt-3 border-t border-slate-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">
                      Available for opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Location</h2>
          <p className="text-gray-400 mb-6">
            Currently based in Ho Chi Minh City, Vietnam. Open to remote work
            for suitable projects.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <i className="pi pi-map-marker text-white text-2xl"></i>
              </div>
              <div className="text-white font-semibold">Ho Chi Minh City</div>
              <div className="text-gray-400 text-sm">Vietnam</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <i className="pi pi-globe text-white text-2xl"></i>
              </div>
              <div className="text-white font-semibold">Remote</div>
              <div className="text-gray-400 text-sm">Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
