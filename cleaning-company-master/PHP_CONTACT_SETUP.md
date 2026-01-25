# 📧 Contact Form PHP Integration - Complete Setup Guide

## ✅ What Has Been Done

Your contact form is now fully integrated with the PHP backend (`contact.php`) and ready to send emails!

### Files Modified:
1. ✅ **index.html** - Form now sends data via AJAX to contact.php
2. ✅ **contact.php** - Enhanced with security, validation, and error handling

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Update Email Address in contact.php

Open `contact.php` and change **line 35**:

```php
$to = "your-email@example.com";  // ← CHANGE THIS
```

**To:**
```php
$to = "your-actual-email@domain.com";  // e.g., contact@cleanline.ro
```

### Step 2: Test Your Server

Make sure your server supports PHP mail function:

**Option A: Using XAMPP/WAMP (Local Testing)**
1. Install XAMPP or WAMP
2. Place your website in `htdocs` or `www` folder
3. Access via `http://localhost/your-folder/index.html`

**Option B: Live Server**
1. Upload all files to your web hosting
2. Your hosting must support PHP and `mail()` function
3. Access via your domain URL

### Step 3: Test the Contact Form

1. Open your website in a browser
2. Scroll to the contact form
3. Fill in all required fields
4. Click "Send Message"
5. You should see: "Your message was sent successfully..."
6. Check your email inbox (and spam folder!)

---

## 📝 How It Works

### Form Submission Flow:

1. **User fills form** → Clicks "Send Message"
2. **JavaScript validates** → Checks required fields & email format
3. **AJAX sends data** → Posts to `contact.php`
4. **PHP processes** → Validates & sanitizes data
5. **PHP sends email** → Uses PHP `mail()` function
6. **Response returned** → Success or error message
7. **User sees result** → Green success or red error message

### Data Flow:
```
User Input → JavaScript Validation → AJAX Request → PHP Validation 
→ Email Sending → Response → User Feedback
```

---

## 🔧 Advanced Configuration

### Configure SMTP (Recommended for Production)

The default PHP `mail()` function may not work on all servers. For reliable email delivery, use SMTP:

#### Option 1: PHPMailer (Most Popular)

1. Download PHPMailer: https://github.com/PHPMailer/PHPMailer
2. Replace `contact.php` with:

```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(['success' => false]);
    exit;
}

$name = strip_tags(trim($_POST["name"]));
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$phone = strip_tags(trim($_POST["phone"]));
$subject = strip_tags(trim($_POST["subject"]));
$message = strip_tags(trim($_POST["message"]));

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';  // Your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@gmail.com';  // SMTP username
    $mail->Password   = 'your-app-password';     // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email settings
    $mail->setFrom($email, $name);
    $mail->addAddress('your-business-email@example.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = "Contact Form: " . $subject;
    $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false]);
}
?>
```

#### Gmail SMTP Settings:
- Host: `smtp.gmail.com`
- Port: `587`
- Username: Your Gmail address
- Password: Use "App Password" (not your regular Gmail password)
  - Enable 2FA on Gmail
  - Go to: https://myaccount.google.com/apppasswords
  - Generate an app password for "Mail"

---

## 🛡️ Security Features Included

✅ **Input Validation** - Checks for empty fields & valid email format
✅ **XSS Protection** - Strips HTML tags from input
✅ **Email Sanitization** - Filters email addresses
✅ **Method Restriction** - Only accepts POST requests
✅ **Error Handling** - Catches and handles exceptions
✅ **Header Injection Protection** - Prevents email header manipulation

---

## 🧪 Testing & Troubleshooting

### Test Checklist:

- [ ] Form appears correctly on page
- [ ] All fields are present (Name, Email, Phone, Subject, Message)
- [ ] Required field validation works (try submitting empty)
- [ ] Email format validation works (try invalid email)
- [ ] Loading spinner appears when submitting
- [ ] Success message appears after submission
- [ ] Email arrives in inbox (check spam too)
- [ ] Form clears after successful submission

### Common Issues & Solutions:

#### ❌ "Failed to send message"

**Possible Causes:**
1. Email address in `contact.php` not updated
2. Server doesn't support `mail()` function
3. Email going to spam folder
4. Incorrect file permissions

**Solutions:**
- Update email in contact.php line 35
- Check server PHP mail configuration
- Use SMTP instead of `mail()` function
- Set file permissions to 644

#### ❌ "500 Internal Server Error"

**Possible Causes:**
1. PHP syntax error
2. File permissions issue
3. Server configuration problem

**Solutions:**
- Check PHP error log
- Verify contact.php has no syntax errors
- Set contact.php permissions to 644
- Enable error display temporarily (line 3 in contact.php)

#### ❌ Email not arriving

**Possible Causes:**
1. Going to spam folder
2. Server mail not configured
3. Email provider blocking

**Solutions:**
- Check spam/junk folder
- Use SMTP instead of mail()
- Configure SPF/DKIM records
- Use transactional email service (SendGrid, Mailgun)

#### ❌ Form submits but nothing happens

**Possible Causes:**
1. JavaScript error
2. AJAX path incorrect
3. jQuery not loaded

**Solutions:**
- Check browser console for errors (F12)
- Verify contact.php is in same folder as index.html
- Check jQuery is loaded before form script

---

## 📊 Email Providers Compatibility

### ✅ Works Great With:
- cPanel hosting (most shared hosting)
- VPS with sendmail/postfix
- Cloud hosting (AWS, DigitalOcean with mail configured)

### ⚠️ May Need SMTP Configuration:
- GoDaddy hosting
- Some cheap shared hosting
- Local development (XAMPP/WAMP)

### ❌ Won't Work:
- Static hosting (GitHub Pages, Netlify, Vercel)
- Client-side only hosting

---

## 🔥 Recommended Alternatives

If PHP mail() doesn't work, consider these services:

### 1. **SendGrid** (Free: 100 emails/day)
- Professional email delivery
- Good deliverability
- Easy integration

### 2. **Mailgun** (Free: 5,000 emails/month)
- Reliable service
- Good for transactional emails
- Simple API

### 3. **Formspree** (Free: 50 forms/month)
- No backend code needed
- Just point form to their endpoint
- Forwards to your email

### 4. **EmailJS** (Free: 200 emails/month)
- JavaScript-only solution
- No server required
- Easy setup

---

## 📧 Testing Email Delivery

### Option 1: Use Mailtrap (Development)
```php
$mail->Host = 'smtp.mailtrap.io';
$mail->Port = 2525;
$mail->Username = 'your-mailtrap-username';
$mail->Password = 'your-mailtrap-password';
```
- Sign up at https://mailtrap.io
- Test emails without sending real ones
- See exactly what customers will receive

### Option 2: Use Gmail SMTP (Production)
- Most reliable for testing
- Free with any Gmail account
- Good deliverability

---

## 🎯 Next Steps

1. **Immediate:**
   - [ ] Update email address in contact.php
   - [ ] Test form submission
   - [ ] Verify email delivery

2. **Before Launch:**
   - [ ] Add reCAPTCHA (prevent spam)
   - [ ] Set up SMTP (better deliverability)
   - [ ] Configure SPF/DKIM records
   - [ ] Test on mobile devices

3. **Optional Enhancements:**
   - [ ] Add auto-reply email to customers
   - [ ] Save submissions to database
   - [ ] Add email notification to multiple addresses
   - [ ] Integrate with CRM

---

## 💡 Pro Tips

1. **Test spam filters:** Send test emails and check spam score
2. **Use professional email:** Avoid free emails (@gmail.com) for business
3. **Add auto-reply:** Send confirmation to customer
4. **Monitor deliverability:** Track email open rates
5. **Backup submissions:** Log all form submissions to database

---

## 🆘 Need Help?

If you encounter issues:

1. **Check PHP error log** on your server
2. **Enable debugging** in contact.php (line 3: `ini_set('display_errors', 1);`)
3. **Test with simple script:**
   ```php
   <?php
   mail('your-email@example.com', 'Test', 'This is a test');
   echo 'Mail sent!';
   ?>
   ```
4. **Contact your hosting provider** about mail() function support
5. **Consider using SMTP** for guaranteed delivery

---

## ✨ Your Form is Ready!

The contact form is now fully functional and ready to receive customer inquiries. Just update the email address in `contact.php` and you're good to go! 🚀

**Important:** Remember to update your email address on **line 35** of `contact.php`!
