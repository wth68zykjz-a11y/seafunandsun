<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'POST only']);
  exit;
}

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Missing config.php']);
  exit;
}
$config = require $configPath;

$honeypot = trim((string)($_POST['companyWebsite'] ?? ''));
if ($honeypot !== '') {
  echo json_encode(['ok' => true, 'reference' => 'SFS-RECEIVED']);
  exit;
}

$name = trim((string)($_POST['name'] ?? ''));
$email = strtolower(trim((string)($_POST['email'] ?? '')));
$phone = trim((string)($_POST['phone'] ?? ''));
$destination = trim((string)($_POST['destination'] ?? ''));
$travelWindow = trim((string)($_POST['travelWindow'] ?? ''));
$partySize = trim((string)($_POST['partySize'] ?? ''));
$cabin = trim((string)($_POST['cabin'] ?? ''));
$trip = trim((string)($_POST['trip'] ?? ''));
$plans = trim((string)($_POST['plans'] ?? ''));
if ($trip !== '') {
  $plans = $trip . ". " . $plans;
}
$optIn = isset($_POST['marketingOptIn']) ? 1 : 0;

if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($destination) < 2 || strlen($plans) < 8) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Name, email, destination, and travel plans are required.']);
  exit;
}

$reference = 'SFS-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 6));

try {
  $pdo = new PDO(
    'mysql:host=' . $config['host'] . ';dbname=' . $config['name'] . ';charset=utf8mb4',
    $config['user'],
    $config['pass'],
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
  $stmt = $pdo->prepare(
    'insert into inquiries (reference, name, email, phone, destination, travel_window, party_size, cabin, plans, marketing_opt_in)
     values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  );
  $stmt->execute([$reference, $name, $email, $phone, $destination, $travelWindow, $partySize, $cabin, $plans, $optIn]);

  $notify = isset($config['notify']) ? (string)$config['notify'] : 'Booking@Seafunandsun.com';
  $safeDestination = str_replace(["\r", "\n"], ' ', $destination);
  $subject = 'Quote request ' . $reference . ' — ' . substr($safeDestination, 0, 80);
  $body = "New quote request {$reference}\n\n"
    . "Name: {$name}\nEmail: {$email}\nPhone: " . ($phone !== '' ? $phone : '—') . "\n"
    . "Destination: {$destination}\nWhen: " . ($travelWindow !== '' ? $travelWindow : '—') . "\n"
    . "Party: " . ($partySize !== '' ? $partySize : '—') . "\nCabin: " . ($cabin !== '' ? $cabin : '—') . "\n"
    . 'Marketing opt-in: ' . ($optIn ? 'yes' : 'no') . "\n\n{$plans}\n";
  $headers = "From: Sea Fun & Sun <Booking@Seafunandsun.com>\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8";
  @mail($notify, $subject, $body, $headers);
  $guest = "We have your request. The reference is {$reference}.\n\n"
    . "It is saved for Sea Fun & Sun in Farmington, Connecticut. This is not a booking and not a fare.\n"
    . "Call or text (959) 666-2062 if you need us sooner.\n";
  @mail($email, 'We have your travel request ' . $reference, $guest, "From: Sea Fun & Sun <Booking@Seafunandsun.com>\r\nContent-Type: text/plain; charset=UTF-8");

  echo json_encode(['ok' => true, 'reference' => $reference]);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Could not save the request.']);
}
