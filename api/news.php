<?php
try {
    $config = include __DIR__ . '/config/config.php';
    require_once __DIR__ . '/vendor/autoload.php';

    $news = array();

    $consumer = new HTTP_OAuth_Consumer('key', 'secret');
    $consumer->getRequestToken('https://cloud.feedly.com/v3/auth/token', $callback);

    $news['token'] = $consumer->getToken();
    $news['token_secret'] = $consumer->getTokenSecret();

    header('HTTP/1.0 200 OK');
    header('Content-Type', 'application/json');
    echo (json_encode($news));
}
catch (Exception $e) {
    header('HTTP/1.0 500 Internal Server Error');
    header('Content-Type', 'application/json');
    echo (json_encode(array(
        'status' => 'failure',
        'message' => $e->getMessage(),
    )));
}
