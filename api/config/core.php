<?php
// Show error reporting
error_reporting(E_ALL);

// Set default timezone
date_default_timezone_set('UTC');

// Variables used for JWT
$key = "your_secret_key";
$issued_at = time();
$expiration_time = $issued_at + (60 * 60); // Valid for 1 hour
$issuer = "http://localhost/";
?>