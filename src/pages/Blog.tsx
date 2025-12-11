import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Tối ưu hóa Performance React Application",
      excerpt:
        "Hướng dẫn chi tiết về các kỹ thuật tối ưu hóa hiệu suất cho ứng dụng React, từ code splitting đến lazy loading.",
      content:
        "Trong bài viết này, chúng ta sẽ khám phá các kỹ thuật quan trọng để tối ưu hóa hiệu suất cho ứng dụng React...",
      category: "react",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      date: "2025-01-15",
      readTime: "8 phút",
      views: 1250,
      featured: true,
      author: "Nguyễn Văn A",
      image: "/api/placeholder/600/300",
    },
    {
      id: 2,
      title: "Xây dựng REST API với Node.js và Express",
      excerpt:
        "Hướng dẫn từ A-Z về cách xây dựng một REST API hoàn chính với Node.js, Express và MongoDB.",
      content:
        "REST API là backbone của hầu hết các ứng dụng web hiện đại. Trong bài này, chúng ta sẽ học cách xây dựng...",
      category: "backend",
      tags: ["Node.js", "Express", "API", "MongoDB"],
      date: "2025-01-10",
      readTime: "12 phút",
      views: 980,
      featured: true,
      author: "Nguyễn Văn A",
      image: "/api/placeholder/600/300",
    },
    {
      id: 3,
      title: "Microservices Architecture với Docker",
      excerpt:
        "Khám phá kiến trúc microservices và cách triển khai với Docker containers để scale ứng dụng.",
      content:
        "Microservices architecture đang trở thành xu hướng phổ biến trong việc phát triển ứng dụng lớn...",
      category: "devops",
      tags: ["Docker", "Microservices", "Architecture", "DevOps"],
      date: "2025-01-05",
      readTime: "15 phút",
      views: 750,
      featured: false,
      author: "Nguyễn Văn A",
      image: "/api/placeholder/600/300",
    },
    {
      id: 4,
      title: "TypeScript Best Practices cho Developer",
      excerpt:
        "Tổng hợp các best practices và patterns khi sử dụng TypeScript trong dự án thực tế.",
      content:
        "TypeScript đã trở thành lựa chọn hàng đầu cho nhiều developer JavaScript. Trong bài này...",
      category: "typescript",
      tags: ["TypeScript", "Best Practices", "JavaScript", "Development"],
      date: "2024-12-28",
      readTime: "10 phút",
      views: 1100,
      featured: false,
      author: "Nguyễn Văn A",
      image: "/api/placeholder/600/300",
    },
    {
      id: 5,
      title: "Machine Learning với Python cho Beginners",
      excerpt:
        "Bài viết nhập môn về Machine Learning với Python, từ cài đặt environment đến training model đầu tiên.",
      content:
        "Machine Learning đang là xu hướng hot trong ngành công nghệ. Bài viết này sẽ giúp bạn...",
      category: "ai",
      tags: ["Python", "Machine Learning", "AI", "Data Science"],
      date: "2024-12-20",
      readTime: "18 phút",
      views: 1400,
      featured: true,
      author: "Nguyễn Văn A",
      image: "/api/placeholder/600/300",
    },
    {
      id: 6,
      title: "Deployment ứng dụng lên AWS EC2",
      excerpt:
        "Hướng dẫn chi tiết cách deploy ứng dụng Node.js lên AWS EC2 với nginx và PM2.",
      content:
        "Việc deploy ứng dụng lên production luôn là bước quan trọng. Trong bài này chúng ta sẽ học...",
      category: "devops",
      tags: ["AWS", "EC2", "Deployment", "nginx", "PM2"],
      date: "2024-12-15",
      readTime: "14 phút",
      views: 890,
      featured: false,
      author: "Nguyễn Văn A",
      image: "/api/placeholder/600/300",
    },
  ];

  const categories = [
    { id: "all", name: "Tất cả", icon: "pi-th-large", count: blogPosts.length },
    {
      id: "react",
      name: "React",
      icon: "pi-code",
      count: blogPosts.filter((post) => post.category === "react").length,
    },
    {
      id: "backend",
      name: "Backend",
      icon: "pi-server",
      count: blogPosts.filter((post) => post.category === "backend").length,
    },
    {
      id: "devops",
      name: "DevOps",
      icon: "pi-cog",
      count: blogPosts.filter((post) => post.category === "devops").length,
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: "pi-code",
      count: blogPosts.filter((post) => post.category === "typescript").length,
    },
    {
      id: "ai",
      name: "AI/ML",
      icon: "pi-chart-line",
      count: blogPosts.filter((post) => post.category === "ai").length,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Blog & Tutorials
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            Chia sẻ kiến thức, kinh nghiệm và insights về development,
            technology trends và best practices.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Bài viết nổi bật
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredPosts.slice(0, 2).map((post) => (
              <article
                key={post.id}
                className="overflow-hidden transition-all duration-300 border group bg-slate-800 rounded-2xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
              >
                <div className="relative flex items-center justify-center h-64 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                  <i className="text-6xl text-white pi pi-file-edit"></i>
                  <div className="absolute inset-0 transition-all duration-300 bg-black/20 group-hover:bg-black/10"></div>
                  <div className="absolute px-3 py-1 text-sm font-bold text-yellow-900 bg-yellow-500 rounded-full top-4 left-4">
                    <i className="mr-1 pi pi-star"></i>
                    Featured
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4 space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <i className="pi pi-calendar"></i>
                      <span>{formatDate(post.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <i className="pi pi-clock"></i>
                      <span>{post.readTime}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <i className="pi pi-eye"></i>
                      <span>{post.views.toLocaleString()}</span>
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                    {post.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-400">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm text-gray-300 border rounded-full bg-slate-700 border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                        A
                      </div>
                      <span className="text-gray-300">{post.author}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-purple-400 transition-colors hover:text-purple-300">
                      <span>Đọc thêm</span>
                      <i className="pi pi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                <i className={`pi ${category.icon}`}></i>
                <span>{category.name}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-slate-700">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden transition-all duration-300 border group bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
            >
              <div className="relative flex items-center justify-center h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                <i className="text-4xl text-white pi pi-file-edit"></i>
                <div className="absolute inset-0 transition-all duration-300 bg-black/20 group-hover:bg-black/10"></div>
                {post.featured && (
                  <div className="absolute px-2 py-1 text-xs font-bold text-yellow-900 bg-yellow-500 rounded-full top-3 right-3">
                    <i className="pi pi-star"></i>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3 space-x-3 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <i className="pi pi-calendar"></i>
                    <span>{formatDate(post.date)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="pi pi-clock"></i>
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-400 line-clamp-2">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-gray-300 border rounded bg-slate-700 border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-300 border rounded bg-slate-700 border-slate-600">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <i className="pi pi-eye"></i>
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                  <button className="text-sm text-purple-400 transition-colors hover:text-purple-300">
                    <i className="pi pi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="p-8 mb-20 border bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl border-purple-500/20">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Đăng ký nhận thông báo
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-400">
              Nhận thông báo về những bài viết mới nhất và tutorials hữu ích qua
              email.
            </p>
            <div className="flex max-w-md gap-4 mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 text-white placeholder-gray-400 border rounded-lg bg-slate-800 border-slate-600 focus:outline-none focus:border-purple-500"
              />
              <button className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <i className="pi pi-send"></i>
                <span>Đăng ký</span>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="p-8 mb-20 border bg-slate-800/50 rounded-2xl border-slate-700">
          <h2 className="mb-8 text-2xl font-bold text-center text-white">
            Thống kê Blog
          </h2>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl font-bold text-purple-400">
                {blogPosts.length}
              </div>
              <div className="text-gray-400">Bài viết</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-pink-400">
                {blogPosts
                  .reduce((total, post) => total + post.views, 0)
                  .toLocaleString()}
              </div>
              <div className="text-gray-400">Lượt xem</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400">
                {categories.length - 1}
              </div>
              <div className="text-gray-400">Chủ đề</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-green-400">50+</div>
              <div className="text-gray-400">Subscribers</div>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">Tags phổ biến</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
              .sort()
              .map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 text-gray-300 transition-all duration-300 border rounded-lg bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-purple-500 hover:text-white"
                >
                  #{tag}
                </button>
              ))}
          </div>

          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
          >
            <i className="pi pi-envelope"></i>
            <span>Đề xuất chủ đề blog</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
