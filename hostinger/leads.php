<?php
declare(strict_types=1);
$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
  http_response_code(500);
  echo 'Missing config.php';
  exit;
}
$config = require $configPath;
$key = (string)($_POST['key'] ?? '');
$ok = hash_equals((string)$config['desk_key'], $key);
$rows = [];
if ($ok) {
  $pdo = new PDO(
    'mysql:host=' . $config['host'] . ';dbname=' . $config['name'] . ';charset=utf8mb4',
    $config['user'],
    $config['pass'],
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
  $rows = $pdo->query('select * from inquiries order by id desc limit 200')->fetchAll(PDO::FETCH_ASSOC);
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Request log — Sea Fun & Sun</title>
</head>
<body style="font-family: Georgia, serif; background:#f4f0e8; color:#1c282c; margin:2rem;">
  <h1>Request log</h1>
  <form method="post">
    <label>Access code <input type="password" name="key" required></label>
    <button type="submit">Open</button>
  </form>
  <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && !$ok): ?>
    <p>That access code doesn’t match.</p>
  <?php endif; ?>
  <?php if ($ok): ?>
    <p><?php echo count($rows); ?> saved.</p>
    <table border="1" cellpadding="6" cellspacing="0">
      <tr><th>When</th><th>Ref</th><th>Name</th><th>Email</th><th>Destination</th><th>Plans</th></tr>
      <?php foreach ($rows as $row): ?>
        <tr>
          <td><?php echo htmlspecialchars($row['created_at']); ?></td>
          <td><?php echo htmlspecialchars($row['reference']); ?></td>
          <td><?php echo htmlspecialchars($row['name']); ?></td>
          <td><?php echo htmlspecialchars($row['email']); ?></td>
          <td><?php echo htmlspecialchars($row['destination']); ?></td>
          <td><?php echo htmlspecialchars($row['plans']); ?></td>
        </tr>
      <?php endforeach; ?>
    </table>
  <?php endif; ?>
</body>
</html>
