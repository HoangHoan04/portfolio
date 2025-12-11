import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
    projectType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
        projectType: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "pi-envelope",
      title: "Email",
      value: "contact@example.com",
      description: "Gửi email cho tôi bất cứ lúc nào",
      link: "mailto:contact@example.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "pi-phone",
      title: "Điện thoại",
      value: "+84 123 456 789",
      description: "Gọi trực tiếp (9:00 - 18:00)",
      link: "tel:+84123456789",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "pi-map-marker",
      title: "Địa chỉ",
      value: "Hà Nội, Việt Nam",
      description: "Có thể hẹn gặp trực tiếp",
      link: "#",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "pi-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/profile",
      description: "Kết nối chuyên nghiệp",
      link: "https://linkedin.com",
      color: "from-blue-600 to-blue-400",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "pi-github",
      url: "https://github.com",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: "pi-linkedin",
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: "pi-twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-300",
    },
    {
      name: "Facebook",
      icon: "pi-facebook",
      url: "https://facebook.com",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: "pi-instagram",
      url: "https://instagram.com",
      color: "hover:text-pink-400",
    },
    {
      name: "YouTube",
      icon: "pi-youtube",
      url: "https://youtube.com",
      color: "hover:text-red-400",
    },
  ];

  const faqs = [
    {
      question: "Bạn làm việc với dự án freelance không?",
      answer:
        "Có, tôi nhận các dự án freelance phù hợp với lịch trình và expertise của mình. Hãy liên hệ để thảo luận chi tiết.",
    },
    {
      question: "Thời gian response email trung bình là bao lâu?",
      answer:
        "Tôi thường trả lời email trong vòng 24 giờ vào các ngày làm việc. Các câu hỏi khẩn cấp có thể gọi điện trực tiếp.",
    },
    {
      question: "Bạn có tư vấn về technical architecture không?",
      answer:
        "Có, tôi cung cấp dịch vụ tư vấn về kiến trúc hệ thống, lựa chọn công nghệ và best practices cho dự án.",
    },
    {
      question: "Chi phí cho một dự án web thường là bao nhiêu?",
      answer:
        "Chi phí phụ thuộc vào độ phức tạp, timeline và yêu cầu cụ thể. Hãy mô tả dự án để tôi có thể báo giá chính xác.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Liên hệ với tôi
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Có ý tưởng dự án thú vị? Muốn hợp tác? Hoặc chỉ đơn giản là muốn kết
            nối? Tôi luôn sẵn sàng lắng nghe và thảo luận!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <i className="pi pi-send text-purple-400"></i>
                <span>Gửi tin nhắn</span>
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <i className="pi pi-check text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Cảm ơn bạn!
                  </h3>
                  <p className="text-gray-400">
                    Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi trong vòng
                    24 giờ.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Họ tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Nhập họ tên của bạn"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Loại dự án
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Chọn loại dự án</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="api">API Development</option>
                        <option value="consultation">Tư vấn</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Timeline dự kiến
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Chọn timeline</option>
                        <option value="1-2-weeks">1-2 tuần</option>
                        <option value="1-month">1 tháng</option>
                        <option value="2-3-months">2-3 tháng</option>
                        <option value="6-months">6 tháng+</option>
                        <option value="flexible">Linh hoạt</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Chủ đề *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Tóm tắt ngắn gọn về dự án/câu hỏi"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Ngân sách dự kiến
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Chọn ngân sách</option>
                      <option value="under-5m">Dưới 5 triệu</option>
                      <option value="5-10m">5-10 triệu</option>
                      <option value="10-20m">10-20 triệu</option>
                      <option value="20-50m">20-50 triệu</option>
                      <option value="over-50m">Trên 50 triệu</option>
                      <option value="discuss">Cần thảo luận</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Mô tả chi tiết *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Mô tả chi tiết về dự án, yêu cầu kỹ thuật, mục tiêu và bất kỳ thông tin nào khác bạn muốn chia sẻ..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="pi pi-spin pi-spinner"></i>
                        <span>Đang gửi...</span>
                      </>
                    ) : (
                      <>
                        <i className="pi pi-send"></i>
                        <span>Gửi tin nhắn</span>
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
                <span>Thông tin liên hệ</span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="block p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}
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
                <span>Mạng xã hội</span>
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
                <span>Thời gian làm việc</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Thứ 2 - Thứ 6:</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Thứ 7:</span>
                  <span className="text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Chủ nhật:</span>
                  <span className="text-gray-500">Nghỉ</span>
                </div>
                <div className="pt-3 border-t border-slate-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">
                      Đang online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Câu hỏi thường gặp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start space-x-2">
                  <i className="pi pi-question-circle text-purple-400 mt-1 flex-shrink-0"></i>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vị trí</h2>
          <p className="text-gray-400 mb-6">
            Hiện tại tôi đang làm việc tại Hà Nội, Việt Nam. Tôi cũng sẵn sàng
            làm việc remote cho các dự án phù hợp.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <i className="pi pi-map-marker text-white text-2xl"></i>
              </div>
              <div className="text-white font-semibold">Hà Nội</div>
              <div className="text-gray-400 text-sm">Việt Nam</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
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
