<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['type' => 'danger', 'message' => 'Only POST requests are accepted.']);
    exit;
}

function field(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

function respond(string $type, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode(['type' => $type, 'message' => $message]);
    exit;
}

function header_text(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

$name = field('name');
$email = field('email');
$subject = field('subject') !== '' ? field('subject') : 'Website enquiry';
$message = field('message');

if ($name === '' || $email === '' || $message === '') {
    respond('danger', 'Please provide your name, email address, and message.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond('danger', 'Please enter a valid email address.', 422);
}

if (preg_match('/[\r\n]/', $email . $subject)) {
    respond('danger', 'Invalid form data.', 422);
}

$to = 'contact.eclipticinnovations@gmail.com';
$safeSubject = 'Website enquiry: ' . substr($subject, 0, 120);
$body = implode("\n", [
    'New website enquiry from Ecliptic Innovations',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
    '',
    'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
]);

$headers = [
    'From: Ecliptic Innovations Website <no-reply@eclipticinnovations.in>',
    'Reply-To: ' . header_text($name) . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $safeSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond('warning', 'Your message was validated, but the mail server is not configured. Please email contact.eclipticinnovations@gmail.com directly.', 500);
}

respond('success', 'Thank you. Your message has been sent and our team will contact you shortly.');
