<?php
// Set headers for CORS (adjust domain as needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit();
}

$name = strip_tags(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Email recipients
$recipients = [
    'avicena@avicenafahmi.com',
    'avicenafw@gmail.com'
];

// Email subject
$subject = "Portfolio Contact Form - Message from $name";

// Email body
$email_body = "You have received a new message from your portfolio contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n\n";
$email_body .= "Message:\n$message\n";

// Email headers
$headers = "From: Portfolio Contact Form <noreply@avicenafahmi.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email to both recipients
$success = true;
$failedRecipients = [];

foreach ($recipients as $recipient) {
    if (!mail($recipient, $subject, $email_body, $headers)) {
        $success = false;
        $failedRecipients[] = $recipient;
    }
}

// Return response
if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully! We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email to some recipients',
        'failed' => $failedRecipients
    ]);
}
?>
