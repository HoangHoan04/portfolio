export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
  SERVICE_ID: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  TEMPLATE_ID: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  TO_EMAIL: "hoanghoanpineapple04@gmail.com", // Your receiving email
};

/* 
SETUP INSTRUCTIONS:

1. Go to https://www.emailjs.com/ and create a free account

2. Add Email Service:
   - Go to Email Services
   - Click "Add New Service"
   - Choose Gmail
   - Connect your Gmail account
   - Note the Service ID

3. Create Email Template:
   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:
     * {{from_name}} - Sender's name
     * {{from_email}} - Sender's email
     * {{subject}} - Email subject
     * {{message}} - Main message
     * {{project_type}} - Type of project
   
   Example template:
   ---
   Subject: New Contact Form Submission: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   Project Type: {{project_type}}
   
   Message:
   {{message}}
   ---
   
   - Set "To Email" to: hoanghoanpineapple04@gmail.com
   - Note the Template ID

4. Get Public Key:
   - Go to Account > General
   - Copy your Public Key

5. Update this file with your credentials:
   - PUBLIC_KEY: Your public key
   - SERVICE_ID: Your service ID
   - TEMPLATE_ID: Your template ID
*/
