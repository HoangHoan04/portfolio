# Email Contact Setup Guide

## ✅ What Was Implemented

Your contact form now sends emails directly to **hoanghoanpineapple04@gmail.com** using EmailJS.

### Features Added:

- ✉️ Real email sending functionality
- ⚡ Fast client-side email sending (no backend needed)
- 🎯 Error handling with user-friendly messages
- ✅ Success confirmation
- 🔄 Automatic form reset after successful submission

---

## 🚀 Setup Instructions

To activate the email functionality, follow these steps:

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **Sign Up** (it's free - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail**
4. Click **Connect Account** and authorize with your Gmail (hoanghoanpineapple04@gmail.com)
5. Copy your **Service ID** (looks like: `service_xxxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Set up the template:

**Template Content:**

```
Subject: New Contact from Portfolio: {{subject}}

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. In the **Settings** tab:
   - Set **To Email**: hoanghoanpineapple04@gmail.com
   - Set **From Name**: Portfolio Contact Form
   - Set **Reply To**: {{from_email}} (this allows you to reply directly to the sender)

5. Click **Save** and copy your **Template ID** (looks like: `template_xxxxxx`)

### Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxx`)
3. Copy it

### Step 5: Update Configuration File

Open the file: `src/config/emailjs.config.ts`

Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  SERVICE_ID: "service_xxxxxx",
  TEMPLATE_ID: "template_xxxxxx",
  TO_EMAIL: "hoanghoanpineapple04@gmail.com",
};
```

### Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form with test data
4. Click **Send Message**
5. Check your email inbox (hoanghoanpineapple04@gmail.com)

---

## 📝 Template Variables Used

The contact form sends these variables to EmailJS:

| Variable           | Description      | Example                        |
| ------------------ | ---------------- | ------------------------------ |
| `{{from_name}}`    | Sender's name    | John Doe                       |
| `{{from_email}}`   | Sender's email   | john@example.com               |
| `{{subject}}`      | Email subject    | Project Inquiry                |
| `{{message}}`      | Main message     | I'd like to hire you...        |
| `{{project_type}}` | Project category | Web Application                |
| `{{to_email}}`     | Your email       | hoanghoanpineapple04@gmail.com |

---

## 🔒 Security Notes

- ✅ **PUBLIC_KEY** is safe to expose in client-side code
- ✅ EmailJS limits free tier to 200 emails/month
- ✅ You can set up spam filters in EmailJS dashboard
- ✅ Rate limiting is built-in to prevent abuse

---

## 🎨 What Happens Now

**When someone submits the contact form:**

1. ⏳ The form shows "Sending..." with a spinner
2. 📧 EmailJS sends the email to hoanghoanpineapple04@gmail.com
3. ✅ Success message appears: "Message sent successfully"
4. 🔄 Form automatically resets after 3 seconds

**If there's an error:**

- ❌ Error message shown: "Failed to send message. Please try again..."
- 📧 Alternative contact email displayed
- 🔄 User can retry immediately

---

## 🆘 Troubleshooting

### "Failed to send message" error?

1. **Check configuration**: Make sure all IDs in `emailjs.config.ts` are correct
2. **Check EmailJS dashboard**: Verify your service is connected
3. **Check browser console**: Look for specific error messages
4. **Check email quota**: Free tier = 200 emails/month

### Emails not arriving?

1. **Check spam folder** in hoanghoanpineapple04@gmail.com
2. **Verify template "To Email"** is set correctly
3. **Check EmailJS logs**: Dashboard > Email Services > Auto Logs
4. **Test EmailJS directly**: Use their test feature in the dashboard

### Rate limiting?

- Free tier allows 200 emails/month
- Upgrade to paid plan for more: https://www.emailjs.com/pricing

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Support](https://www.emailjs.com/support/)

---

## 💡 Next Steps (Optional)

### Add Email Notifications

- Get instant notifications when someone submits the form
- Set up auto-reply to senders

### Upgrade Features

- Add file attachment support
- Implement CAPTCHA for spam protection
- Add email templates for different project types

### Monitor Usage

- Check EmailJS dashboard regularly
- Monitor email delivery rates
- Review monthly quota usage

---

**✨ Your contact form is now ready to receive emails!**

Just complete the setup steps above and you'll start receiving contact form submissions at **hoanghoanpineapple04@gmail.com**.
