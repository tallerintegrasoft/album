<?php

class DataTable 
{
    public $draw;
    public $recordsFiltered;
    public $recordsTotal;
    public $data;
    public $informacionExtra;

    public function __construct() 
    {
        $this->draw = "";
        $this->recordsFiltered = 0;
        $this->recordsTotal = 0;
        $this->data = array();

        $this->informacionExtra = null;
    }
}

?>