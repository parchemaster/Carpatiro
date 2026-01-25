<?php
// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set JSON header
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

// Sanitize and validate input
$name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : '';
$email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST["phone"]) ? strip_tags(trim($_POST["phone"])) : '';
$subject = isset($_POST["subject"]) ? strip_tags(trim($_POST["subject"])) : '';
$message = isset($_POST["message"]) ? strip_tags(trim($_POST["message"])) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

// Configure recipient email - CHANGE THIS TO YOUR EMAIL
$to = "ilihod97@gmail.com.com";

// Build email subject
$email_subject = "New Contact Form Submission: " . $subject;

// Build email body
$email_body = "You have received a new message from the contact form on your website.\n\n";
$email_body .= "Here are the details:\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Phone: " . ($phone ? $phone : 'Not provided') . "\n\n";
$email_body .= "Subject: " . $subject . "\n\n";
$email_body .= "Message:\n" . $message . "\n";

// Build email headers
$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Try to send email
try {
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode([
            'success' => true,
            'message' => 'Your message was sent successfully. We will get back to you soon!'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send message. Please try again or contact us directly.'
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred while sending your message. Please try again.'
    ]);
}
?>

