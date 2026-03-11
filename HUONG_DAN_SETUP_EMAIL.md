# Hướng Dẫn Cài Đặt Email Liên Hệ

## ✅ Đã Hoàn Thành

Form liên hệ của bạn bây giờ đã có thể gửi email trực tiếp tới **hoanghoanpineapple04@gmail.com** thông qua EmailJS.

### Tính Năng Đã Thêm:

- ✉️ Gửi email thật (không cần backend)
- ⚡ Gửi nhanh từ phía client
- 🎯 Xử lý lỗi với thông báo thân thiện
- ✅ Xác nhận thành công
- 🔄 Tự động reset form sau khi gửi thành công

---

## 🚀 Hướng Dẫn Cài Đặt

Để kích hoạt chức năng gửi email, làm theo các bước sau:

### Bước 1: Tạo Tài Khoản EmailJS

1. Truy cập https://www.emailjs.com/
2. Click **Sign Up** (miễn phí - 200 emails/tháng)
3. Xác nhận email của bạn

### Bước 2: Thêm Email Service

1. Trong dashboard EmailJS, vào **Email Services**
2. Click **Add New Service**
3. Chọn **Gmail**
4. Click **Connect Account** và cho phép truy cập Gmail (hoanghoanpineapple04@gmail.com)
5. Copy **Service ID** của bạn (dạng: `service_xxxxxx`)

### Bước 3: Tạo Email Template

1. Vào tab **Email Templates**
2. Click **Create New Template**
3. Thiết lập template:

**Nội dung Template:**

```
Tiêu đề: Liên hệ mới từ Portfolio: {{subject}}

Bạn có tin nhắn mới từ form liên hệ trên portfolio.

Từ: {{from_name}}
Email: {{from_email}}
Loại dự án: {{project_type}}

Chủ đề: {{subject}}

Nội dung:
{{message}}

---
Email này được gửi từ form liên hệ trên portfolio của bạn.
```

4. Trong tab **Settings**:
   - Đặt **To Email**: hoanghoanpineapple04@gmail.com
   - Đặt **From Name**: Portfolio Contact Form
   - Đặt **Reply To**: {{from_email}} (cho phép bạn reply trực tiếp cho người gửi)

5. Click **Save** và copy **Template ID** (dạng: `template_xxxxxx`)

### Bước 4: Lấy Public Key

1. Vào **Account** > **General**
2. Tìm **Public Key** của bạn (dạng: `xxxxxxxxxxxxxx`)
3. Copy nó

### Bước 5: Cập Nhật File Configuration

Mở file: `src/config/emailjs.config.ts`

Thay thế các giá trị placeholder bằng thông tin thật của bạn:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "public_key_thật_của_bạn",
  SERVICE_ID: "service_xxxxxx",
  TEMPLATE_ID: "template_xxxxxx",
  TO_EMAIL: "hoanghoanpineapple04@gmail.com",
};
```

### Bước 6: Test Form

1. Chạy dev server: `npm run dev`
2. Vào trang Contact
3. Điền form với dữ liệu test
4. Click **Send Message**
5. Kiểm tra email inbox (hoanghoanpineapple04@gmail.com)

---

## 📝 Các Biến Template Được Sử Dụng

Form liên hệ gửi các biến này tới EmailJS:

| Biến               | Mô Tả           | Ví Dụ                          |
| ------------------ | --------------- | ------------------------------ |
| `{{from_name}}`    | Tên người gửi   | Nguyễn Văn A                   |
| `{{from_email}}`   | Email người gửi | a@example.com                  |
| `{{subject}}`      | Chủ đề email    | Hỏi về dự án                   |
| `{{message}}`      | Nội dung chính  | Tôi muốn thuê bạn...           |
| `{{project_type}}` | Loại dự án      | Web Application                |
| `{{to_email}}`     | Email của bạn   | hoanghoanpineapple04@gmail.com |

---

## 🔒 Lưu Ý Bảo Mật

- ✅ **PUBLIC_KEY** an toàn khi để public trong code client
- ✅ EmailJS free tier giới hạn 200 emails/tháng
- ✅ Bạn có thể setup spam filters trong EmailJS dashboard
- ✅ Rate limiting tự động để chống abuse

---

## 🎨 Điều Gì Xảy Ra Khi Gửi

**Khi ai đó submit form liên hệ:**

1. ⏳ Form hiển thị "Sending..." với spinner
2. 📧 EmailJS gửi email tới hoanghoanpineapple04@gmail.com
3. ✅ Hiện thông báo thành công: "Message sent successfully"
4. 🔄 Form tự động reset sau 3 giây

**Nếu có lỗi:**

- ❌ Hiện thông báo lỗi: "Failed to send message. Please try again..."
- 📧 Hiển thị email liên hệ thay thế
- 🔄 User có thể thử lại ngay lập tức

---

## 🆘 Xử Lý Lỗi

### Lỗi "Failed to send message"?

1. **Kiểm tra config**: Đảm bảo các ID trong `emailjs.config.ts` đúng
2. **Kiểm tra EmailJS dashboard**: Xác nhận service đã kết nối
3. **Kiểm tra browser console**: Xem lỗi cụ thể
4. **Kiểm tra quota**: Free tier = 200 emails/tháng

### Email không tới?

1. **Kiểm tra spam folder** trong hoanghoanpineapple04@gmail.com
2. **Xác nhận template "To Email"** đã đặt đúng
3. **Kiểm tra EmailJS logs**: Dashboard > Email Services > Auto Logs
4. **Test EmailJS trực tiếp**: Dùng tính năng test trong dashboard

### Bị giới hạn?

- Free tier cho phép 200 emails/tháng
- Nâng cấp lên paid plan để có thêm: https://www.emailjs.com/pricing

---

## 📚 Tài Liệu Tham Khảo

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Support](https://www.emailjs.com/support/)

---

## 💡 Các Bước Tiếp Theo (Tùy Chọn)

### Thêm Email Notifications

- Nhận thông báo tức thì khi có người submit form
- Setup auto-reply cho người gửi

### Nâng Cấp Tính Năng

- Thêm hỗ trợ đính kèm file
- Implement CAPTCHA để chống spam
- Thêm email templates cho các loại dự án khác nhau

### Theo Dõi Sử Dụng

- Kiểm tra EmailJS dashboard thường xuyên
- Theo dõi tỷ lệ gửi email thành công
- Xem lại quota hàng tháng

---

**✨ Form liên hệ của bạn đã sẵn sàng nhận emails!**

Chỉ cần hoàn thành các bước setup ở trên và bạn sẽ bắt đầu nhận được tin nhắn liên hệ tại **hoanghoanpineapple04@gmail.com**.

---

## 📋 Tóm Tắt Nhanh

1. **Đăng ký EmailJS**: https://www.emailjs.com/ (FREE)
2. **Kết nối Gmail**: hoanghoanpineapple04@gmail.com
3. **Tạo Template**: Copy Service ID, Template ID
4. **Lấy Public Key**: Từ Account Settings
5. **Cập nhật**: `src/config/emailjs.config.ts`
6. **Test**: Gửi thử từ form liên hệ

**Thời gian setup: ~10 phút** ⏱️
