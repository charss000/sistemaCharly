<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Dashboard');
    }
    
    public function historia(){
        return Inertia::render('Admin/Historia');
    }
    public function paciente(){
        return Inertia::render('Admin/Paciente');
    }
    
}
