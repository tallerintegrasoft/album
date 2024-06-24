<?php

class RespuestaBackend 
{
    public $objeto;
    public $errores = array();
    public $status = 200;
    public $mensajeExito;
    public $informacionExtra;

    public function agregarBadRequest($mensaje) {
        $this->errores[] = $mensaje;
        $this->status = 400;
    }

    public function agregarInternalServerError($mensaje) {
        $this->errores[] = $mensaje;
        $this->status = 500;
    }

    public function noAutorizado() {
        $this->errores[] = "No autorizado"; // 401 Unauthorized
        $this->status = 401;
    }

    public function agregarMensajeExito($mensaje) {
        $this->mensajeExito = $mensaje;
    }
}

?>