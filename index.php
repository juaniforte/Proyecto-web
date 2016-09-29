<?php
require('controllers/RFZAController.php');
require ('config/ConfigApp.php');

$controller = new RFZAController();

if (!array_key_exists(ConfigApp::$ACTION,$_REQUEST)){
  $controller->iniciar();
  die();
}

switch ($_REQUEST[ConfigApp::$ACTION]) {
  case ConfigApp::$ACTION_MOSTRAR_TAREAS:
    $controller->iniciar();
    break;
  default:
    $controller->iniciar();
    break;
}
?>
