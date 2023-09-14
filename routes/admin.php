<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;

Route::middleware('auth')->group(function () {
    Route::get('', [HomeController::class,'index']);
    Route::get('/historia', [HomeController::class,'historia']);
    Route::get('/paciente', [HomeController::class,'paciente']);
});
