<?php
class Usuarios extends Controller
{
    public function __construct() {
        parent::__construct();
        session_start();
    }
    public function index()  
    {
        $data ['title'] = 'Gestion de usuarios';
        $this ->views->getView('usuarios', 'index', $data);
    }
}