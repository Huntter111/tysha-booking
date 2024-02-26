<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Отримання даних з форми
	$namePerson = $_POST["name"];
  	$lastNamePerson = $_POST["last-name"];
  	$phoneNumber = $_POST["phone"];
  	$startDate = $_POST["start-date"];
  	$endDate = $_POST["end-date"];
  	$quantity = $_POST["quantity"];
  	$message = $_POST["message"];

	// Налаштування Telegram-бота
	$botToken = "6326698251:AAG4khK9I-svNecAgxBSln9_g1UijVHI-6Y";
	$chatId = "-977034876";

	// Формування повідомлення
	$text = "<b>Нове бронювання Tysha</b>\n";
	$text .= "<b>Iм'я:</b> " . $namePerson . "\n";
	$text .= "<b>Прізвище:</b> " . $lastNamePerson . "\n";
	$text .= "<b>Телефон:</b> " . $phoneNumber . "\n";
	$text .= "<b>Дата заїзду:</b> " . $startDate . "\n";
	$text .= "<b>Дата від'їзду:</b> " . $endDate . "\n";
	$text .= "<b>Кількість гостей:</b> " . $quantity . "\n";
	$text .= "<b>Повідомлення:</b> " . $message . "\n";

	// Відправка повідомлення в Telegram
	$url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
	$params = [
		'chat_id' => $chatId,
		'parse_mode' => 'HTML',
		'text' => $text
	];

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);

	if ($response) {
		header("Location: http://warzone.org.ua/dist/thank-you-page.html");
		exit();
	} else {
		header("Location: http://warzone.org.ua/dist/404.html");
		// echo "Error";
	}
}
?>