<?php 

class Util
{
	function formatearFechaString($fechaString, $format = "Y-m-d") 
	{
		return $fechaString ? date($format, strtotime($fechaString)) : null;
	}
}


?>