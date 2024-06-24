<?php 

class Select2
{
    public $resultados;
    public $traerMasRegistros;

    public $informacionExtra;

    public function __construct($traerMasRegistros)
    {
        $this->resultados = array();
        $this->traerMasRegistros = $traerMasRegistros;
    }

    public function agregarOption($id, $text)
    {
        $this->resultados[] = new OptionSelect2($id, $text);
    }
}

class OptionSelect2
{
    public $id;
    public $text;

    public function __construct($id, $text)
    {
        $this->id = $id;
        $this->text = $text;
    }
}

?>