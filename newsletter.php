<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['type' => 'danger', 'message' => 'Only POST requests are accepted.']);
    exit;
}

$email = trim((string)($_POST['subscribe'] ?? ''));

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['type' => 'danger', 'message' => 'Please enter a valid email address.']);
    exit;
}

if (preg_match('/[\r\n]/', $email)) {
    http_response_code(422);
    echo json_encode(['type' => 'danger', 'message' => 'Invalid email address.']);
    exit;
}

$to = 'contact.eclipticinnovations@gmail.com';
$subject = 'New newsletter subscription';
$body = implode("\n", [
    'New newsletter subscription request',
    '',
    'Email: ' . $email,
    'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
]);

$headers = [
    'From: Ecliptic Innovations Website <no-reply@eclipticinnovations.in>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['type' => 'warning', 'message' => 'Subscription was validated, but the mail server is not configured yet.']);
    exit;
}

echo json_encode(['type' => 'success', 'message' => 'Thank you for subscribing to Ecliptic Innovations updates.']);
