<?php
/**
 * SIMPLE EMAIL TEST SCRIPT
 *
 * This script tests if your server can send emails.
 * Upload this file to your server and access it via browser.
 *
 * Example: http://yourdomain.com/test-email.php
 */

// Set your email address here
$test_email = "your-email@example.com"; // CHANGE THIS!

echo "<!DOCTYPE html>
<html>
<head>
    <title>Email Test</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
        .success { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .error { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .info { background: #d1ecf1; color: #0c5460; padding: 15px; border-radius: 5px; margin: 20px 0; }
        code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
    </style>
</head>
<body>
    <h1>📧 Email Test Script</h1>";

// Check if PHP mail function exists
if (!function_exists('mail')) {
    echo "<div class='error'>
        <strong>❌ Error:</strong> The PHP <code>mail()</code> function is not available on this server.<br>
        <strong>Solution:</strong> Contact your hosting provider or use SMTP instead.
    </div>";
    echo "</body></html>";
    exit;
}

echo "<div class='info'>
    <strong>✅ PHP mail() function is available</strong><br>
    Server: " . $_SERVER['SERVER_SOFTWARE'] . "<br>
    PHP Version: " . phpversion() . "
</div>";

// Test email sending
$to = $test_email;
$subject = "Test Email from Contact Form";
$message = "This is a test email sent from your server at " . date('Y-m-d H:i:s');
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

echo "<div class='info'>
    <strong>Attempting to send test email...</strong><br>
    To: <code>$to</code><br>
    Subject: <code>$subject</code>
</div>";

if ($to == "ilihod97@gmail.com.com") {
    echo "<div class='error'>
        <strong>⚠️ Warning:</strong> You need to update the email address!<br>
        Edit this file and change line 11: <code>\$test_email = \"your-email@example.com\";</code><br>
        Replace with your actual email address.
    </div>";
} else {
    // Try to send email
    if (mail($to, $subject, $message, $headers)) {
        echo "<div class='success'>
            <strong>✅ Email sent successfully!</strong><br>
            Check your inbox (and spam folder) for: <code>$to</code><br>
            If you received the email, your contact form should work!
        </div>";

        echo "<div class='info'>
            <strong>Next Steps:</strong><br>
            1. Check your email inbox (and spam folder)<br>
            2. If you received the email, your contact form is ready!<br>
            3. If not, you may need to configure SMTP<br>
            4. Delete this test file for security
        </div>";
    } else {
        echo "<div class='error'>
            <strong>❌ Failed to send email</strong><br>
            The mail() function failed. This could mean:<br>
            <ul>
                <li>Your server doesn't have mail configured</li>
                <li>Email is being blocked by firewall</li>
                <li>You need to use SMTP instead</li>
            </ul>
            <strong>Recommended Solutions:</strong><br>
            1. Contact your hosting provider about email configuration<br>
            2. Use SMTP (see PHP_CONTACT_SETUP.md for instructions)<br>
            3. Use a service like SendGrid or Mailgun
        </div>";
    }
}

// Server information
echo "<hr>
<h3>Server Information</h3>
<div class='info'>
    <strong>Server Details:</strong><br>
    Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "<br>
    PHP Version: " . phpversion() . "<br>
    Server Name: " . $_SERVER['SERVER_NAME'] . "<br>
    Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "
</div>";

echo "<hr>
<p style='color: #666; font-size: 12px;'>
    <strong>Security Note:</strong> Delete this file after testing for security purposes.
</p>

</body>
</html>";
?>
