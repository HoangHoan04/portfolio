<div align="center">

  # ✨ Hoàng Đình Hoàn — Portfolio Website ✨
  
  <p align="center">
    <strong>Giao diện Portfolio Hiện đại • Lấy cảm hứng từ Instagram, macOS & Cyberpunk UI • Tối ưu hóa Hiệu năng</strong>
  </p>

  <p align="center">
    <a href="https://hoanghoan04.github.io/portfolio/">
      <img src="https://img.shields.io/badge/🌐_Live_Demo-hoanghoan04.github.io-blue?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/HoangHoan04/portfolio">
      <img src="https://img.shields.io/badge/⭐_GitHub-HoangHoan04-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
    </a>
    <a href="mailto:hoanghoanpineapple04@gmail.com">
      <img src="https://img.shields.io/badge/✉️_Email-hoanghoanpineapple04-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
  </p>

</div>

---

## 🌟 Giới Thiệu (Overview)

Trang Portfolio cá nhân của **Hoàng Đình Hoàn** — Kỹ sư phần mềm (**Full-Stack Developer** với 2+ năm kinh nghiệm làm việc chính thức tại **APETECH Solutions**). 

Website được thiết kế mang phong cách kết hợp giữa **Instagram Feed, macOS Dock & Cyberpunk Terminal**, tập trung vào trải nghiệm mượt mà, hiệu ứng chuyển động tinh tế và tối ưu hóa hiển thị trên mọi thiết bị (Responsive Mobile & Desktop).

---

## 🚀 Các Tính Năng Nổi Bật (Key Features)

| Tính Năng | Mô Tả Chi Tiết |
| :--- | :--- |
| 🖥️ **Màn hình Khởi động Cyberpunk** | Hiệu ứng Terminal Boot BIOS Sequence ấn tượng khi vừa truy cập trang, ghi nhớ trạng thái theo phiên duyệt (`sessionStorage`). |
| 📱 **Bố cục Instagram Feed & Story** | Story Highlights công nghệ (React, ASP.NET Core, NestJS, TypeScript,...), Grid bài viết dự án với popup modal chi tiết. |
| 🌐 **Đa Ngôn Ngữ (i18n Song Ngữ)** | Chuyển đổi linh hoạt và tức thì giữa **Tiếng Việt 🇻🇳** và **English 🇬🇧** không cần tải lại trang. |
| 🌗 **Chế độ Sáng / Tối (Dark & Light Mode)** | Theme engine đồng bộ cùng màu sắc gradient Instagram rực rỡ và hiệu ứng kính mờ Glassmorphism. |
| 🧭 **Thanh Sidebar Thu Nhỏ Thông Minh** | Sidebar dạng icon tinh gọn cố định với hệ thống **Floating Tooltip Popup** hiển thị mượt mà khi rê chuột. |
| 🐙 **Tích hợp GitHub Thời Gian Thực** | Biểu đồ đóng góp GitHub Contributions Grid, bộ lọc kho lưu trữ theo ngôn ngữ, tìm kiếm repo và thống kê Stars/Forks. |
| 📬 **Liên Hệ Đa Kênh Thông Minh** | Gửi email qua **EmailJS**, thông báo tức thì về **Telegram Bot**, sao lưu dữ liệu local và nút mở nhanh Gmail/Mail Client. |
| ⚡ **Hiệu Năng & SEO Cao Cấp** | Xây dựng trên nền tảng **Next.js 16 (Turbopack)**, xuất trang tĩnh SSG siêu tốc, hỗ trợ Favicon SVG thích ứng nền. |

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

### Frontend & Core
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
- **Ngôn ngữ:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & CSS Variables Design System
- **Animation:** [Motion (Framer Motion)](https://motion.dev/)
- **Iconography:** [Lucide Icons](https://lucide.dev/) & [Phosphor Icons](https://phosphoricons.com/)

### API & Dịch Vụ Mở Rộng
- **Email Service:** [@emailjs/browser](https://www.emailjs.com/)
- **Push Notification:** [Telegram Bot API](https://core.telegram.org/bots/api)
- **GitHub Integration:** GitHub REST API v3 & GraphQL API
- **Deployment:** GitHub Actions CI/CD pipeline ➔ [GitHub Pages](https://pages.github.com/)

---

## 📁 Cấu Trúc Thư Mục (Project Structure)

```plaintext
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD tự động build & deploy lên GitHub Pages
├── public/
│   ├── favicon.svg               # Favicon SVG thích ứng nền sáng/tối
│   ├── icons/                    # Bộ icon SVG công nghệ và mạng xã hội
│   ├── images/                   # Hình ảnh avatar, banner và dự án
│   └── files/                    # File PDF CV tải xuống
├── src/
│   ├── app/                      # Next.js App Router Pages
│   │   ├── about/                # Trang Giới thiệu & Thông tin cá nhân
│   │   ├── api/                  # Server Route Handlers (Local Dev & Server)
│   │   │   ├── contact/          # API nhận & lưu trữ tin nhắn liên hệ
│   │   │   ├── github-repos/     # API lấy danh sách repo GitHub
│   │   │   ├── github-views/     # API thống kê lượt xem GitHub
│   │   │   └── visitors/         # API đếm lượt khách ghé thăm
│   │   ├── contact/              # Trang Form liên hệ đa kênh & Telegram
│   │   ├── education/            # Trang Học vấn & Các môn học chuyên sâu
│   │   ├── experience/           # Trang Kinh nghiệm làm việc thực tế
│   │   ├── post/[id]/            # Trang chi tiết bài viết / dự án
│   │   ├── projects/             # Trang Tổng hợp Dự án & GitHub Repositories
│   │   ├── skills/               # Trang Ma trận Kỹ năng chuyên môn
│   │   ├── layout.tsx            # Root Layout bọc Theme & Ngôn ngữ
│   │   └── page.tsx              # Trang chủ Profile Dashboard
│   ├── components/               # React Components tái sử dụng
│   │   ├── layout/               # Sidebar thu nhỏ, BottomNav, LayoutShell
│   │   ├── modal/                # PostModal chi tiết dự án
│   │   ├── posts/                # PostCard, PostGrid
│   │   ├── profile/              # ProfileHeader, Story Highlights, Tabs
│   │   ├── projects/             # GitHubReposSection, Contributions
│   │   └── ui/                   # Button, Badge, ThemeToggle, LanguageToggle
│   ├── constants/                # Dữ liệu tĩnh, Icon map, Enum, Profile data
│   ├── contexts/                 # LocaleContext (Quản lý đa ngôn ngữ vi/en)
│   ├── lib/                      # Hàm tiện ích utils, Telegram notification
│   ├── locales/                  # File JSON bản dịch: vi.json & en.json
│   └── types/                    # TypeScript interfaces & type definitions
├── .env.example                  # Mẫu cấu hình biến môi trường
└── package.json                  # Dependencies & npm scripts
```

---

## 💻 Cài Đặt & Chạy Môi Trường Local (Getting Started)

### 1. Clone dự án về máy:
```bash
git clone https://github.com/HoangHoan04/portfolio.git
cd portfolio
```

### 2. Cài đặt các gói thư viện:
```bash
npm install
```

### 3. Cấu hình biến môi trường:
Tạo file `.env` từ file mẫu `.env.example`:
```bash
cp .env.example .env
```

Điền các thông tin của bạn vào file `.env`:
```env
# Build export flag
NEXT_PUBLIC_EXPORT=false

# GitHub API Token (Tùy chọn - tăng giới hạn rate limit khi fetch contributions)
GITHUB_TOKEN=your_github_personal_access_token

# EmailJS Configuration (Nhận email từ form liên hệ)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_TO_EMAIL=hoanghoanpineapple04@gmail.com

# Telegram Notification (Tùy chọn - nhận tin nhắn tức thì về Telegram)
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id
```

### 4. Chạy Development Server:
```bash
npm run dev
```
Mở trình duyệt và truy cập: **[http://localhost:3000](http://localhost:3000)**

### 5. Build kiểm tra bản Production:
```bash
npm run build
```

---

## 📬 Liên Hệ & Kết Nối (Contact Me)

- **Họ và Tên:** Hoàng Đình Hoàn
- **Vị Trí:** Software Engineer / Full-Stack Developer
- **Email:** [hoanghoanpineapple04@gmail.com](mailto:hoanghoanpineapple04@gmail.com)
- **LinkedIn:** [linkedin.com/in/hoangdinhhoan](https://www.linkedin.com/in/hoangdinhhoan)
- **GitHub:** [github.com/HoangHoan04](https://github.com/HoangHoan04)
- **Portfolio Live:** [https://hoanghoan04.github.io/portfolio/](https://hoanghoan04.github.io/portfolio/)

---

<div align="center">
  <sub>Bản quyền © 2025 - 2026 Hoàng Đình Hoàn. Xây dựng với ❤️ và Next.js.</sub>
</div>
