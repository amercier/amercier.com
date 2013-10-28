<?php
try {
  $news = array();



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
