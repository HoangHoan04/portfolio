# 🚀 Deploy Portfolio lên Vercel (Siêu Dễ!)

## ✅ Tại sao chọn Vercel?

- ✅ **Setup cực nhanh** - 2 phút là xong!
- ✅ **Auto deploy** - Push code là deploy tự động
- ✅ **Free SSL** - HTTPS miễn phí
- ✅ **Custom domain miễn phí** - Add domain dễ dàng
- ✅ **CDN toàn cầu** - Website nhanh ở mọi nơi
- ✅ **Preview deployment** - Mỗi commit có preview link

---

## 📋 Bước 1: Cài Vercel CLI (Optional - có thể skip)

```bash
npm install -g vercel
```

---

## 🌐 Bước 2: Deploy qua Vercel Dashboard (Recommend - Dễ nhất!)

### 2.1. Tạo tài khoản Vercel

1. Vào https://vercel.com/
2. Click **Sign Up**
3. Chọn **Continue with GitHub**
4. Authorize Vercel truy cập GitHub

### 2.2. Import Project

1. Sau khi login, click **Add New...** → **Project**
2. Chọn **Import Git Repository**
3. Tìm repo: `HoangHoan04/portfolio`
4. Click **Import**

### 2.3. Configure Project

Vercel sẽ tự động detect Vite project. Chỉ cần:

**Framework Preset:** `Vite`
**Root Directory:** `./`
**Build Command:** `npm run build`
**Output Directory:** `dist`

### 2.4. Add Environment Variables

Click **Environment Variables**, thêm 4 biến:

| Name | Value |
|------|-------|
| `VITE_EMAILJS_PUBLIC_KEY` | `MEsbisniCRiTxcFNK` |
| `VITE_EMAILJS_SERVICE_ID` | `service_ealixt6` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_jd1ac5j` |
| `VITE_TO_EMAIL` | `hoanghoanpineapple04@gmail.com` |

**Important:** Áp dụng cho cả 3 environments:
- ✅ Production
- ✅ Preview  
- ✅ Development

### 2.5. Deploy!

Click **Deploy** và đợi ~1-2 phút!

🎉 **DONE!** Vercel sẽ cho bạn link: `https://portfolio-xxx.vercel.app`

---

## 🎯 Hoặc Deploy qua CLI (Nhanh hơn)

```bash
# Login
vercel login

# Deploy
vercel

# Làm theo hướng dẫn:
# - Setup and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio (hoặc tên khác)
# - Directory? ./
# - Override settings? No

# Sau khi deploy xong, set environment variables:
vercel env add VITE_EMAILJS_PUBLIC_KEY
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_TO_EMAIL

# Deploy production
vercel --prod
```

---

## 🌐 Bước 3: Add Custom Domain (Nếu có)

### 3.1. Trên Vercel Dashboard

1. Vào project vừa deploy
2. Click **Settings** → **Domains**
3. Nhập domain của bạn (VD: `example.com`)
4. Click **Add**

### 3.2. Config DNS (Tùy nhà cung cấp domain)

Vercel sẽ hiển thị DNS records cần thêm:

#### Ví dụ:

**Type:** A
**Name:** @ (hoặc your-domain)
**Value:** `76.76.21.21`

**Type:** CNAME
**Name:** www
**Value:** `cname.vercel-dns.com`

### 3.3. Đợi DNS propagate (5 phút - 24 giờ)

Vercel sẽ tự động verify và bật SSL!

---

## 🔄 Auto Deploy

Mỗi khi bạn push code:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

→ Vercel tự động detect và deploy! 🚀

---

## 📊 Monitoring

Vào Vercel Dashboard để xem:
- ✅ Deployment logs
- ✅ Analytics (traffic, performance)
- ✅ Error tracking
- ✅ Preview deployments

---

## 🎨 Preview Deployments

Mỗi khi tạo Pull Request hoặc push lên branch khác:
- Vercel tự động tạo preview link
- Test trước khi merge vào main

---

## 💡 Tips

### 1. Vercel CLI Commands:

```bash
vercel          # Deploy to preview
vercel --prod   # Deploy to production
vercel dev      # Run local dev với Vercel environment
vercel logs     # Xem deployment logs
vercel env ls   # List environment variables
```

### 2. Custom Domain Examples:

- Root: `example.com` → Add A record
- WWW: `www.example.com` → Add CNAME record
- Subdomain: `portfolio.example.com` → Add CNAME record

### 3. Environment Variables:

Cần update env var? Vào:
**Settings** → **Environment Variables** → Edit

Sau khi sửa, cần **Redeploy** để áp dụng:
**Deployments** → Click `...` → **Redeploy**

---

## 🐛 Troubleshooting

### 1. Build Failed
- Check **Deployment Logs** trong Vercel
- Đảm bảo `npm run build` work ở local
- Check dependencies trong `package.json`

### 2. Environment Variables không work
- Check đã add đủ 4 variables chưa
- Đảm bảo áp dụng cho Production
- Redeploy sau khi thêm env vars

### 3. Contact Form không gửi
- Check browser console có lỗi không
- Verify EmailJS credentials
- Check network tab khi submit form

### 4. Custom domain không connect
- Check DNS records đã đúng chưa
- Dùng https://dnschecker.org/ để check DNS
- Đợi DNS propagate (có thể mất 24h)

---

## 📈 So sánh Vercel vs GitHub Pages

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Setup | ✅ 2 phút | ⏰ 10 phút |
| Auto deploy | ✅ Có | ✅ Có |
| Custom domain | ✅ Free & Easy | ⚠️ Config DNS phức tạp |
| SSL | ✅ Auto | ✅ Auto |
| Preview deploys | ✅ Có | ❌ Không |
| Analytics | ✅ Built-in | ❌ Cần Google Analytics |
| Build time | ⚡ Nhanh hơn | ⏰ Chậm hơn |
| CDN | 🌍 Global | 🌐 GitHub CDN |

**→ Vercel win!** 🏆

---

## ✅ Quick Start Checklist

- [ ] Tạo tài khoản Vercel với GitHub
- [ ] Import project `HoangHoan04/portfolio`
- [ ] Add 4 environment variables
- [ ] Deploy!
- [ ] (Optional) Add custom domain
- [ ] Test website và contact form

---

## 🎉 Done!

Website của bạn đã live tại:
- Default: `https://portfolio-xxx.vercel.app`
- Custom domain (nếu có): `https://your-domain.com`

Mỗi lần push code → Auto deploy → Website update! 🚀

**Cần help config domain?** Cho tôi biết tên miền bạn mua và nhà cung cấp (GoDaddy, Namecheap, Cloudflare, etc.) để hướng dẫn cụ thể!
