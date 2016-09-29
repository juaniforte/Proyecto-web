<?php
require('views/RFZAView.php');
require('models/RFZAModel.php');

class RFZAController
{
  private $vista;
  private $modelo;

  function __construct()
  {
    $this->modelo = new RFZAModel();
    $this->vista = new RFZAView();
  }

  function iniciar(){
    $this->vista->mostrar();
  }


}

 ?>
