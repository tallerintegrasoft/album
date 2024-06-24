<?php

define('HOST', 'localhost');   	   
define('DB', 'ejemplo_generador_capas_jose');   
define('USER', 'root');       
define('PASSWORD', 'usbw');   

class Conexion
{
	private $conexion;  	

    public function __construct()
    {
        $this->conexion = new PDO("mysql:host=".HOST.";dbname=".DB, USER, PASSWORD);  // Se conecta usando las constantes que estan en config.php

        $this->conexion->exec("SET CHARACTER SET utf8");  // Esto es para mostrar caracteres como la ñ, á, é, í, ó, ú, etc
        
        // Importante comentar esto, sino los métodos del controlador no retornarán el json con el error, sino que mostrará en pantalla el error
        //$this->conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING ); // Si le quitas esto igual funcionará. Es solo para mostrar las excepciones
    }	
	
    public function getConexion()
    { 
	    return $this->conexion;
    }  
}

?>