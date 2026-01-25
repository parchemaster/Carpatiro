# Contact Form & WhatsApp Button - Setup Guide

## ✅ What Has Been Implemented

### 1. **Contact Form Section**
- Professional contact form with fields for:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (optional)
  - Subject (required)
  - Message (required)
- Contact information sidebar with:
  - Address
  - Phone number
  - Email
  - WhatsApp link
- Form validation for required fields and email format
- Success/Error message display
- Beautiful, responsive design

### 2. **WhatsApp Floating Button**
- Fixed position button on bottom right corner
- Always visible while scrolling
- Animated pulse effect
- Direct link to WhatsApp chat
- Fully responsive (adjusts on mobile)

---

## 📧 Email Configuration Options

The contact form currently opens the user's default email client (mailto link). For production, you should use one of these backend solutions:

### **Option 1: FormSubmit (Easiest - No Backend Required)**

1. Update the phone number in index.html (line 940):
   - Replace `+23923929210` with your actual WhatsApp number
   - Format: country code + number (e.g., `+40753123456` for Romania)

2. Update the email in the JavaScript (around line 1017):
   - Replace `info@yourdomain.com` with your actual email

3. To use FormSubmit service (free):
   - Uncomment the AJAX section in the JavaScript (lines 1032-1056)
   - Replace `'https://formsubmit.co/your-email@example.com'` with your email
   - FormSubmit will send you a confirmation email on first use

### **Option 2: EmailJS (Free Tier Available)**

1. Sign up at https://www.emailjs.com/
2. Add this script to your HTML head:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
3. Replace the form submit handler with EmailJS code:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
     .then(function(response) {
       // Success
     }, function(error) {
       // Error
     });
   ```

### **Option 3: Custom PHP Backend**

Create `contact.php` file:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);
    
    $to = "your-email@example.com";
    $email_subject = "Contact Form: $subject";
    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";
    
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

Then update the AJAX URL to: `url: 'contact.php'`

---

## 🔧 Configuration Steps

### Update Contact Information

1. **In index.html (Contact Form Section - around line 828):**
   ```html
   <!-- Update address -->
   <p class="text-white"><span>Address:</span> Your Actual Address</p>
   
   <!-- Update phone -->
   <p class="text-white"><span>Phone:</span> <a href="tel:+40123456789">+40 123 456 789</a></p>
   
   <!-- Update email -->
   <p class="text-white"><span>Email:</span> <a href="mailto:contact@cleanline.ro">contact@cleanline.ro</a></p>
   
   <!-- Update WhatsApp -->
   <p class="text-white"><span>WhatsApp:</span> <a href="https://wa.me/40753123456">+40 753 123 456</a></p>
   ```

2. **In index.html (Footer Section - around line 903):**
   Update the same contact information in the footer.

3. **WhatsApp Button (around line 947):**
   ```html
   <a href="https://wa.me/40753123456?text=Hello%2C%20I%27m%20interested%20in%20your%20cleaning%20services"
   ```
   Replace `40753123456` with your WhatsApp number (include country code, no + sign).

---

## 🎨 Customization

### Change WhatsApp Button Color
In `css/style.css` (around line 9154):
```css
.whatsapp-float {
  background-color: #25d366; /* Change this color */
}

.whatsapp-float:hover {
  background-color: #128c7e; /* Change hover color */
}
```

### Change Contact Form Colors
In `index.html` (line 816):
```html
<div class="contact-wrap w-100 p-md-5 p-4" style="background: #2b98f0;">
```
Change `#2b98f0` to your preferred color.

### Adjust Button Position
In `css/style.css` (around line 9156):
```css
.whatsapp-float {
  bottom: 30px;  /* Distance from bottom */
  right: 30px;   /* Distance from right */
}
```

---

## 📱 WhatsApp Link Format

The WhatsApp URL format is:
```
https://wa.me/<COUNTRY_CODE><PHONE_NUMBER>?text=<PRE_FILLED_MESSAGE>
```

Example for Romania:
```
https://wa.me/40753123456?text=Hello%2C%20I%27m%20interested%20in%20your%20cleaning%20services
```

- **40** = Romania country code
- **753123456** = Phone number without leading 0
- URL-encode spaces as `%20` and special characters

---

## 🧪 Testing

1. **Contact Form:**
   - Fill out the form with test data
   - Click "Send Message"
   - Verify your email client opens (current setup)
   - Or check email inbox if using backend service

2. **WhatsApp Button:**
   - Click the green floating button
   - Should open WhatsApp Web or app
   - Pre-filled message should appear

---

## 🚀 Going Live Checklist

- [ ] Update all email addresses
- [ ] Update all phone numbers
- [ ] Update WhatsApp number in button
- [ ] Update physical address
- [ ] Test contact form submission
- [ ] Test WhatsApp button on mobile
- [ ] Configure email backend (FormSubmit/EmailJS/PHP)
- [ ] Test on different browsers
- [ ] Test on mobile devices

---

## 💡 Additional Features You Can Add

1. **reCAPTCHA** - Prevent spam submissions
2. **Auto-response email** - Confirm receipt to customers
3. **Form analytics** - Track submission rates
4. **Multiple language support** - For international customers
5. **Business hours indicator** - Show when you're available

---

## 📞 Support

If you need help setting up the backend or customizing the form, consider:
- Using FormSubmit.co (easiest, no coding)
- Hiring a developer for custom PHP backend
- Using EmailJS for free email service (up to 200 emails/month)

---

## 🎉 Done!

Your contact form and WhatsApp button are now ready to use. Just update the contact information and choose your email backend solution!
